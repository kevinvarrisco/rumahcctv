var buttonFixed = document.querySelectorAll(".home-btn-container-fixed")[0]
var heroFotoProduk = document.querySelectorAll(".hero-foto-produk")[0]
var fotoProduk = document.getElementsByClassName("foto-produk")

var imageFilename = [
    "img/wifi-cctv-1.jpg",
    "img/wifi-cctv-2.jpg",
    "img/wifi-cctv-3.jpg",
    "img/wifi-cctv-4.jpg",
    "img/wifi-cctv-5.jpg",
    "img/wifi-cctv-6.jpg"
]

window.onscroll = function(){
    if(window.pageYOffset > 900){
        buttonFixed.style.transform= "translateY(0)"
    } else {
        buttonFixed.style.transform= "translateY(100px)"
    }
}


function klikFoto(){
    var filename = this.src.slice(-19)
    var childNumber = imageFilename.indexOf(filename)
    for(var i = 0; i < 6; i++){
        fotoProduk[i].classList.remove("active") 
    }
    heroFotoProduk.src = filename
    fotoProduk[childNumber].classList.add("active")
}


for(var i = 0; i < 6; i++){
    fotoProduk[i].onclick = klikFoto
}


var btnSelengkapnya = document.querySelectorAll(".btn-selengkapnya")[0]
var spesifikasiDeskripsi = document.querySelectorAll(".spesifikasi-deskripsi")[0]
var paragraph2 = document.querySelectorAll(".paragraph-2")[0]

function selengkapnya(){
    if(btnSelengkapnya.innerText == "Selengkapnya"){
        spesifikasiDeskripsi.style.display = "block"
        paragraph2.style.display = "block"
        btnSelengkapnya.innerText = "Kecilkan"
    } else if(btnSelengkapnya.innerText == "Kecilkan"){
        spesifikasiDeskripsi.style.display = "none"
        paragraph2.style.display = "none"
        btnSelengkapnya.innerText = "Selengkapnya"
    }
}

btnSelengkapnya.onclick = selengkapnya