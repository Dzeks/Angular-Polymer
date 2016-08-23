import {Component, bootstrap, CORE_DIRECTIVES} from 'angular2/angular2';


@Component({
  selector: 'polymer-app',
  providers: [],
  templateUrl: 'app/polymer.html',
  styleUrls: ['app/polymer.css'],
  directives: [CORE_DIRECTIVES],
  pipes: [],
  events: []
})
export class PolymerApp {
    videoId: string;
    clicked = 0;

    showMap: boolean;
    map: any;
    mapQuery: string;
    mapResults = [];

    constructor() {}
    onClick() {
        this.clicked = this.clicked +1;
    }
    setVideo($event) {
        this.videoId = $event.target.value;
    }
    playbackStatusChange($event) {
        console.log($event);
    }

    getDirections() {
        this.showMap = true;
    }
    located($event) {
        console.log($event);
    }
    
    storeResults($event) {
        this.mapResults = $event.detail;
    }
}
