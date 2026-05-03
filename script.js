let isPlaying = false;

window.onload = function () {
  let welcomeScreen = document.getElementById("welcomeScreen");
  let music = document.getElementById("music");

  welcomeScreen.onclick = () => {
    welcomeScreen.style.display = "none";

    music.volume = 0;
    music.play();

    let vol = 0;
    let fade = setInterval(() => {
      if (vol < 1) {
        vol += 0.05;
        music.volume = vol;
      } else clearInterval(fade);
    }, 200);

    isPlaying = true;
  };
};

let savedLang = localStorage.getItem("lang") || "en";
setLang(savedLang);

function setLang(lang) {
  localStorage.setItem("lang", lang);
  document.body.className = lang;

  if (lang === "ar") {
    namesAr.style.display = "block";
    namesEn.style.display = "none";

    title.innerHTML = "دعوة زفاف";
    desc.innerHTML = "ندعوكم لحضور حفل زفافنا";
    day.innerHTML = "الجمعة";
    date.innerHTML = "15 مايو 2026";
    time.innerHTML = "7:30 مساءً";
    place.innerHTML = "كنيسة الأنبا أنطونيوس - زهراء المعادي";
    locationBtn.innerHTML = "📍 عرض الموقع";

  } else {
    namesAr.style.display = "none";
    namesEn.style.display = "block";

    title.innerHTML = "Wedding Invitation";
    desc.innerHTML = "We invite you to our wedding";
    day.innerHTML = "Friday";
    date.innerHTML = "May 15, 2026";
    time.innerHTML = "7:30 PM";
    place.innerHTML = "Saint Anthony Church - Zahraa El Maadi";
    locationBtn.innerHTML = "📍 Get Directions";
  }
}

let targetDate = new Date("May 15, 2026 19:30:00").getTime();

setInterval(() => {
  let diff = targetDate - new Date().getTime();
  days.innerHTML = Math.floor(diff/(1000*60*60*24));
  hours.innerHTML = Math.floor((diff/(1000*60*60))%24);
  minutes.innerHTML = Math.floor((diff/(1000*60))%60);
  seconds.innerHTML = Math.floor((diff/1000)%60);
},1000);