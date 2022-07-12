import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/service/face-snaps-service';

@Component({
    selector: 'app-face-snap-list',
    templateUrl: './face-snap-list.component.html',
    styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

    faceSnaps!: FaceSnap[];
    faceSnaps$!: Observable<FaceSnap[]>;
    // private destroy$!: Subject<boolean>;

    constructor(private faceSnapsService: FaceSnapsService) { }

    ngOnInit(): void{

        // this.destroy$ = new Subject<boolean>();
        this.faceSnaps$ = this.faceSnapsService.getAllFaceSnap();

        // interval(1000).pipe(
        //     // Prendre des valeurs jusqu'à ce que le composant soit détruit (quitte le composant)
        //     takeUntil(this.destroy$),

        //     tap(value => console.log(value))
        // ).subscribe()
    }

    // ngOnDestroy(): void {
    //     this.destroy$.next(true);
    // }
}

