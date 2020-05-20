import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements AfterViewInit{
  @Input('appHighlight') backgroundColor: string;

  initialColor: string;

  constructor(private element: ElementRef<HTMLElement>) {}

  @HostBinding('style.backgroundColor') elementBackground: string;

  ngAfterViewInit(): void {
    this.initialColor = this.element.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.elementBackground = this.backgroundColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.elementBackground = this.initialColor;
  }
}
