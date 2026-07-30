function showGift(gift) {
    alert("🎉 Surprise!\n\nYou received:\n" + gift);
}
function goToGifts(){
    window.location.href = "gifts.html";
}


function goHome(){
    window.location.href = "homepage.html";
}

function celebrate(){
    window.location.href="celebration.html";

}

function goToGifts(){
    window.location.href="gifts.html";
}


function goHome(){
    window.location.href="homepage.html";
}



function startCountdown(){

let number = 3;

let countdown = document.getElementById("countdown");

let page = document.getElementById("cakePage");


let timer = setInterval(function(){

countdown.innerHTML = number;


if(number == 3){
page.classList.add("dark");
}


number--;


if(number < 0){

clearInterval(timer);

page.classList.remove("dark");

countdown.innerHTML="❤️";

document.getElementById("message").innerHTML=
"Happy Birthday Hemanth 🎉 Blow the candle!";


setTimeout(function(){

window.location.href="celebration.html";

},3000);

}


},1000);

}
// ===========================
// HOME PAGE
// ===========================

// Open Gifts Page
function goToGifts() {
    window.location.href = "gifts.html";
}

// ===========================
// GIFTS PAGE
// ===========================

function showGift(number) {

    let title = document.getElementById("giftTitle");
    let message = document.getElementById("giftMessage");

    switch(number){

        case 1:
            title.innerHTML="⌚ Watch";
            message.innerHTML="Every second reminds me how lucky I am to have you. ❤️";
            break;

        case 2:
            title.innerHTML="🚗 Remote Control Car";
            message.innerHTML="Never lose the child inside you. I love your cute side. 🥰";
            break;

        case 3:
            title.innerHTML="🔑 Keychain";
            message.innerHTML="No matter where life takes you, my heart will always stay with you. 💕";
            break;

        case 4:
            title.innerHTML="👕 Special T-Shirt";
            message.innerHTML="I hope whenever you wear it, you'll remember me and smile. ❤️";
            break;

        case 5:
            title.innerHTML="💌 Handmade Card";
            message.innerHTML="This card carries every little feeling I couldn't fit into words. 💖";
            break;

        case 6:
            title.innerHTML="❤️ Secret Gift";
            message.innerHTML="The biggest gift is my love, today and always. Happy Birthday! ❤️";
            break;
    }

}

// Go to Cake Page
function goToCake(){
    window.location.href="cake.html";
}

// Back to Home
function goHome(){
    window.location.href="index.html";
}

let opened = 0;

function openGift(number, box){

    let note = document.getElementById("note"+number);

    if(box.classList.contains("open")){
        return;
    }

    box.classList.add("open");

    opened++;

    if(opened == 6){

        document.getElementById("nextBtn").style.display="inline-block";

    }

}