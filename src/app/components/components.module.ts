import {NgModule} from '@angular/core';
import {Button} from "./button/button"
@NgModule({
   declarations:[
       Button
   ] 
})
export class FoundationModule{
    constructor(){
console.log("hello")
    }
}