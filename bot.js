// ==UserScript==
// @name         Bing BOT 0.1
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  bot allows you to find anime by keyword!
// @author       Alexander Churkin
// @match        https://www.bing.com/*
// @match        https://animego.org/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

let links = document.links;
let btn = document.getElementsByName("search")[0];
let keywords = ["Человек-бензопила", "клинок рассекающий демонов", "Семья шпиона. Часть 2"];
let keyword = keywords[getRandom(0, keywords.length)];

if (btn !== undefined) {
  document.getElementsByName("q")[0].value = keyword;
  btn.click();
} else if (document.links[0].baseURI !== 'https://animego.org/*') {
  for(let i = 0; i < links.length; i++) {
    if (links[i].href.indexOf('animego.org') !== -1) {
        console.log(true)
        let link = links[i];
        console.log(`Нашел строку ${link}`);
        link.click();
        break;
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
