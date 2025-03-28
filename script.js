function showSurprise() {
    const surprise = document.getElementById("surprise");
    const surpriseVideo = document.getElementById("surpriseVideo");
    const birthdaySong = document.getElementById("birthdaySong");
    const btn = document.getElementById("surpriseBtn");

    // Ganti teks tombol sementara
    btn.innerHTML = "I Love You ❤️";
    setTimeout(() => {
        btn.innerHTML = "Coba Buka 🎁";
    }, 2000);

    // Tampilkan kejutan dengan efek smooth
    surprise.classList.add("show");
    surprise.style.display = "block";

    // Putar lagu ulang tahun
    if (birthdaySong.paused) {
        birthdaySong.play().catch(err => console.log("Autoplay error:", err));
    }

    // Mainkan video dari awal
    surpriseVideo.currentTime = 0;
    surpriseVideo.play().catch(err => console.log("Autoplay error:", err));
}

// Sembunyikan kejutan
function hideSurprise() {
    const surprise = document.getElementById("surprise");
    const surpriseVideo = document.getElementById("surpriseVideo");

    surprise.classList.remove("show");

    setTimeout(() => {
        surprise.style.display = "none";
        surpriseVideo.pause();
    }, 500);
}

function createFlower() {
    const flower = document.createElement("div");
    flower.innerHTML = "🌸"; // Emoji bunga
    flower.classList.add("flower");
    flower.style.left = Math.random() * window.innerWidth + "px";
    flower.style.animationDuration = (Math.random() * 3 + 2) + "s"; // Variasi kecepatan
    document.body.appendChild(flower);

    setTimeout(() => {
        flower.remove();
    }, 5000);
}

setInterval(createFlower, 300);

// Fungsi untuk membuat love berjatuhan
function createFallingHearts() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    document.body.appendChild(heart);

    // Atur posisi random di layar
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.animationDuration = (Math.random() * 3 + 2) + "s";

    // Hapus elemen setelah jatuh
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// Jalankan efek setiap 500ms
setInterval(createFallingHearts, 500);

// Fungsi untuk efek konfeti
function launchConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);

    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Jalankan efek konfeti saat tombol diklik
document.getElementById("surpriseBtn").addEventListener("click", function() {
    for (let i = 0; i < 50; i++) {
        setTimeout(launchConfetti, i * 50);
    }
});

function launchConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Pilih warna random
    const colors = ["#ff0000", "#ff9900", "#33cc33", "#3399ff", "#9900cc", "#ff3399"];
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

    // Posisi random di layar
    confetti.style.left = Math.random() * window.innerWidth + "px";

    // Ukuran random
    const size = Math.random() * 8 + 4; // Ukuran antara 4px - 12px
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // Kecepatan jatuh random
    confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 3000);
}

// Panggil konfeti dalam jumlah banyak saat tombol diklik
document.getElementById("surpriseBtn").addEventListener("click", function() {
    for (let i = 0; i < 50; i++) {
        setTimeout(launchConfetti, i * 50);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("surpriseBtn").addEventListener("click", function() {
        for (let i = 0; i < 50; i++) {
            setTimeout(launchConfetti, i * 50);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const surpriseBtn = document.getElementById("surpriseBtn");
    const surprise = document.getElementById("surprise");
    const surpriseVideo = document.getElementById("surpriseVideo");
    const birthdaySong = document.getElementById("birthdaySong");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progressBar = document.getElementById("progressBar");
    const currentTimeDisplay = document.getElementById("currentTime");
    const durationDisplay = document.getElementById("duration");

    let wasPlaying = false;

    // Autoplay backsound saat halaman dimuat
    birthdaySong.play().catch(error => console.log("Autoplay dicegah oleh browser:", error));

    // Toggle Play/Pause untuk backsound
    playPauseBtn.addEventListener("click", function () {
        if (birthdaySong.paused) {
            birthdaySong.play();
            playPauseBtn.textContent = "⏸"; // Ganti ikon ke pause
        } else {
            birthdaySong.pause();
            playPauseBtn.textContent = "▶"; // Ganti ikon ke play
        }
    });

    // Perbarui progress bar dan waktu
    birthdaySong.addEventListener("timeupdate", function () {
        progressBar.value = (birthdaySong.currentTime / birthdaySong.duration) * 100;
        currentTimeDisplay.textContent = formatTime(birthdaySong.currentTime);
        durationDisplay.textContent = formatTime(birthdaySong.duration);
    });

    // Update waktu saat progress bar digeser
    progressBar.addEventListener("input", function () {
        birthdaySong.currentTime = (progressBar.value / 100) * birthdaySong.duration;
    });

    function formatTime(seconds) {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }

    surpriseBtn.addEventListener("click", function () {
        surprise.classList.add("show");
        surprise.style.display = "block";

        if (!birthdaySong.paused) {
            wasPlaying = true;
            birthdaySong.pause();
        }

        surpriseVideo.currentTime = 0;
        surpriseVideo.play();
    });

    document.querySelector(".close-btn").addEventListener("click", () => {
        surprise.classList.remove("show");
        setTimeout(() => {
            surprise.style.display = "none";
            surpriseVideo.pause();

            if (wasPlaying) {
                birthdaySong.play();
            }
        }, 500);
    });
});


