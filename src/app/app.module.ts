import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root/root.component';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { TimerService } from './timer.service';
import { TaskService } from './task.service';
import { TaskComponent } from './task/task.component';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    RootComponent,
    TaskComponent,
  ],
  bootstrap: [RootComponent],
  providers: [TimerService, TaskService],
})
export class AppModule {}
