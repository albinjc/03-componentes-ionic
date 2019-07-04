import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll : IonInfiniteScroll;

  data : any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log("Cargando siguientes datos ...");

    setTimeout(() =>{

      if(this.data.length > 60){
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }

      const nuevoArreglo = Array(20);
      this.data.push(...nuevoArreglo);
      event.target.complete();
    }, 1000);
  }

}
