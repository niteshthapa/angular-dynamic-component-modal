import { Component, DoCheck, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
@Output() close = new EventEmitter<void>();
  constructor() { }

closeModal(){
  this.close.emit();
 
}

  ngOnInit(): void {
  }

}
