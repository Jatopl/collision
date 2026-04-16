function zaloguj() {
    let nazwa = document.getElementById('nazwa').value;
    let wpisananazwa = nazwa.toUpperCase();  
    let haslo = document.getElementById('haslouz').value;
    let wpisanehaslo = haslo.toUpperCase(); 

    if (wpisananazwa === "BARTOSZ") {
        if (wpisanehaslo === "NOWAPRZYSZLOSC") {
        window.location = "b/b.html";
        } else {
        alert("B̷̦͚̳̰̟͇̎͋ł̶̨̡͉͙̯̦̙͕̇̅͑̏̏͊͋̅̕̚ą̷̢̳̩͉̫̫̠̝̇͆̒̄d̶͇͈̠̹̬͊̓̅̃͝");
        }
    } else {
        alert("B̷̦͚̳̰̟͇̎͋ł̶̨̡͉͙̯̦̙͕̇̅͑̏̏͊͋̅̕̚ą̷̢̳̩͉̫̫̠̝̇͆̒̄d̶͇͈̠̹̬͊̓̅̃͝");
    }
}