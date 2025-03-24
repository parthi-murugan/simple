import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class counterService{
    mela(title: string) {
        alert("Vanakam da mapla");
    }
    name(title: string) {
        alert("Your name was success fully submited");
    }
    me(p0: string){
        alert("You success fully clicked me");
    }
  }