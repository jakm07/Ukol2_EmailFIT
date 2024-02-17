let jmeno = prompt("Zadejte své jméno")
let prijmeni = prompt("Zadejte své příjmení")
let vysledek = document.getElementById("vysledek")

//tahle funkce vygenerována, odstranuje diakritiku
function odstranitDiakritiku(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

let jmenoUprava = odstranitDiakritiku(jmeno.toLowerCase());
let prijmeniUprava = odstranitDiakritiku(prijmeni.toLowerCase())

//podmínka pracující se vstupem uživatele na požadavek jména
if(jmenoUprava.length === 0){
    jmenoStav = false
}else if(jmenoUprava.length > 0 && jmenoUprava.length < 3){
    jmenoFinal = jmenoUprava.padEnd(3,"0")
    jmenoStav = true
}else{
    jmenoFinal = (jmenoUprava.trim()).slice(0,3)
    jmenoStav = true
}

//podmínka pracující na požadavek příjmení a případné ošetření chybových hlášek
if(prijmeniUprava.length === 0 && jmenoStav === true){
    vysledek.innerHTML += "Nebylo zadáno příjmení. Opakujte znovu, prosím."
}else if(prijmeniUprava.length === 0 && jmenoStav === false){
    vysledek.innerHTML += "Nebylo zadáno ani jméno ani příjmení. Opakujte znovu, prosím."
}else if(prijmeniUprava.length > 0 && jmenoStav === false){
    vysledek.innerHTML += "Nebylo zadáno jméno. Opakujte znovu, prosím."
}else if(prijmeniUprava.length > 0 && prijmeniUprava.length < 5 && jmenoStav === true){
    prijmeniFinal = prijmeniUprava.padEnd(5,"0")
    vysledek.innerHTML += "<h1>Přihlašovací údaje uživatele</h1> <b>Váš email je:</b> " + prijmeniFinal + jmenoFinal + "@fit.cvut.cz"
}else if(prijmeniUprava.length >= 5 && jmenoStav === true){
    prijmeniFinal = (prijmeniUprava.trim()).slice(0,5)
    vysledek.innerHTML += "<h1>Přihlašovací údaje uživatele</h1> <b>Váš email je:</b> " + prijmeniFinal + jmenoFinal + "@fit.cvut.cz"
}else{
    vysledek.innerHTML += "Neznámá chyba"
}


