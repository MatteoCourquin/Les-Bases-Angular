import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    constructor(private http: HttpClient) {}

    getAllFaceSnap(): Observable<FaceSnap[]> {
        return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps');
    }

    getFaceSnapsById(faceSnapsId: number): Observable<FaceSnap> {

        return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapsId}`);
        

        // const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapsId)

        // if (!faceSnap) {
        //     throw new Error('FaceSnap not found');
        // } else{
        //     return faceSnap;
        // }
    }

    snapFaceSnapById(faceSnapsId: number, snapType: '♡' | '♥'): Observable<FaceSnap> {

        return this.getFaceSnapsById(faceSnapsId).pipe(
            map(faceSnap => ({
                ...faceSnap,
                snaps: faceSnap.snaps + (snapType === '♡' ? 1 : -1),
            })),
            switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapsId}`, updatedFaceSnap))
        )

    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): Observable<FaceSnap> {
        return this.getAllFaceSnap().pipe(
            map(facesnaps => [...facesnaps].sort((a: FaceSnap, b: FaceSnap) => a.id - b.id)),
            map(sortedFaceSnaps => sortedFaceSnaps[sortedFaceSnaps.length - 1]),
            map(previousFaceSnap => ({
                ...formValue,
                snaps: 0,
                createdDate: new Date(),
                id: previousFaceSnap.id + 1,
            })),
            switchMap(newFaceSnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFaceSnap))
        )
        // const faceSnap: FaceSnap = {
        //     ...formValue,
        //     createdDate: new Date(),
        //     snaps: 0,
        //     id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
        // }
        // this.faceSnaps.push(faceSnap);
    }
}