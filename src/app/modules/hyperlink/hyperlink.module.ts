import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalLinkDirective } from './directives/external-link.directive';

@NgModule({
  declarations: [ExternalLinkDirective],
  exports: [ExternalLinkDirective],
  imports: [CommonModule],
})
export class HyperlinkModule {}
