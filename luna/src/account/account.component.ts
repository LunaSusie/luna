import { Component, OnInit, Injector } from '@angular/core';
import { LoginService } from './login/login.service';
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    selector:'layout-passport',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.less']
})
export class AccountComponent extends AppComponentBase implements OnInit {

    versionText: string;
    currentYear: number;

    public constructor(
        injector: Injector,
        private _loginService: LoginService
    ) {
        super(injector);

        this.currentYear = new Date().getFullYear();
        this.versionText = this.appSession.application.version + ' [' + this.appSession.application.releaseDate.format('YYYYDDMM') + ']';
    }

    showTenantChange(): boolean {
        return abp.multiTenancy.isEnabled;
    }
    links = [
        {
          title: '帮助',
          href: '',
        },
        {
          title: '隐私',
          href: '',
        },
        {
          title: '条款',
          href: '',
        },
      ];
    ngOnInit(): void {
      
    }
}