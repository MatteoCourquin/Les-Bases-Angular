import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/service/face-snaps-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
    @Input() faceSnap!: FaceSnap;

    // Initilaiser un nom de variable et son type
    textButton!: string;

    constructor(private faceSnapsService: FaceSnapsService,
                private router: Router) {}

    ngOnInit() {
        // Initialiser les données du composant
        this.textButton = '♡';
    }

    onSnap() {
        if (this.textButton === '♡') {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, '♡');
            this.textButton = '♥';
        } else {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, '♥');
            this.textButton = '♡';
        }
    }

    onViewFaceSnap() {
        this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
    }
}