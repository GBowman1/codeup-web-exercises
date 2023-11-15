const profileImg = document.querySelector("#profile-pic");
setTimeout(function changeImg (img){
    profileImg.src = "img/kingBaldwin.png";
},2000);

const profileName = document.querySelector("#profile-name");
setTimeout(function (){
    profileName.innerHTML = "King Baldwin IV"
},4000);

const profileDesc = document.querySelector("#profile-desc");
setTimeout(function (){
    profileDesc.classList.add("darkgrey-bold")
},6000);

const profileCard = document.querySelector("#profile-card");
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
setInterval(function (){
    profileCard.style.backgroundColor = getRandomColor();
},2000)