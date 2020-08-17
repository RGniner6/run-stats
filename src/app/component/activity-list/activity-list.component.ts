import { Component, OnInit } from '@angular/core';
import {Activity} from "../../model/activity";
import {ActivityAggregatorService} from "../../services/activity-aggregator.service";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit {

  activities: Activity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  constructor(private activityService: ActivityAggregatorService) { }

  ngOnInit(): void {
    this.activities = this.activityService.activityList;
    this.totalActivities = this.activityService.getNumOfActivities(this.activities);
    this.totalDistance = this.activityService.getTotalDistance(this.activities);
    this.firstDate = this.activityService.getFirstDate(this.activities);
  }

}
