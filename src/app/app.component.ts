import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    mySnap!: FaceSnap;
    mySnap2!: FaceSnap;

    ngOnInit() {
        this.mySnap = new FaceSnap(
            'Matteo',
            'Photo de Matteo',
            new Date(),
            6,
            'https://picsum.photos/1000/1000',
        );

        this.mySnap2 = new FaceSnap(
            'Jean',
            'Photo de Jean',
            new Date(),
            2,
            'https://picsum.photos/1000/1000',
        );
    }
}
