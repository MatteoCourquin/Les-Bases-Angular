import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;

    // Initilaiser un nom de variable et son type
    textButton!: string;

    ngOnInit() {
        // Initialiser les données du composant
        this.textButton = 'Like';
    }

    likeSnap() {
        if (this.textButton === 'Like') {
            this.faceSnap.like++;
            this.textButton = 'Unlike';
        } else {
            this.faceSnap.like--;
            this.textButton = 'Like';
        }
    }
}
