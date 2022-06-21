import { introComponent } from './intro';
import { menuComponent } from './menu';
import {contactComponent } from './contact';
import { createHeader } from './header';
import Parmo from '../src/parmo.jpeg';

const content = document.querySelector("#content");

createHeader();



const tabButtons = document.querySelectorAll(".tablink");
tabButtons.forEach((button) => {
    button.addEventListener("click", function () { handleTab(button.pageName) });
})


function handleTab(pageName){
  let menu = document.querySelector("#menu");
  let contact = document.querySelector("#contact");
  let intro = document.querySelector("#intro");
  //If Intro, check if menu or contact true and remove then call introComponent
  if(pageName == "Intro"){
    if(menu){
      content.removeChild(menu);
    } else if (contact){
      content.removeChild(contact);
    }
    console.log("clicked");
    introComponent();
  }
  //If Menu, check if intro or contact true and remove then call menuComponent
    else if (pageName == "Menu"){
    if(intro){
  content.removeChild(intro);
    } else if (contact) {
      content.removeChild(contact);
    }
    console.log("clicked");
    menuComponent();
  //If Contact, check if intro or menu true and remove then call contactComponent
  } else if (pageName == "Contact"){
    if(intro){
      content.removeChild(intro);
    } else if(menu){
      content.removeChild(menu);
    }
    console.log("clicked");
    contactComponent();
  }
}

document.querySelector(".default").click();