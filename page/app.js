import headerView from "./components/header/viewHeader.js";
import headerModel from "./components/header/modelHeader.js";
import footerView from "./components/footer/viewFooter.js";
import footerModel from "./components/footer/modelFooter.js";
import leftMenuModel from "./components/leftMenu/modelLeftMenu.js";
import leftMenuView from "./components/leftMenu/viewLeftMenu.js";

let app = document.getElementById("app");


// Creo el body de la app. Acá no entraría el menú lateral
let body = document.createElement("div");
body.id = "body";
body.style.width = "100%";

// Creo el menu lateral
let leftMenu_m = new leftMenuModel();
let leftMenu_v = new leftMenuView(leftMenu_m);

// Creo el header de la app
let header_m = new headerModel(leftMenu_v);
let header_v = new headerView(header_m);

// Creo el header de la app
let footer_m = new footerModel();
let footer_v = new footerView(footer_m);

// Creo un frame para mostrar las páginas
let frame = document.createElement("iframe");
frame.src = "./pages/calculadora-v5/index.html";
frame.style.height = "100%";
frame.style.width = "100%";

// Agrego los elemenos creados a sus respectivos contenedores.
body.appendChild(header_v); // Agrego el header al cuerpo de la aplicación
body.appendChild(frame); // Agrego el iframe para mostrar las paginas al cuerpo de la aplicación
body.appendChild(footer_v); // Agrego el footer al cuerpo de la aplicación

app.appendChild(leftMenu_v);  // Agrego el menu lateral a la aplicación
app.appendChild(body); // Agrego el body a la aplicación
