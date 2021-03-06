import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-updatepageComponent
import { updatepageComponent } from '../components/updatepageComponent/updatepage.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/loginComponent/login.component';
//CORE_REFERENCE_IMPORT-samplepageComponent
import { samplepageComponent } from '../components/samplepageComponent/samplepage.component';
//CORE_REFERENCE_IMPORT-loginpageComponent
import { loginpageComponent } from '../components/loginpageComponent/loginpage.component';
//CORE_REFERENCE_IMPORT-listincidencepageComponent
import { listincidencepageComponent } from '../components/listincidencepageComponent/listincidencepage.component';
//CORE_REFERENCE_IMPORT-addincidencepageComponent
import { addincidencepageComponent } from '../components/addincidencepageComponent/addincidencepage.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-updatepageComponent
updatepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
loginComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-samplepageComponent
samplepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginpageComponent
loginpageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-listincidencepageComponent
listincidencepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-addincidencepageComponent
addincidencepageComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'addIncidence', component: addincidencepageComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'listData', component: listincidencepageComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'loginpage', component: loginpageComponent},{path: 'samplepage', component: samplepageComponent, canActivate: [NeutrinosAuthGuardService]},{path: 'login', component: loginComponent},{path: 'updatepage', component: updatepageComponent, canActivate: [NeutrinosAuthGuardService]},{path: '', redirectTo: 'loginpage', pathMatch: 'full'},{path: '**', redirectTo: 'loginpage'}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
