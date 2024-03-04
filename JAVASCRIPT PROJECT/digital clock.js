const hE1 = document.getElementById("Hours");
const mE1 = document.getElementById("Minutes");
const sE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date(). getHours();
    let m = new Date(). getMinutes();
    let s = new Date(). getSeconds();
    let ampm;
     
    if(h>=12){
        ampm= "PM";
    }
    else{
        ampm = "AM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hE1.innerText=h;
    mE1.innerText=m;
    sE1.innerText=s;
    ampmE1.innerText=ampm;
    setTimeout(()=>{
        updateClock()
    }, 1000);
}
updateClock();

// const hEl = document.getElementById("Hours");
// const mEl = document.getElementById("Minutes");
// const sEl = document.getElementById("Seconds");
// const ampmEl = document.getElementById("ampm");

// function updateClock(){
//     let h = new Date(). getHours();
//     let m = new Date(). getMinutes();
//     let s = new Date(). getSeconds();
//     let ampm;
//     if(h<=12)
//     {
//       ampm= "PM";
//     }
//     else{
//       ampm = "AM";
//     }
    
//     h = h < 10 ? "0" + h : h;
//     m = m < 10 ? "0" + m : m;
//     s = s < 10 ? "0" + s : s;
//     hEl.innerText=h;
//     mEl.innerText=m;
//     sEl.innerText=s;
//     ampmEl.innerText=ampm;
//     setTimeout(()=>{
//       updateClock()
//     }, 1000)
// }
// updateClock();