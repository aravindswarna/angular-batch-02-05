import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[ngStyleTemp]'
})
export class AppHighlighterDirective {

  @Input() ngStyleTemp: string = ''; 
  constructor(private el: ElementRef) {
    
  }

  ngOnInit(){
    this.el.nativeElement.style.backgroundColor = this.ngStyleTemp;
  }

}
