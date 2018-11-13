import { Component, OnInit } from '@angular/core';
import {NzNotificationService, NzMessageService } from 'ng-zorro-antd';
import { AppConsts } from '@shared/AppConsts';

@Component({
    selector: 'app-root',
    template: `<router-outlet></router-outlet>`
})
export class RootComponent implements OnInit {
    constructor(
        private _notifyService: NzMessageService,
      ) {}
      ngOnInit(){
        AppConsts.overrideAbpMessageByMini(this._notifyService);
      }
    
}