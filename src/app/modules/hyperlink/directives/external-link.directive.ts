import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: 'a[pvExternalLink]',
})
export class ExternalLinkDirective implements OnInit {
  constructor(
    private elementRef: ElementRef<HTMLAnchorElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const linkEl = this.elementRef.nativeElement;
    this.renderer.setAttribute(linkEl, 'target', '_blank');
    this.renderer.setAttribute(linkEl, 'rel', 'noreferrer');
  }
}
