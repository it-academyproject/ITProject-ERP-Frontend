import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';

//////////////////////////
// Bootstrap JS imports //
//////////////////////////

/* TODO:
1. Before production, review B5 JS imports you actually used.
   Comment out those not used, to reduce final production bundle.

2. plus, if you're completely sure, you're not using components
   which require "popper.js", you can comment them out
   and also uninstall popper from this project.
   Check package.json to be sure '@popperjs/core' was removed successfully

   npm uninstall @popperjs/core
*/

import 'bootstrap/js/dist/alert';
import 'bootstrap/js/dist/dropdown'; // @popperjs/core
import 'bootstrap/js/dist/collapse'; // ~navbar, ~transitions, ~accordion
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/toast';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/tooltip'; // @popperjs/core
import 'bootstrap/js/dist/popover'; // @popperjs/core
import 'bootstrap/js/dist/scrollspy'; // onepage or section
import 'bootstrap/js/dist/button'; // ~toggle buttons on/of state
import 'bootstrap/js/dist/tab'; // tabbable panes of local content

//////////////////////////////////////////
// Font Awesome Single Icon npm Library //
//////////////////////////////////////////

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {
  faUserPlus,
  faSignInAlt,
  faCopyright,
  faEyeSlash,
  faEye,
  faMapMarkerAlt,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons'; // we only installed the solids

//////////////////////////////////////////
// Imports for ngx-tranlate library     //
//////////////////////////////////////////

import { TranslateService } from '@ngx-translate/core';

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // mode is the message that appears in the left top corner: Dev Mode
  mode = '';
  title = 'ITProject-ERP-Frontend';
  langs: string[] = [];

  // NOTE: how to get token? Login Component wil save it in sessionStorage ES6 object
  // Use sessionStorage.getItem('loginToken') to acces saved token ;)

  // created a local variable to get the login token and use it for the navbar
  loggedToken = sessionStorage.getItem('loginToken');

  constructor(private translateService: TranslateService) {
    this.mode = environment.mode;
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');
    this.translateService.addLangs(['en', 'es', 'cat']);
    this.langs = this.translateService.getLangs();
  }

  ngOnInit() {
    //  FONT AWESOME ICONS add plugin  //

    // We are only using the user-astronaut icon
    library.add(
      faUserPlus,
      faSignInAlt,
      faCopyright,
      faEyeSlash,
      faEye,
      faMapMarkerAlt,
      faBuilding
    );
    // Replace any existing <i> tags with <svg> and set up a MutationObserver to
    // continue doing this as the DOM changes.
    dom.watch();
  }

  changeLang(lang: string) {
    this.translateService.use(lang);
  }
}
