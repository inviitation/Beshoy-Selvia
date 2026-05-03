// حالة الميوزك
let isPlaying = false;

// عند تحميل الصفحة
window.onload = function () {

  let welcomeScreen = document.getElementById("welcomeScreen");
  let music = document.getElementById("music");

  welcomeScreen.onclick = () => {
    welcomeScreen.style.display = "none";

    // 🎵 تشغيل الموسيقى تلقائي + Fade
    music.volume = 0;
    music.play();

    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        music.volume = vol;
      } else {
        clearInterval(fade);
      }
    }, 200);

    isPlaying = true;
    document.getElementById("musicBtn").innerHTML = "🔊 Stop Music";

    // 🎆 confetti
    for (let i = 0; i < 50; i++) {
      let c = document.createElement("div");
      c.className = "confetti";
      c.style.left = Math.random() * 100 + "vw";
      document.body.appendChild(c);
      setTimeout(() => c.remove(), 3000);
    }
  };

};

// 🌍 اللغة (افتراضي إنجليزي)
let savedLang = localStorage.getItem("lang") || "en";

// أول مرة → English
if (!localStorage.getItem("lang")) {
  setLang("en");
} else {
  setLang(savedLang);
}

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.body.className = lang;

  if (lang === "ar") {
    title.innerHTML = "دعوة زفاف";
    desc.innerHTML = "بقلوب مليئة بالحب والسعادة<br>ندعوكم لحضور حفل زفافنا";
    names.innerHTML = "بيشوي & سلفيا";
    day.innerHTML = "الجمعة";
    date.innerHTML = "15 مايو 2026";
    place.innerHTML = "كنيسة الأنبا أنطونيوس - زهراء المعادي";
    time.innerHTML = "7:30 مساءً";

    // 📍 الزرار عربي
    locationBtn.innerHTML = "📍 عرض الموقع";
    locationBtn.href = "https://maps.app.goo.gl/3yUNKWnoqn3KLuzg8";

    dLabel.innerHTML = "يوم";
    hLabel.innerHTML = "ساعة";
    mLabel.innerHTML = "دقيقة";
    sLabel.innerHTML = "ثانية";

    document.getElementById("musicBtn").innerHTML = isPlaying ? "🔊 إيقاف الموسيقى" : "تشغيل الموسيقى 🎵";

  } else {
    title.innerHTML = "Wedding Invitation";
    desc.innerHTML = "With hearts full of love and joy,<br>we invite you to celebrate our wedding";
    names.innerHTML = "Beshoy & Selvia";
    day.innerHTML = "Friday";
    date.innerHTML = "May 15, 2026";
    place.innerHTML = "Saint Anthony Church - Zahraa El Maadi";
    time.innerHTML = "7:30 PM";

    // 📍 الزرار إنجليزي
    locationBtn.innerHTML = "📍 Get Directions";
    locationBtn.href = "https://maps.app.goo.gl/3yUNKWnoqn3KLuzg8";

    dLabel.innerHTML = "Days";
    hLabel.innerHTML = "Hours";
    mLabel.innerHTML = "Minutes";
    sLabel.innerHTML = "Seconds";

    document.getElementById("musicBtn").innerHTML = isPlaying ? "🔊 Stop Music" : "Play Music 🎵";
  }
}

// ⏳ Countdown
let targetDate = new Date("May 15, 2026 19:30:00").getTime();

setInterval(() => {
  let diff = targetDate - new Date().getTime();

  days.innerHTML = Math.floor(diff / (1000 * 60 * 60 * 24));
  hours.innerHTML = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutes.innerHTML = Math.floor((diff / (1000 * 60)) % 60);
  seconds.innerHTML = Math.floor((diff / 1000) % 60);
}, 1000);

// 🎵 زرار تشغيل / إيقاف
function playMusic() {
  let music = document.getElementById("music");
  let btn = document.getElementById("musicBtn");

  if (!isPlaying) {
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }

  let lang = localStorage.getItem("lang") || "en";
  setLang(lang);
}

// 💖 قلوب
document.addEventListener("click", e => {
  let h = document.createElement("div");
  h.innerHTML = "💖";
  h.style.position = "fixed";
  h.style.left = e.clientX + "px";
  h.style.top = e.clientY + "px";
  h.style.animation = "floatUp 1s";
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 1000);
});