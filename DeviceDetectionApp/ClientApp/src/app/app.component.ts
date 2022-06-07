import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  deviceInfo:DeviceInfo;
  title = 'Device Detection App';
  constructor(private deviceDetectorService: DeviceDetectorService) {}
  ngOnInit(): void {
     this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  }
}
