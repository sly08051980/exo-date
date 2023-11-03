console.log("script chargé");

let submit = document.querySelector("button")
let dateAnniversaire;
let difference;
let date;
let annees;
let annee;
const moisTraduit={
    janvier: "January",
    fevrier: "February",
    mars: "March",
    avril: "April",
    mai: "May",
    juin: "June",
    juillet: "July",
    aout: "August",
    septembre: "September",
    octobre: "October",
    novembre: "November",
    decembre: "December"
}

submit.addEventListener("click",function() {
    let day = document.getElementById("jours").value;
    let month = document.getElementById("mois").value;

        if (day ==="" || month ==="") {
            
            alert("veuillez remplir les champs")
        }else {
            if(isNaN(month)){
                month = strNoAccent(month);
                console.log("accent : " ,month);
                month = moisTraduit[month.toLowerCase()];
                console.log("traduction : " ,month);

            }
                recupererDate(day,month);
                    if(dateAnniversaire<date){
                        annees=annees+1;
                        dateAnniversaire=Date.parse(`${month} ," ", ${day}, " ",${annees}`);
                        difference= dateAnniversaire-date;
                        document.querySelector("p").innerHTML = `Nombre de jours avant votre ANNIVERSAIRE : <span style="color: green;">${Math.ceil(difference / 86400000)}</span>`; 
                    }
                    
                    else if(dateAnniversaire>date){
                        dateAnniversaire=Date.parse(`${month} ," ", ${day}, " ",${annee}`);
                        difference= dateAnniversaire-date;
                        document.querySelector("p").innerHTML = `Nombre de jours avant votre ANNIVERSAIRE : <span style="color: green;">${Math.ceil(difference / 86400000)}</span>`; 

                    }else{document.querySelector("p").innerText="BON ANNIVERSAIRE";}
                    
                    }
    })


function recupererDate(day,month) {
    const dates = new Date();


                const mois = dates.getMonth() + 1; 
                const jour = dates.getDate();
                annees = dates.getFullYear();


                const dateEnFormatSouhaite = `${mois}/${jour}/${annees}`;
                 date = Date.parse(dateEnFormatSouhaite);

                console.log("date en millisecondes" , date);
                 let aujd = new Date();     
                annee = aujd.getFullYear();
               
                 dateAnniversaire=Date.parse(`${month} ," ", ${day}, " ",${annee}`);
               
                 console.log("date anniversaire: :",dateAnniversaire);
    
}




function strNoAccent(month) {
    let n = '',
        t = {'Š':'S','š':'s','?':'Dj','?':'dj','Ž':'Z','ž':'z','?':'C','?':'c','?':'C','?':'c','À':'A','Á':'A','Â':'A','Ã':'A','Ä':'A','Å':'A','Æ':'A','Ç':'C','È':'E','É':'E','Ê':'E','Ë':'E','Ì':'I','Í':'I','Î':'I','Ï':'I','Ñ':'N','Ò':'O','Ó':'O','Ô':'O','Õ':'O','Ö':'O','Ø':'O','Ù':'U','Ú':'U','Û':'U','Ü':'U','Ý':'Y','Þ':'B','ß':'Ss','à':'a','á':'a','â':'a','ã':'a','ä':'a','å':'a','æ':'a','ç':'c','è':'e','é':'e','ê':'e','ë':'e','ì':'i','í':'i','î':'i','ï':'i','ð':'o','ñ':'n','ò':'o','ó':'o','ô':'o','õ':'o','ö':'o','ø':'o','ù':'u','ú':'u','û':'u','ý':'y','ý':'y','þ':'b','ÿ':'y','?':'R','?':'r'};
    for (let i = 0, j = month.length, c = month[i]; i < j; i++) {
      let c = month[i];
      n += t[c] ? t[c] : c;
    }
    return n;
  }