import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../service/face-snaps-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

    @Input() faceSnap!: FaceSnap;

    // Initilaiser un nom de variable et son type
    textButton!: string;

    constructor(private faceSnapsService: FaceSnapsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        // Initialiser les données du composant
        this.textButton = 'Like';
        const faceSnapId = +this.route.snapshot.params['id'];
        this.faceSnap = this.faceSnapsService.getFaceSnapsById(faceSnapId);
    }

    likeSnap() {
        if (this.textButton === 'Like') {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Like');
            this.textButton = 'Unlike';
        } else {
            this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'Unlike');
            this.textButton = 'Like';
        }
    }
}
