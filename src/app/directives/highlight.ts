import { OnInit, ElementRef, Renderer2, Directive, Input } from '@angular/core';

@Directive({
    selector: "[highlight]"
})
export class HighlightDirective implements OnInit {
    @Input() incolor: string;
    constructor(private el: ElementRef, private renderer: Renderer2) {
       
    }
    ngOnInit() {
        this.renderer.setStyle(this.el.nativeElement, "color", this.incolor || 'red');
        console.log(this.incolor);
    }

}