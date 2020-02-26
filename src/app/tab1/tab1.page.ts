import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../types';
import { CoursesService } from '../courses.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  courseList: Observable<Course[]>;
  constructor(private courseService: CoursesService, private actionSheetController: ActionSheetController) {
    this.courseList = courseService.getAllCourses();
  }

  async presentActionSheet(course: Course) {
    const actionSheet = await this.actionSheetController.create({
      header: course.title,
      buttons: [{
        text: 'Play',
        icon: 'play',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
