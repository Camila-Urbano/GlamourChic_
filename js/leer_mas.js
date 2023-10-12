const leer_mas = document.querySelector(".leer_mas");
const salir = document.querySelector(".fa-x");
const mas = document.querySelector(".btn_mas");


mas.onclick = () =>
{
    leer_mas.style.display = "grid";
}

salir.onclick = () =>
{
    leer_mas.style.display = "none";
}
