import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/service/face-snaps-service';
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

    @Input() faceSnap!: FaceSnap;

    // Initilaiser un nom de variable et son type
    textButton!: string
    faceSnap$!: Observable<FaceSnap>

    constructor(private faceSnapsService: FaceSnapsService,
                private route: ActivatedRoute) { }

    ngOnInit() {
        // Initialiser les données du composant
        this.textButton = '♡';
        const faceSnapId = +this.route.snapshot.params['id'];
        this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId);
    }

    onSnap(faceSnapId: number) {
        if (this.textButton === '♡') {
            this.faceSnapsService.snapFaceSnapById(faceSnapId, '♡').pipe(
                tap(() => {
                    this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId)
                    this.textButton = '♥';
                })
            ).subscribe()
        } else {
            this.faceSnapsService.snapFaceSnapById(faceSnapId, '♥').pipe(
                tap(() => {
                    this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId)
                    this.textButton = '♡';
                })
            ).subscribe()
        }
    }
}
