import { Component, Injector, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { LoginService } from './login.service';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { AbpSessionService } from '@abp/session/abp-session.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less'],
    animations: [accountModuleAnimation()]
})
export class LoginComponent extends AppComponentBase implements AfterViewInit{
     @ViewChild('loginForm') loginForm: ElementRef;
    logining: boolean = false;
    constructor(
        injector: Injector,
        public loginService: LoginService,
        private _sessionService: AbpSessionService
    ) {
        super(injector);
    }
   
    ngAfterViewInit(): void {
        $(this.loginForm.nativeElement).find('input:first').focus();
    }

    get multiTenancySideIsTeanant(): boolean {
        return this._sessionService.tenantId > 0;
    }

    get isSelfRegistrationAllowed(): boolean {
        if (!this._sessionService.tenantId) {
            return false;
        }
        return true;
    }

    login(): void {
        this.logining = true;
        this.loginService.authenticate(
            () => this.logining = false
        );
    }
}
