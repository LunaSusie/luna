import { Component, Injector, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountServiceProxy, RegisterInput, RegisterOutput } from '@shared/service-proxies/service-proxies'

import { AppComponentBase } from '@shared/app-component-base';
import { LoginService } from '../login/login.service';
import { accountModuleAnimation } from '@shared/animations/routerTransition';
import { finalize } from 'rxjs/operators';

@Component({
    templateUrl: './register.component.html',
    styleUrls:['./register.component.less'],
    animations: [accountModuleAnimation()]
})
export class RegisterComponent extends AppComponentBase implements OnInit{

     @ViewChild('registerForm') registerForm: ElementRef;

    model: RegisterInput = new RegisterInput();

    registering: boolean = false;

    constructor(
        injector: Injector,
        private _accountService: AccountServiceProxy,
        private _router: Router,
        private readonly _loginService: LoginService
    ) {
        super(injector);
    }

    ngOnInit(): void {
        if (!this.appSession.tenant) {
          this.back();
          return;
        }
        this.model = new RegisterInput();
      }

      back(): void {
        this._router.navigate(['/account/login']);
      }

    register(): void {
        this.registering = true;
        this._accountService.register(this.model)
            .pipe(finalize(() => { this.registering = false; }))
            .subscribe((result:RegisterOutput) => {
                if (!result.canLogin) {
                    this.notify.success(this.l('SuccessfullyRegistered'));
                    this._router.navigate(['/login']);
                    return;
                }
                //Autheticate
                this.registering = true;
                this._loginService.authenticateModel.userNameOrEmailAddress = this.model.userName;
                this._loginService.authenticateModel.password = this.model.password;
                this._loginService.authenticate(() => { this.registering = false; });
            });
    }
}
