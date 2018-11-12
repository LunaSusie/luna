import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { AccountServiceProxy } from '@shared/service-proxies/service-proxies' 
import { TenantChangeModalComponent } from './tenant-change-modal.component'
import { AppComponentBase } from '@shared/app-component-base';

@Component({
    selector: 'tenant-change',
    templateUrl: './tenant-change.component.html'
})
export class TenantChangeComponent extends AppComponentBase implements OnInit {
    tenancyName: string;
    name: string;

    constructor(
        injector: Injector,
        private _accountService: AccountServiceProxy
        ) { 
        super(injector);
    }

    ngOnInit() {
        
        if (this.appSession.tenant) {
            this.tenancyName = this.appSession.tenant.tenancyName;
            this.name = this.appSession.tenant.name;
        }
    }

    get isMultiTenancyEnabled(): boolean {        
        return abp.multiTenancy.isEnabled;
    }

    showChangeModal(): void{
        this.modalService.open(TenantChangeModalComponent,{tenancyName:this.tenancyName},'md',{nzMask:true}).subscribe(()=>{});
        //this.tenantChangeModal.show(this.tenancyName);
    }
}