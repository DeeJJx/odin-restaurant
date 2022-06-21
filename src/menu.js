const heading = document.createElement("h1");
heading.textContent = "Menu Items";


const menuContent = document.createElement("div");

const menuGrid = document.createElement("div");
menuGrid.classList.add("menu-grid");

for(let i=0; i<8; i++){
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    menuItem.innerHTML = i+1;
    menuGrid.append(menuItem);
}


menuContent.setAttribute("id", "menu");
menuContent.append(heading);

menuContent.append(menuGrid);
function menuComponent() {
    const content = document.querySelector("#content");
    content.appendChild(menuContent);
}


export { menuComponent };