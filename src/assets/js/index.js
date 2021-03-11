import "./canvas.js";
import "../sass/main.scss";

function requireAllPNG(r) {
  r.keys().forEach(r);
}
requireAllPNG(require.context("../img/", true, /\.png$/));
