function logout (btn) {
    if(btn.innerText == "Login") {
        btn.innerText = "Logout";
    } else {
        btn.innerText = "Login";
    }
}


function hideBtn (btn) {
    btn.remove();
}

function btnLike(btn) {
    alert("Ninia was liked")
}




