import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatGridListModule} from '@angular/material/grid-list';



const materialComponents: any[] | Type<any> | ModuleWithProviders<{}> = [
  MatSidenavModule,
  MatButtonModule,
  MatDividerModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatGridListModule
 
]
@NgModule({
  imports: [materialComponents],
  exports: [materialComponents]
})
export class MaterialModule { }
