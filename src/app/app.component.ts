import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    faceSnaps!: FaceSnap[];

    ngOnInit() {

        // Tableau de Face Snap qu'on va afficher avec ngFor
        this.faceSnaps = [
            {
                title: 'Matteo', 
                description: 'Photo de Matteo', 
                createdDate: new Date(), 
                like: 20, 
                imgUrl: 'https://picsum.photos/1000/1000',
                location: 'Paris'
            },
            {
                title: 'Matteo', 
                description: 'Photo de Matteo', 
                createdDate: new Date(), 
                like: 100, 
                imgUrl: 'https://picsum.photos/1000/1000',
            },
            {
                title: 'Matteo', 
                description: 'Photo de Matteo', 
                createdDate: new Date(), 
                like: 200, 
                imgUrl: 'https://picsum.photos/1000/1000',
                location: 'Paris'
            },
            {
                title: 'Matteo', 
                description: 'Photo de Matteo', 
                createdDate: new Date(), 
                like: 4, 
                imgUrl: 'https://picsum.photos/1000/1000',
                location: 'Paris'
            },
            {
                title: 'Matteo', 
                description: 'Photo de Matteo', 
                createdDate: new Date(), 
                like: 4, 
                imgUrl: 'https://picsum.photos/1000/1000',
            },
            {
                title: 'Matteo', 
                description: 'Photo de Matteo', 
                createdDate: new Date(), 
                like: 900,
                imgUrl: 'https://picsum.photos/1000/1000',
                location: 'Paris'
            },
        ];
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
