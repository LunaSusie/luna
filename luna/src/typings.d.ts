// # 3rd Party Library
// If the library doesn't have typings available at `@types/`,
// you can still use it by manually adding typings for it
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
///<reference path="../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>
///<reference path="../node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.jquery.d.ts"/>
///<reference path="../node_modules/abp-web-resources/Abp/Framework/scripts/libs/abp.signalr.d.ts"/>
///<reference path="../node_modules/moment/moment.d.ts"/>
///<reference path="../node_modules/@types/moment-timezone/index.d.ts"/>
//<reference path="../node_modules/@types/toastr/index.d.ts"/>

declare var System: any;

//declare var App: any; //Related to Metronic
//declare var Layout: any; //Related to Metronic

//declare var Push: any;

interface JQuery {
    countTo(...any): any;
}

interface JQuery {
    sparkline(...any): any;
}

interface JQueryStatic {
    AdminBSB: any;
}