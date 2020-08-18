import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MapService} from "../../services/map.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-activity',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class  ActivityDetailsComponent implements OnInit, AfterViewInit {

  activity: any;
  activityName: string;
  activityComments: string;
  activityDate: Date;
  activityDistance: number;
  gpx: any

  constructor(private mapService: MapService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.activity = this.mapService.getActivity(
      this.route.snapshot.params['id']
    );
    this.activityName = this.activity.name;
    this.activityComments = this.activity.comments;
    this.activityDistance = this.activity.distance;
    this.activityDate = this.activity.date;
    this.gpx = this.activity.gpx;
    this.mapService.plotActivity(+this.route.snapshot.params['id']);
  }

  ngAfterViewInit(): void {
  }

}
