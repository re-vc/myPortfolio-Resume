import { Component, AfterViewInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-aniverticalbanner',
  templateUrl: './aniverticalbanner.component.html',
  styleUrls: ['./aniverticalbanner.component.scss']
})
export class AniverticalbannerComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    anime({
      targets: '#aniverticalbanner',      
      keyframes: [
        { translateY: 780 },
        { translateY: 0, duration: 0 }
      ],
      duration: 8000,
      easing: 'linear',
      loop: true,
    });
  }
}
