import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    ngOnInit() {
    }
    // mySnap!: FaceSnap;

    // ngOnInit() {
    //     this.mySnap = new FaceSnap(
    //         'Matteo',
    //         'Photo de Matteo',
    //         new Date(),
    //         6,
    //         'https://picsum.photos/1000/1000',
    //         'paris'
    //     );
    // }
}
