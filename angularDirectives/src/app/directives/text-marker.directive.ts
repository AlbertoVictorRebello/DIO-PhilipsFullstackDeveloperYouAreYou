import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextMarker]'
})
export class TextMarkerDirective implements OnInit{
  @Input() bkgColor: string = 'yellow';
  @Input() txtColor: string = 'white';

  constructor(private element: ElementRef) { }
  ngOnInit(): void {
    this.changeBkgColor();
    
  }

  private changeBkgColor(color: string = 'yellow'){
    this.element.nativeElement.style.backgroundColor = this.bkgColor || color;
    this.element.nativeElement.style.color = this.txtColor || color;
    this.element.nativeElement.style.fontWeight = 'bold';
  }


}
