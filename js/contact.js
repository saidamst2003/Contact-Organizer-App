


// get id 
const cards = document.getElementById("item-card");
const detail_section = document.getElementById("display-detail");
const display_section = document.getElementById("display-section");
// empty element in first side
const empty = document.getElementById("item-empty");
// empty element in second side
const display_empty = document.getElementById("display-empty");

// list element to display 
const img = document.getElementById("card-profile");
const username = document.getElementById("card-username");
const phone = document.getElementById("card-phone");
// display element to display 
const display_img = document.getElementById("display-profile");
const display_username = document.getElementById("display-username");
const display_phone = document.getElementById("display-phone");
const display_email = document.getElementById("display-email");
const display_gender = document.getElementById("display-gender");
const display_adress = document.getElementById("display-adress");

// ajouter element 
const ajouter_img = document.getElementById("ajouter-profile");
const ajouter_name = document.getElementById("ajouter-name");
const ajouter_last = document.getElementById("ajouter-last");
const ajouter_phone = document.getElementById("ajouter-phone");
const ajouter_email = document.getElementById("ajouter-email");
const ajouter_gender = document.getElementById("ajouter-gender");
const ajouter_adress = document.getElementById("ajouter-adress");


let contactlist = [];

if (contactlist.length === 0) {
  // hide content
  cards.classList.add("d-none");
  detail_section.classList.add("d-none");
  display_section.classList.add("d-none");


  // display empty dialog
  empty.classList.add("d-flex");
  display_empty.classList.add("d-flex");
  console.error("empty list of contact");
} else {
  // hide content
  empty.classList.add("d-none");
  display_empty.classList.add("d-none");

  // display empty dialog
  cards.classList.add("d-flex");
  detail_section.classList.add("d-flex");
  display_section.classList.add("d-flex");
  afficher(contactlist);
}

function ajouter(list) {


}

function afficher(contact) {
  contact.forEach(function(item, index) {

  });
  
}