import { Injectable } from '@angular/core';
import {SAVED_ACTIVITIES} from "../shared/activities";
import {Activity} from "../model/activity";

@Injectable({
  providedIn: 'root'
})
export class ActivityAggregatorService {

  constructor() { }

  get activityList() {
    // Returns a copy of SAVED_ACTIVITIES
    return SAVED_ACTIVITIES.slice(0);
  }

  getNumOfActivities(allActivities: Activity[]) {
    return allActivities.length;
  }

  getTotalDistance(allActivities: Activity[]) {
    return allActivities.reduce(
      (total, current) => total + current.distance
      , 0);
  }

  getFirstDate(allActivities: Activity[]) {
    let earliestDate = new Date("01/01/9999");
    allActivities.forEach(value => {
      if (value.date < earliestDate) {
        earliestDate = value.date;
      }
    });
    return earliestDate;
  }
}
