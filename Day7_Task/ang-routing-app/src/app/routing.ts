import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { MissionComponent } from './mission/mission.component';
import { VisionComponent } from './vision/vision.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent, children:[
        {path:'mission', component: MissionComponent},
        {path:'vision', component: VisionComponent}
    ]},
    {path: 'services', component: ServiceComponent},
    {path: 'contacts', component: ContactComponent},
]