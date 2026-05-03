// حالة الميوزك
let isPlaying = false;

// عند تحميل الصفحة
window.onload = function () {
  let welcomeScreen = document.getElementById("welcomeScreen");
  let music = document.getElementById("music");

  welcomeScreen.onclick = () => {
    welcomeScreen.style.display = "none";

    // تشغيل الموسيقى + Fade
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
  };
};

// 🌍 اللغة
let savedLang = localStorage.getItem("lang") || "en";
setLang(savedLang);

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.body.className = lang;

  if (lang === "ar") {

    // 👑 الاسم
    namesAr.style.display = "block";
    namesEn.style.display = "none";

    // النصوص
    title.innerHTML = "دعوة زفاف";
    desc.innerHTML = "بقلوب مليئة بالحب والسعادة<br>ندعوكم لحضور حفل زفافنا";
    day.innerHTML = "الجمعة";
    date.innerHTML = "15 مايو 2026";
    time.innerHTML = "7:30 مساءً";
    place.innerHTML = "كنيسة الأنبا أنطونيوس - زهراء المعادي";

    // زرار الموقع
    locationBtn.innerHTML = "📍 عرض الموقع";

  } else {

    // 👑 الاسم
    namesAr.style.display = "none";
    namesEn.style.display = "block";

    // النصوص
    title.innerHTML = "Wedding Invitation";
    desc.innerHTML = "With hearts full of love and joy,<br>we invite you to celebrate our wedding";
    day.innerHTML = "Friday";
    date.innerHTML = "May 15, 2026";
    time.innerHTML = "7:30 PM";
    place.innerHTML = "Saint Anthony Church - Zahraa El Maadi";

    // زرار الموقع
    locationBtn.innerHTML = "📍 Get Directions";
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

  if (!isPlaying) {
    music.play();
    isPlaying = true;
  } else {
    music.pause();
    isPlaying = false;
  }

  // تحديث نص الزرار حسب اللغة
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