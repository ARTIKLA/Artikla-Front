import { Component, OnInit, Input } from '@angular/core';
import { modalInfo } from 'src/app/interfaces/modal.info';

@Component({
  selector: 'app-modal-mensaje',
  templateUrl: './modal-mensaje.component.html',
  styleUrls: ['./modal-mensaje.component.css']
})
export class ModalMensajeComponent implements OnInit {

  @Input() modalInfo : modalInfo;
  constructor() { }

  ngOnInit(): void {
    console.log(this.modalInfo);
  }

}
