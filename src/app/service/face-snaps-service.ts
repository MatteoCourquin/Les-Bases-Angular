import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    constructor(private http: HttpClient) {}

    faceSnaps: FaceSnap[] = [
        // {
        //     id: 1,
        //     title: 'Matteo',
        //     description: 'Photo de Matteo',
        //     createdDate: new Date(),
        //     like: 28,
        //     location: 'Paris'
        // },
    ];

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

    snapFaceSnapById(faceSnapsId: number, snapType: '♡' | '♥'): void {

        // const faceSnap = this.getFaceSnapsById(faceSnapsId);
        // snapType === '♡' ? faceSnap.like++ : faceSnap.like--;

    }

    addFaceSnap(formValue: {title: string, description: string, imageUrl: string, location?: string}): void {
        const faceSnap: FaceSnap = {
            ...formValue,
            createdDate: new Date(),
            like: 0,
            id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
        }
        this.faceSnaps.push(faceSnap);
    }
}