import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover/popover';
import { HeaderMenuComponent } from './header-menu/header-menu';
@NgModule({
	declarations: [PopoverComponent,
    HeaderMenuComponent],
	imports: [],
	exports: [PopoverComponent,
    HeaderMenuComponent]
})
export class ComponentsModule {}
