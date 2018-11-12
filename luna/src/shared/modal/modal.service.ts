import { Injectable } from '@angular/core';
import { ModalOptionsForService, NzModalService } from 'ng-zorro-antd';
import { Observable, observable, Observer } from 'rxjs';

export interface modalOptions {
	//大小
	size?: 'sm' | 'md' | 'lg' | 'xl' | '' | number;
	//配置
	modalOptions: ModalOptionsForService;
	//是否精准
	exact?: boolean;
	//是否包裹标签
	includeTabs?: boolean;
}

@Injectable()
export class ModalService {
	private zIndex = 500;
	constructor(private nzModalService: NzModalService) {}

	/**
     *创建对话框
     *
     * @param {*} com
     * @param {*} [params]
     * @param {modalOptions} [options]
     * @memberof ModalService
     */
	create(com: any, params?: any, options?: modalOptions): Observable<any> {
		options = Object.assign(
			{
				size: 'lg',
				exact: true,
				includeTabs: false
			},
			options
		);
		return Observable.create((observer: Observer<any>) => {
			let cls = '',width = '';
			if (typeof options.size == 'number') {
				width = `${options.size}px`;
			} else {
				cls = `modal-${options.size}`;
			}
			if (options.includeTabs) {
				cls += ` modal-include-tabs`;
			}
			const defaultOptions: ModalOptionsForService = {
				nzWrapClassName: cls,
				nzContent: com,
				nzWidth: width ? width : undefined,
				nzFooter: null,
				nzComponentParams: params,
				nzZIndex: this.zIndex
			};
			const subject = this.nzModalService.create(Object.assign(defaultOptions, options.modalOptions));
			const afterClose$ = subject.afterClose.subscribe((res: any) => {
				if (options.exact === true) {
					if (res != null) {
						observer.next(res);
					} else {
						observer.error(res);
					}
				} else {
					observer.next(res);
				}
				observer.complete();
				afterClose$.unsubscribe();
			});
		});
    }

    /**
     *
     *构建静态框，点击蒙层不允许关闭
     * @param {*} com
     * @param {*} [params]
     * @param {modalOptions} [options]
     * @returns {Observable<any>}
     * @memberof ModalService
     */
    createStatic(com: any, params?: any, options?: modalOptions): Observable<any>{
        const modalOptions = Object.assign(
            { 
                nzMaskClosable: false 
            },
            options && options.modalOptions,
          );
          return this.create(com, params, Object.assign({}, options, { modalOptions }));
    }

    /**
     *
     *打开对话框
     * @param {*} comp
     * @param {*} [params]
     * @param {('sm' | 'md' | 'lg' | 'xl' | '' | number)} [size='lg']
     * @param {ModalOptionsForService} [options]
     * @returns {Observable<any>}
     * @memberof ModalService
     */
    open(
        comp: any,
        params?: any,
        size: 'sm' | 'md' | 'lg' | 'xl' | '' | number = 'lg',
        options?: ModalOptionsForService,
      ): Observable<any> {
        return this.create(comp, params, {
          size,
          modalOptions: options,
          exact: false,
        });
      }
      /**
       *静态框
       *
       * @param {*} comp
       * @param {*} [params]
       * @param {('sm' | 'md' | 'lg' | 'xl' | '' | number)} [size='lg']
       * @param {*} [options]
       * @returns {Observable<any>}
       * @memberof ModalService
       */
      static(
        comp: any,
        params?: any,
        size: 'sm' | 'md' | 'lg' | 'xl' | '' | number = 'lg',
        options?: any,
      ): Observable<any> {
        return this.open(
          comp,
          params,
          size,
          Object.assign(
            {
              nzMaskClosable: false,
            },
            options,
          ),
        );
    }
}
