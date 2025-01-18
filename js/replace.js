
const item_selected = document.getElementById("ajouter");
item_selected.addEventListener('click' ,function () {
    fetch('ajouter.html')
    .then(response =>
        response.text())
        .then(html => {
     document.getElementById("placeholder").innerHTML=html;
        });

    
});
