// get id
const cards = document.getElementById("item-card");
// empty element in first side
const empty = document.getElementById("item-empty");

// list element to display 
const img = document.getElementById("card-profile");
const username = document.getElementById("card-username");
const phone = document.getElementById("card-phone");

// ajouter element
const ajouter_img = document.getElementById("ajouter-profile");
const ajouter_name = document.getElementById("ajouter-name");
const ajouter_last = document.getElementById("ajouter-last");
const ajouter_phone = document.getElementById("ajouter-phone");
const ajouter_email = document.getElementById("ajouter-email");
// const ajouter_gender = document.getElementById("ajouter-gender");
const ajouter_adress = document.getElementById("ajouter-adress");

const contactlist = [];

afficher(contactlist);
// ajouter btn
document.getElementById("btn-ajouter").addEventListener("click", function (e) {
    e.preventDefault();
  ajouter();
});

function ajouter() {
  const name = ajouter_name.value.trim();
 const last = ajouter_last.value.trim();
  const email = ajouter_email.value.trim();
  const phone = ajouter_phone.value.trim();
//   const gender = ajouter_gender.value.trim();
 const adress = ajouter_adress.value.trim();


  const contact = {
   name: name,
   lastname : last,
   email: email,
   phone : phone,
//   gender:  gender,
   address : adress

  };
  contactlist.push(contact);
  localStorage.setItem("contact", JSON.stringify(contactlist));
  document.getElementById("form").reset();
  afficher();
}

function afficher() {
  if (contactlist.length === 0) {
    // hide content
    cards.classList.add("d-none");
    // display empty dialog
    empty.classList.add("d-flex");
    console.error("empty list of contact");
  } else {
    cards.classList.remove("d-none");
    //   empty.classList.add("d-none");
    cards.classList.add("d-flex");


    const list_contact=  document.getElementById("list-contact");
    list_contact.innerHTML='';
    contactlist.forEach((contact) =>{
        
  const contactHTML =
    ' <div id="item-card" class=" d-flex flex-row m-4"><img id="card-profile" src="./images/profile.png" alt="Profile" class="me-3"><div>' +
    '<h2 id="card-username">' +
    contact.name +
    contact.lastname +
    '</h2> <h3 id="card-phone">' +
    contact.phone +
    "</h3> </div>  </div>";
    ;
     list_contact.insertAdjacentHTML("beforeend", contactHTML);
});

console.log(contactlist.length);
  }
}

