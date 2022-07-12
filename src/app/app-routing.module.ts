import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { FaceSnapListComponent } from "./face-snaps/components/face-snap-list/face-snap-list.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SingleFaceSnapComponent } from './face-snaps/components/single-face-snap/single-face-snap.component';
import { NewFaceSnapComponent } from './face-snaps/components/new-face-snap/new-face-snap.component';

const routes: Routes = [
    { path: 'facesnaps/:id', component: SingleFaceSnapComponent },
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: 'create', component: NewFaceSnapComponent },
    { path: '', component: LandingPageComponent },
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}