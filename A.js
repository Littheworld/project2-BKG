// Variabel global
let namaItem; // Nama item yang dipilih
let userMemilih = 0; // Pilihan pengguna (1: kertas, 2: batu, 3: gunting)
let menang = 0; // Menentukan siapa yang menang
let intervalId = null; // ID untuk interval kedip

// Elemen DOM
const submitBtn = document.getElementById("submitBtn");
const gunting = document.getElementById("guntingBtn");
const batu = document.getElementById("batuBtn");
const kertas = document.getElementById("kertasBtn");
const comDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// Event listener untuk memilih gunting
gunting.addEventListener("click", pilihGunting);
function pilihGunting(event) {
    console.log("user memilih gunting");
    userMemilih = 3; // Menetapkan pilihan pengguna ke gunting
}

// Event listener untuk memilih batu
batu.addEventListener("click", pilihBatu);
function pilihBatu(event) {
    console.log("user memilih batu");
    userMemilih = 2; // Menetapkan pilihan pengguna ke batu
}

// Event listener untuk memilih kertas
kertas.addEventListener("click", pilihKertas);
function pilihKertas(event) {
    console.log("user memilih kertas");
    userMemilih = 1; // Menetapkan pilihan pengguna ke kertas
}

// Fungsi untuk menentukan pilihan komputer
function setDuel(random) {
    if (random == 3) {
        itemTerpilih = "gunting";
        menang = 1; // Kertas kalah gunting
    } else if (random == 2) {
        itemTerpilih = "batu";
        menang = 3; // Gunting kalah batu
    } else if (random == 1) {
        itemTerpilih = "kertas";
        menang = 2; // Batu kalah kertas
    } else {
        console.error("error not registered");
    }
    console.log(`item terpilih ${itemTerpilih}`);
}

// Fungsi untuk memeriksa hasil permainan
function CheckGame(random) {
    switch (true) {
        case userMemilih == random:
            resultDisplay.textContent = `${itemTerpilih} VS ${itemTerpilih} adalah seri!!!`;
            resultDisplay.style.backgroundColor = "aliceblue"; // Warna untuk seri
            kedip("rgb(228, 195, 5)", "aliceblue", 10)
            break;
        case userMemilih != menang:
            console.log("kamu menang");
            resultDisplay.textContent = "KAMU MENANG!!!"; // Pesan menang
            kedip("rgb(16, 176, 16)", "aliceblue", 10); // Efek kedip hijau
            break;
        case userMemilih == menang:
            console.log("kamu kalah");
            resultDisplay.textContent = "KAMU KALAH!!!"; // Pesan kalah
            kedip("rgba(155, 36, 36, 0.757)", "aliceblue", 10); // Efek kedip merah
            break;
        default:
            window.alert("silahkan submit terlebih dahulu"); // Pesan jika belum memilih
            break;
    }
}

// Fungsi untuk memulai permainan
function start() {
    const random = Math.floor((Math.random() * 3) + 1); // Pilih acak 1-3
    setDuel(random); // Atur duel berdasarkan pilihan acak
    comDisplay.textContent = `KOMPUTER MEMILIH : ${itemTerpilih}`; // Tampilkan pilihan komputer
    CheckGame(random); // Cek hasil permainan
}

// Fungsi untuk membuat efek kedip pada hasil
function kedip(color1, color2, kali) {
    if (intervalId) {
        clearInterval(intervalId); // Bersihkan interval sebelumnya
    }
    intervalId = setInterval(() => {
        resultDisplay.style.backgroundColor = color1; // Ubah warna background
        console.log(color1);
        setTimeout(() => {
            resultDisplay.style.backgroundColor = color2; // Kembalikan warna
            console.log(color2);
        }, 500);
    }, kali * 100); // Interval kedip
}