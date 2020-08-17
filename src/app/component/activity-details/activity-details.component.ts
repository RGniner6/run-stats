import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MapService} from "../../services/map.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-activity',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class  ActivityDetailsComponent implements OnInit, AfterViewInit {

  constructor(private mapService: MapService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

}
