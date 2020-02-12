import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { DefaultLayoutComponent } from './default-layout/default-layout/default-layout.component';
import { TrainingComponent } from './training/training.component';
import { CreateSlideshowComponent } from './slideshow/create-slideshow/create-slideshow.component';

import { SlideshowComponent } from './slideshow/slideshow.component';
import { CreateTrainingComponent } from './training/create-training/create-training.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    DefaultLayoutComponent,
    TrainingComponent,
    CreateSlideshowComponent,
    
    SlideshowComponent,
    CreateTrainingComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      // { path: '', component: HomeComponent, pathMatch: 'full' },
      {
        path:'',
        pathMatch:'full',
        redirectTo:'training'
      },
      { path: 'counter', component: CounterComponent },
      // { path: 'fetch-data', component: FetchDataComponent, canActivate: [AuthorizeGuard] },
      // { path: 'login', component: LoginComponent },
      {
        path: '',
        component: DefaultLayoutComponent,
        data: {
          title: 'หน้าหลัก'
        },
        children: [
          { path: 'training', component: TrainingComponent },
          { path: 'create-slideshow', component: CreateSlideshowComponent },
          { path: 'slideshow', component: SlideshowComponent },
          { path: 'training/create', component: CreateTrainingComponent },
        ]
      }
    ]),
    // ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
