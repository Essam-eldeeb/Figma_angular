import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-middle-bar',
  templateUrl: './middle-bar.component.html',
  styleUrl: './middle-bar.component.css'
})
export class MiddleBarComponent {
[x: string]: any;
constructor(private primengConfig: PrimeNGConfig) {}

ngOnInit() {
    this.primengConfig.ripple = true;
}


}
