var buttonFixed = document.querySelectorAll(".home-btn-container-fixed")[0]
var heroFotoProduk = document.querySelectorAll(".hero-foto-produk")[0]
var fotoProduk = document.getElementsByClassName("foto-produk")

var imageFilename = {
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-1.jpg": "img/wifi-cctv-1.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-2.jpg": "img/wifi-cctv-2.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-3.jpg": "img/wifi-cctv-3.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-4.jpg": "img/wifi-cctv-4.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-5.jpg": "img/wifi-cctv-5.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-6.jpg": "img/wifi-cctv-6.jpg",
}

var fotoProdukChildNumber = [
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-1.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-2.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-3.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-4.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-5.jpg",
    "file:///D:/VS%20Code/html/Bussiness%20Web/img/wifi-cctv-6.jpg"
]


window.onscroll = function(){
    if(window.pageYOffset > 900){
        buttonFixed.style.transform= "translateY(0)"
    } else {
        buttonFixed.style.transform= "translateY(100px)"
    }
}


function klikFoto(){
    var fileName = imageFilename[this.src]
    var childNumber = fotoProdukChildNumber.indexOf(this.src)
    for(var i = 0; i < 6; i++){
        fotoProduk[i].classList.remove("active")
    }
    heroFotoProduk.src = fileName
    fotoProduk[childNumber].classList.add("active")
}


for(var i = 0; i < 6; i++){
    fotoProduk[i].onclick = klikFoto
}