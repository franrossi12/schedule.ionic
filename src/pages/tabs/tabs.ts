import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { TodayPage } from "../today/today";
import {CalendarPage} from "../calendar/calendar";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodayPage;
  tab2Root = CalendarPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
