


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




const contactlist = [];
  const list = JSON.parse(localStorage.getItem("contact"));
  contactlist.push(list);


if (contactlist.length === 0||list===null) {
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
  afficher();
}


function afficher() {


    const list_contact = document.getElementById("list-contact");
    list_contact.innerHTML = "";
    for (let index = 0; index < contactlist.length; index++) {
      
      const contactHTML =
        ' <div id="item-card" class=" d-flex flex-row m-4"><img id="card-profile" src="./images/profile.png" alt="Profile" class="me-3"><div>' +
        '<h2 id="card-username">' +
        contactlist[index].name +
        contactlist[index].lastname +
        '</h2> <h3 id="card-phone">' +
        contactlist[index].phone +
        "</h3> </div>  </div>";
      list_contact.insertAdjacentHTML("beforeend", contactHTML);
      console.log(contactlist.length);
    }
   
 
}
