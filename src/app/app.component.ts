import { AfterViewInit, Component, Inject } from '@angular/core';
import { NavigationEnd, Router, Event } from '@angular/router';
import { DOCUMENT } from '@angular/common';

declare var jQuery: any;
declare var cursurCircle: any;
declare var initializeOnReady: any;
declare var initializeOnLoad: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'anih';

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document) {

  }

  ngAfterViewInit(): void {
    cursurCircle();
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.reinitializeThings();
        this.loadStyle('skin-1');
      }
    });
  }

  private reinitializeThings() {
    (function ($) {
      setTimeout(function () {
        initializeOnLoad();
        initializeOnReady();
      }, 1000);
    })(jQuery);
  }

  private loadStyle(skinName: String) {
    const head = this.document.getElementsByTagName('head')[0];

    //-----------------------------------------------
    // SKIN UPDATE
    //-----------------------------------------------
    let themeLinkskin = this.document.getElementById(
      'client-theme-skin'
    ) as HTMLLinkElement;

    if (themeLinkskin) {
      themeLinkskin.href = "assets/css/skin/" + skinName + ".scss";
    } else {
      const skin = this.document.createElement('link');
      skin.id = 'client-theme-skin';
      skin.rel = 'stylesheet';
      skin.href = "assets/css/skin/" + `${skinName}` + ".scss";

      head.appendChild(skin);
    }
  }
}
