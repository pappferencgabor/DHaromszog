function megszerk() {
    let a = parseInt(document.getElementById("befogo1").value);
    let b = parseInt(document.getElementById("befogo2").value);
    let c = parseInt(document.getElementById("atfogo").value);

    if (a + b > c && c > a && c > b && a != b && a != c && b != c) {
        alert("A derékszögű háromszög megszerkeszthető!")
    }
    else {
        alert("A derékszögű háromszög NEM szerkeszthető meg!")
    }
}

function random() {
    document.getElementById("befogo1").value = Math.floor(10 + Math.random() * 90);
    document.getElementById("befogo2").value = Math.floor(10 + Math.random() * 90);
    document.getElementById("atfogo").value = Math.floor(10 + Math.random() * 90);
}

function atfogoCalc() {
    let a = parseInt(document.getElementById("befogo1").value);
    let b = parseInt(document.getElementById("befogo2").value);
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(3);
}