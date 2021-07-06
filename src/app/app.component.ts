import { Component,ComponentFactoryResolver, OnDestroy, ViewChild } from '@angular/core';
import {ModalComponent } from './layout/modal/modal.component';
import { ViewcontainerrefDirective } from '../app/shared/directive/viewcontainerref.directive'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  closeSubscription:Subscription;
  @ViewChild(ViewcontainerrefDirective) modalPlaceHolder:ViewcontainerrefDirective
  constructor(private ComponentFactoryResolver:ComponentFactoryResolver) { }
  openModal(){
    const dynamicComponentCreation= this.ComponentFactoryResolver.resolveComponentFactory(ModalComponent);
    this.modalPlaceHolder.ViewContainerRef.clear();
   const componentRef= this.modalPlaceHolder.ViewContainerRef.createComponent(dynamicComponentCreation);
     this.closeSubscription =  componentRef.instance.close.subscribe(()=>{
        this.closeSubscription.unsubscribe();
        this.modalPlaceHolder.ViewContainerRef.clear();
      })

  }
ngOnDestroy(){
  if(this.closeSubscription){
    this.closeSubscription.unsubscribe();
  }
}
}
