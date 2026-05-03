let isPlaying = false;

window.onload = function () {
  let welcome = document.getElementById("welcomeScreen");
  let music = document.getElementById("music");

  welcome.onclick = () => {
    welcome.style.display = "none";

    music.volume = 0;
    music.play();

    let v = 0;
    let fade = setInterval(()=>{
      if(v < 1){
        v += 0.05;
        music.volume = v;
      } else clearInterval(fade);
    },200);

    isPlaying = true;
  };
};

let savedLang = localStorage.getItem("lang") || "en";
setLang(savedLang);

function setLang(lang){
  localStorage.setItem("lang",lang);
  document.body.className = lang;

  if(lang=="ar"){
    namesAr.style.display="block";
    namesEn.style.display="none";

    title.innerHTML="دعوة زفاف";
    desc.innerHTML="بقلوب مليئة بالحب والسعادة<br>ندعوكم لحضور حفل زفافنا";
    day.innerHTML="الجمعة";
    date.innerHTML="15 مايو 2026";
    time.innerHTML="7:30 مساءً";
    place.innerHTML="كنيسة الأنبا أنطونيوس - زهراء المعادي";
    locationBtn.innerHTML="📍 عرض الموقع";

  }else{
    namesAr.style.display="none";
    namesEn.style.display="block";

    title.innerHTML="Wedding Invitation";
    desc.innerHTML="With hearts full of love and joy,<br>we invite you to celebrate our wedding";
    day.innerHTML="Friday";
    date.innerHTML="May 15, 2026";
    time.innerHTML="7:30 PM";
    place.innerHTML="Saint Anthony Church - Zahraa El Maadi";
    locationBtn.innerHTML="📍 Get Directions";
  }
}

let target = new Date("May 15, 2026 19:30:00").getTime();

setInterval(()=>{
  let d = target - new Date().getTime();

  days.innerHTML = Math.floor(d/(1000*60*60*24));
  hours.innerHTML = Math.floor((d/(1000*60*60))%24);
  minutes.innerHTML = Math.floor((d/(1000*60))%60);
  seconds.innerHTML = Math.floor((d/1000)%60);
},1000);

function playMusic(){
  let m = document.getElementById("music");

  if(!isPlaying){
    m.play();
    isPlaying=true;
  }else{
    m.pause();
    isPlaying=false;
  }
}