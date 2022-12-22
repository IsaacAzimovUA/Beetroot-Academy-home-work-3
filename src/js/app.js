'use strict';

import { colorChanger } from './_colorChanger.js'
import { burgerMenu } from './_burgerMenu.js';
import { buyMenu } from './_buyMenu.js';
import { featureMenu } from './_featureMenu.js';
import { slicks } from './_slick.js';
import { footerYear } from './_copyrightYear.js';
import { object3d } from './three.js';

//*---------------Preloader---------------

colorChanger();
object3d();
burgerMenu();
buyMenu();
featureMenu();
slicks();
footerYear();

setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
}, 600);

// window.onload = function () {
// }

