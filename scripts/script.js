var buttonKnop = document.querySelector("#hamburgerknop");
var navigatie = document.querySelector('#navigatie');


buttonKnop.addEventListener("click", uitschuiven);

function uitschuiven() {
    navigatie.classList.toggle('active')

}
