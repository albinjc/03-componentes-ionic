import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { pairs } from 'rxjs';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {

  @Input() nombre;
  @Input() pais;

  constructor( private modalCont : ModalController) { }

  ngOnInit() {
  }

  salirSinArgumentos(){
    this.modalCont.dismiss();
  }

  salirConArgumentos(){
    this.modalCont.dismiss({
      "nombre": "Vanessa",
      "pais": "Mexico"
    });
  }

}
