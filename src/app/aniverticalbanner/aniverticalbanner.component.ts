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
      translateY: [
        { value: '-10vh', duration: 0 },
        { value: '19.2vh', duration: 10000 }
      ],
      easing: 'linear',
      direction: 'normal',
      loop: true
    });
  }
}
