// BAGIAN TOMBOL DAN AUDIO KETIKA KITA MENEKAN KEYBOARD
function putarSuara(e) {
   const suara = document.querySelector(`audio[data-key="${e.keyCode}"]`); // nangkap audio property dan memasukan method keycode untuk mengetahui kode numerik dari tombol yang kita tekan
   const tombol = document.querySelector(`.key[data-key="${e.keyCode}"]`); // nangkap class key beserta property dan memasukan method keycode untuk mengetahui kode numerik dari tombol yang kita tekan
   
   tombol.classList.add('playing') // tambahkan class playing untunk animasi
   
   if(!suara) {
      return // agar ketika yang kita tekan bukan dari data-key maka dia langsung nge skip
   }
   suara.currentTime = 0 // agar musik nya ulang dari awal dan bisa ditekan dengan cepat
   suara.play() // method untuk memanggil audio / memutar suara ketika tombol ditekan
   
}


function hilangTransisi(f) { //menghilangkan transisi CSS agar tidak muncul terus, 
   if (f.propertyName !== 'transform') { // jika properti nama nya tidak sama dengan transform maka return fungsi ini
      return
   }
   this.classList.remove('playing') // menghilangkan class yang memberikan efek transisi pada saat tombol ditekan
}


const keys = document.querySelectorAll('.key') // menangkap class key untuk di manipulasi
// looping NodeList hasil dari Selection DOM diatas
keys.forEach(key => key.addEventListener('transitionend', hilangTransisi)); // menjadikan animasi nya menjadi bekedip saat di tekan

// method keydown untuk bisa menjalankan event ketika menekan tombol di keyboard
window.addEventListener('keydown',putarSuara)
