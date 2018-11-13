import { Component, OnInit, ViewChild, Injector, ElementRef } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import { AccountServiceProxy } from '@shared/service-proxies/service-proxies';
import { IsTenantAvailableInput, IsTenantAvailableOutput } from '@shared/service-proxies/service-proxies';
import { AppTenantAvailabilityState } from '@shared/AppEnums';

import { finalize } from 'rxjs/operators';
import { NzModalRef } from 'ng-zorro-antd';

@Component({
    selector: 'tenantChangeModal',
    templateUrl: './tenant-change-modal.component.html'
})
export class TenantChangeModalComponent extends AppComponentBase {
    
    tenancyName: string = '';
    saving: boolean = false;

    constructor(
        private _accountService: AccountServiceProxy,
        private _modal: NzModalRef,
        injector: Injector
    ) {
        super(injector);
    }


    save(): void {
        //为空则默认host用户
        if (!this.tenancyName) {
            abp.multiTenancy.setTenantIdCookie(undefined);
            this.close();
            location.reload();
            return;
        }

        var input = new IsTenantAvailableInput();
        input.tenancyName = this.tenancyName;

        this.saving = true;
        this._accountService.isTenantAvailable(input)
            .pipe(finalize(() => { this.saving = false; }))
            .subscribe((result: IsTenantAvailableOutput) => {
                switch (result.state) {
                    case AppTenantAvailabilityState.Available:
                        abp.multiTenancy.setTenantIdCookie(result.tenantId);
                        this.close();
                        location.reload();
                        return;
                    case AppTenantAvailabilityState.InActive:
                        this.message.warn(this.l('TenantIsNotActive', this.tenancyName));
                        break;
                    case AppTenantAvailabilityState.NotFound: //NotFound
                        this.message.warn(this.l('ThereIsNoTenantDefinedWithName{0}', this.tenancyName));
                        break;
                }
            });
    }
    close():void{
        this._modal.destroy();
    }
}
