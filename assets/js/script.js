console.log("script chargé");

let submit = document.querySelector("button")

submit.addEventListener("click",function() {
    let day = document.getElementById("jours").value;
    let month = document.getElementById("mois").value;

        if (day ==="" || month ==="") {
            
            alert("veuillez remplir les champs")
        }else {
            
                let date = Date.now();
                let aujd = new Date();
                let annee = aujd.getFullYear();
                annee=annee+1;
                let dateAnniversaire=Date.parse(`${month} ," ", ${day}, " ",${annee}," " ," 00:00:00 GMT"`)
                let difference = dateAnniversaire-date;
                document.querySelector("p").innerText="Nombre de jours avant votre ANNIVERSAIRE : " + Math.round(difference/86400000);
                }
})

function changeMonth(month) {

    
}