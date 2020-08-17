import {Activity} from "../model/activity";

export const SAVED_ACTIVITIES: Activity[] = [

  {
    id: 1,
    name: "Run around the village green",
    date: new Date('24/03/2016'),
    distance: 6.5,
    comments:"Felt great! had fantastic coffee beforehand",
    gpx: '../../assets/gpx/2016-03-24 5061000000019510006400001207369500528802 Running Nike.gpx'
  },
  {
    id: 2,
    name: "Run to Coogee",
    date: new Date('02/02/2019'),
    distance: 7.5,
    comments:"🌊 catchin waves son 😎",
    gpx: '../../assets/gpx/2019-04-02 6b6d9316-6028-4695-bd93-9c735230381a Running Nike'
  },
  {
    id: 3,
    name: "Run to Bondi",
    date: new Date('20/12/2019'),
    distance: 10.2,
    comments:"🔥 Burning cals",
    gpx: '../../assets/gpx/2018-12-20 adffc02e-b3eb-4811-9523-bfb38f44bf4a Running Nike'
  },
  {
    id: 4,
    name: "Run to feel better",
    date: new Date('27/01/2020'),
    distance: 12.8,
    comments:"🏃🏾 toasted",
    gpx: '../../assets/gpx/2020-01-27 f8851209-18d4-42cf-bcb7-b8b81a443214 Running Nike'
  }
]