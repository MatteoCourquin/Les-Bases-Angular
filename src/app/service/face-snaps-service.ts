import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})

export class FaceSnapsService {

    faceSnaps: FaceSnap[] = [
        {
            id: 1,
            title: 'Matteo',
            description: 'Photo de Matteo',
            createdDate: new Date(),
            like: 28,
            imgUrl: 'https://picsum.photos/1000/1000',
            location: 'Paris'
        },
        {
            id: 2,
            title: 'Jean',
            description: 'Photo de Jean',
            createdDate: new Date(),
            like: 164,
            imgUrl: 'https://picsum.photos/1000/1000',
        },
        {
            id: 3,
            title: 'Lucie',
            description: 'Photo de Lucie',
            createdDate: new Date(),
            like: 683,
            imgUrl: 'https://picsum.photos/1000/1000',
            location: 'Vannes'
        },
        {
            id: 4,
            title: 'Nicolas',
            description: 'Photo de Nicolas',
            createdDate: new Date(),
            like: 83,
            imgUrl: 'https://picsum.photos/1000/1000',
            location: 'Lille'
        },
        {
            id: 5,
            title: 'Nolan',
            description: 'Photo de Nolan',
            createdDate: new Date(),
            like: 718,
            imgUrl: 'https://picsum.photos/1000/1000',
        },
        {
            id: 6,
            title: 'Zoe',
            description: 'Photo de Zoe',
            createdDate: new Date(),
            like: 947,
            imgUrl: 'https://picsum.photos/1000/1000',
            location: 'Angers'
        },
    ];

    getAllFaceSnap(): FaceSnap[] {
        return this.faceSnaps;
    }

    getFaceSnapsById(faceSnapsId: number): FaceSnap {

        const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapsId)

        if (!faceSnap) {
            throw new Error('FaceSnap not found');
        } else{
            return faceSnap;
        }
    }

    snapFaceSnapById(faceSnapsId: number, snapType: 'Like' | 'Unlike'): void {

        const faceSnap = this.getFaceSnapsById(faceSnapsId);
        snapType === 'Like' ? faceSnap.like++ : faceSnap.like--;

    }
}