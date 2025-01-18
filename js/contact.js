
// Get element references
const cards = document.getElementById("item-card");
const detail_section = document.getElementById("display-detail");
const display_section = document.getElementById("display-section");
const empty = document.getElementById("item-empty");
const display_empty = document.getElementById("display-empty");
const list_contact = document.getElementById("list-contact");

// Initialize contact list from localStorage
const storedContacts = JSON.parse(localStorage.getItem("contact")) || [];
const contactlist = Array.isArray(storedContacts) ? storedContacts : [];

// Display contacts or empty state on load
if (contactlist.length === 0) {
  showEmptyState();
} else {
  showContactList();
}

// Function to show the empty state
function showEmptyState() {
  cards.classList.add("d-none");
  detail_section.classList.add("d-none");
  display_section.classList.add("d-none");
  empty.classList.add("d-flex");
  
  display_empty.classList.add("d-flex");
  console.error("Empty list of contacts");
}

// Function to display the contact list
function showContactList() {
  // Hide empty state
  empty.classList.add("d-none");
  display_empty.classList.add("d-none");
  cards.classList.add("d-flex");
  detail_section.classList.add("d-flex");
  display_section.classList.add("d-flex");

  // Display the contacts
  afficher();
}

// Function to render contacts in the list
function afficher() {
  list_contact.innerHTML = ""; // Clear existing contacts

  contactlist.forEach((contact, index) => {
    const contactHTML = `
      <div class="item-card contact-card d-flex flex-row m-4" data-index="${index}">
        <img src="./images/profile.png" alt="Profile" class="me-3" />
        <div>
          <h2>${contact.name} ${contact.lastname}</h2>
          <h3>${contact.phone}</h3>
        </div>
      </div>`;
    list_contact.insertAdjacentHTML("beforeend", contactHTML);
  });

  console.log(`Displayed ${contactlist.length} contacts.`);
   // Add click listeners to each contact card
   document.querySelectorAll(".item-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      const index = e.currentTarget.getAttribute("data-index");
      showContactDetail(index);
    });
  });
}
function showContactDetail(index) {
  const contact = contactlist[index];
  
  if (contact) {
    const info = document.getElementById("detail");

    info.innerHTML = ""; // Clear existing contacts
    console.log("Contact index "+index);

    const contact=contactlist[index];
      info.innerHTML = ""; 
      const contactHTML = `
       <div id="display-section" class="d-flex flex-row  justify-content-center m-4 text-center ">
                    <div>
                        <img id="display-profile" src="./images/profile.png" alt="Profile pic " class="me-3">
                        <h2  class="mt-4">User Name</h2>
                        <h3 id="display-username">${contact.name} ${contact.lastname}</h3>
                    </div>
                </div>
       <section id="display-detail" class="row d-flex  align-items-center d-sm-column d-md-row">
                    <!-- first side detail -->
                    <div class="col-8 col-md-5 ">
                        <div class="col-12">
                            <!-- strat  email -->
                            <div class="email-section d-flex mt-2">
                                <img class="m-1 me-1" src="./images/email-icon.png" alt="email icon ">
                                <div class="m-0">
                                    <h2>Email</h2>
                                    <h3 id="display-email">${contact.email}</h3>
                                </div>
                            </div>
                            <!-- end of email -->
                            <div class="phone-section d-flex  mt-2">
                                <img class="m-1 me-1" src="./images/icons8-call-48.png" alt="call icon">
                                <div class="m-0">
                                    <h2>Phone</h2>
                                    <h3 id="display-phone">${contact.phone}</h3>
                                </div>
                            </div>
                            <!-- end phone  -->
                            <div class="phone-section d-flex mt-2">
                                <img id="display-gender-profile" class="m-1 me-1" src="./images/icons8-gender-24.png"
                                    alt="call icon">
                                <div class="m-0">
                                    <h2>Gender</h2>
                                    <h3 id="display-gender">${contact.gender}</h3>
                                </div>
                            </div>
                            <!-- end gender -->
                        </div>
                        <!-- seccond side detail -->
                    </div>
                    <!-- second side detail -->
                    <div class="col-8 col-md-5 ">
                        <div class="col-12">

                            <div class="phone-section d-flex mt-2 ">
                                <img  class="m-1 me-1" src="./images/icons8-address-24.png"
                                    alt="call icon">
                                <div class="m-0">
                                    <h2>Adress</h2>
                                    <h3 id="display-adress">${contact.address}</h3>
                                </div>
                            </div>
                            <!-- end gender -->

                        </div>
                    </div>

                </section>
      `;
      info.insertAdjacentHTML("beforeend", contactHTML);
    
  } else {
    console.error("Contact not found."+index);
  }
}