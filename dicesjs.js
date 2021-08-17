function mostrar_dado(x){
    var display = document.getElementById(x).style.display;
    if(display == "none")
        document.getElementById(x).style.display = 'block';
    else
        document.getElementById(x).style.display = 'none';
}

function rolagem(y,z){
    document.getElementById(z).innerText = y
}

function rolar_dado(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}