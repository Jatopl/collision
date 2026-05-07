function zaloguj() {
    let nazwa = document.getElementById('nazwa').value;
    let wpisananazwa = nazwa.toUpperCase();  
    if (wpisananazwa === "NOWAPRZYSZLOSC") {
        window.location = "e1.html";
        } 
    if (wpisananazwa === "NX-04") {
        window.location = "e2.html";
        } 
}