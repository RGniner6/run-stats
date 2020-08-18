import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {SAVED_ACTIVITIES} from "../shared/activities";
import * as L from 'leaflet';
import * as omnivore from 'leaflet-omnivore';
import GPX from 'gpx-parser-builder';
import {HttpClient} from "@angular/common/http";


const apiToken = environment.MAPBOX_API_KEY;
const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor(private http: HttpClient) { }

  getActivity(id: number) {
    return SAVED_ACTIVITIES.slice(0).find(run => run.id == id);
  }

  gpxToJson(filepath: string) {
    let gpx;
    this.http.get(filepath, { responseType: 'text' })
      .subscribe(data => {
        // console.log(data);
        gpx = GPX.parse(data);
        console.log(gpx);
      });
  }

  plotActivity(id: number){
    let myStyle = {
      "color": "#3949AB",
      "weight": 5,
      "opacity": 0.95
    };

    let map = L.map('map').setView(defaultCoords, defaultZoom);

    map.maxZoom = 100;

    L.tileLayer('https://api.mapbox.com/styles/v1/rgniner6/cke00b2r90yhd1arrc5ubvvdr/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicmduaW5lcjYiLCJhIjoiY2tkeWtvaTRhM2R0aTJycXFwcnptM241aSJ9.gv_AZfxBFbt6X3NLqzszWw', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18,
      // id: 'mapbox.dark',
      accessToken: apiToken
    }).addTo(map);

    let customLayer = L.geoJson(null, {
      style: myStyle
    });


    this.gpxToJson(SAVED_ACTIVITIES.slice(0).find(run => run.id == id).gpx);
    let gpxLayer = omnivore.gpx(SAVED_ACTIVITIES.slice(0).find(run => run.id == id).gpx, null, customLayer)
      .on('ready', function() {
        map.fitBounds(gpxLayer.getBounds());
      }).addTo(map);
  }
}
