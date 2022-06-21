const createHeader = () => {

    let header = document.createElement('header');
    content.appendChild(header);

    let restName = document.createElement("h1");
    restName.classList.add("restaurant-name");
    restName.innerHTML = "Parmo Central";

    let nav = document.createElement("nav");


    let introTab = document.createElement("button");
    introTab.classList.add("tablink");
    introTab.innerHTML = "Home";
    introTab.pageName = "Intro";
    introTab.classList.add("default");
  //  introTab.setAttribute("id","Intro");



    let menuTab = document.createElement("button");
    menuTab.classList.add("tablink");
    menuTab.innerHTML = "Menu";
    menuTab.pageName = "Menu";
 //   menuTab.setAttribute("id","Menu");


    let contactTab = document.createElement("button");
    contactTab.classList.add("tablink");
    contactTab.innerHTML = "Contact";
    contactTab.pageName = "Contact";
   // contactTab.setAttribute("id","Contact");

   nav.append(menuTab, introTab, contactTab);


    header.append(restName, nav);

};

export {createHeader};