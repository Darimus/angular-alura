import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector:'[apDarkenOnHover]'
})

export class DarkenOnHoverDirective { 
    constructor(private el: ElementRef){}

    @HostListener('')

    darkenOn(){
        console.log('DarkenOn')
    }

    darkenOff(){
        console.log('DarkenOff')
    }
 }