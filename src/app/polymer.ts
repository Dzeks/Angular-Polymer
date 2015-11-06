import {Component, bootstrap, NgIf} from 'angular2/angular2';


@Component({
  selector: 'polymer-app',
  providers: [],
  templateUrl: 'app/polymer.html',
  styleUrls: ['app/polymer.css'],
  directives: [NgIf],
  pipes: []
})
export class PolymerApp {
    videoId: string;
    clicked = 0;

    showMap: boolean;
    map: any;
    mapFrom: string;
    mapTo: string;

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
}
