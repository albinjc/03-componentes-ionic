import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo : string;

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Boton Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: (blah) => {
            console.log('Boton OK');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const input = await this.alertController.create({
      header: 'Datos Personales',
      backdropDismiss: false,
      inputs: [
        {
          name: 'nameField',
          type: 'text',
          placeholder: 'Escriba su nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Enviar',
          handler: (data) => {
            this.titulo = data.nameField;
            console.log('Confirm Ok: ' + data.nameField);
          }
        }
      ]
    });

    await input.present();
  }

}
