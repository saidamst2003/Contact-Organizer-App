// Get elements by ID
const cards = document.getElementById("item-card");
const empty = document.getElementById("item-empty");
const ajouter_name = document.getElementById("ajouter-name");
const ajouter_last = document.getElementById("ajouter-last");
const ajouter_phone = document.getElementById("ajouter-phone");
const ajouter_email = document.getElementById("ajouter-email");
const ajouter_adress = document.getElementById("ajouter-adress");
const ajouter_gender= document.getElementsByName("gender");
const list_contact = document.getElementById("list-contact");

// Initialize contact list from localStorage or as an empty array
const contactlist = JSON.parse(localStorage.getItem("contact")) || [];

// Display contacts on page load
afficher();

// Add event listener to the "Ajouter" button
document.getElementById("btn-ajouter").addEventListener("click", function (e) {
  e.preventDefault();
  const selectedGender = document.querySelector('input[name="gender"]:checked');
  ajouter();
});

// Function to add a new contact
function ajouter() {
  const name = ajouter_name.value.trim();
  const last = ajouter_last.value.trim();
  const phone = ajouter_phone.value.trim();
  const email = ajouter_email.value.trim();
  const adress = ajouter_adress.value.trim();
  var gender ;


  for (let index = 0; index < ajouter_gender.length; index++) {
        if(ajouter_gender[index].checked){
          gender =ajouter_gender[index].value;
        }    
  }




  if (!isValidEmail(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!isValidPhone(phone)) {
    alert("Please enter a valid phone number.");
    return;
  }

  if (!name || !last || !phone || !email || !adress || !gender) {
    alert("Please fill out all fields before adding a contact.");
    return;
  }

  const contact = {
    name,
    lastname: last,
    phone,
    email,
    address: adress,
    gender :gender
  };

  // Add contact to the list and update localStorage
  contactlist.push(contact);
  localStorage.setItem("contact", JSON.stringify(contactlist));

  // Clear the form and refresh the display
  document.getElementById("form").reset();
  afficher();
}
// Function to display contacts
function afficher() {
  // Debugging: Log the current state of contactlist
  console.log("Contact list state:", contactlist);

  // Check if the contactlist is empty or null
  if (!contactlist || contactlist.length === 0) {
    console.warn("Displaying empty dialog: No contacts in the list.");
    // Show "empty" dialog and hide contact cards
    cards.classList.add("d-none"); // Hide cards
    empty.classList.remove("d-none"); // Show empty dialog
    empty.classList.add("d-flex");
    list_contact.innerHTML = ""; // Clear the contact list
  } else {
    console.info("Displaying contact list: Found contacts.");
    // Hide "empty" dialog and show contact cards
    cards.classList.remove("d-none"); // Show cards
    empty.classList.add("d-none"); // Hide empty dialog
    empty.classList.remove("d-flex");

    // Clear and display the contacts
    list_contact.innerHTML = ""; // Clear existing content
    contactlist.forEach((contact) => {
      const contactHTML = `
        <div class="d-flex flex-row m-4">
          <img src="./images/profile.png" alt="Profile" class="me-3" />
          <div>
            <h2>${contact.name} ${contact.lastname}</h2>
            <h3>${contact.phone}</h3>
          </div>
        </div>`;
      list_contact.insertAdjacentHTML("beforeend", contactHTML);
    });
  }
}
function isValidPhone(phone) {
  const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return phoneRegex.test(phone);
}
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

