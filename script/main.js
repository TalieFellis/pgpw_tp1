let months = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet',
'Août','Septembre','Octobre','Novembre','Décembre']
let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
let tomorrow = new Date()
tomorrow.setTime(tomorrow.getTime() + (1000*3600*24))
document.getElementById("spanDate").innerHTML = "Le " + days[tomorrow.getDay()]+ " " + tomorrow.getDate()+ " " + months[tomorrow.getMonth()]+ " " + tomorrow.getFullYear()
