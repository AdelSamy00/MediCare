import { Component } from '@angular/core';
import { CarouselModule,OwlOptions  } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  imports: [ CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    rewind: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    navSpeed: 700,
    items: 1,
    nav: false,
    rtl: true,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
  }
  images = [
    { id: '1', url: 'slider1.jpg' },
    { id: '2', url: 'slider2.jpg' },
    { id: '3', url: 'slider3.jpg' },
    { id: '4', url: 'slider4.jpg' }
  ];
}
