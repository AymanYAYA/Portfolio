const projets = [
    {
        id:0,
        title:"Creation de messagerie instantannée avec Apache",
        outils:"Php native,Mysql,Apache",
        githublink:"",
        video:"php1.mp4",
    },
    {
        id:1,
        title:"Creation de gestion d'hopital",
        outils:"Laravel,Mysql,Apache,VSCode",
        githublink:"",
        video:"php2.mp4"
    },



    {
        id:2,
        title:"Création d’application Web de gestion d’hôtel",
        outils:"Java,NetBeans, Maven, JDBC",
        githublink:"",
        video:"java2.mp4"
        
    },
    {
        id:3,
        title:"Création d’application Web de gestion d’hôpital",
        outils:"Java,Netbeans,Maven,JDBC",
        githublink:"",
        video:"java1.mp4"
        
    },

    {
        id:4,
        title:"Création d’application Web de gestion de billets d’avions",
        outils:"Visual Studio, Windows Forms, .NET,MSSql",
        githublink:"",
        video:"csharp1.mp4"
    },
    // {
    //     id:5,
    //     title:"Création d’application Web de gestion de bibliothèque de livres",
    //     outils:"Visual Studio, Windows Forms, .NET,MSSql",
    //     githublink:"",
    //     video:"test6.mp4"
    // },
    {
        id:6,
        title:"Création d’application Mobile de gestion de mots de passe ",
        outils:"Visual Studio, Xamarin, .NET, Material UI,Emulateur Android Samsung,SQLIte",
        githublink:"",
        video:"csharp3.mp4"
    },
    {
        id:7,
        title:"Creation de messagerie instantannée",
        outils:"VSCode,React,Nodejs",
        githublink:"",
        video:"test.mp4"
    }

]

const php = projets.slice(0,2);
const java = projets.slice(2,4);
const csharp = projets.slice(4,6);
const javascript = projets.slice(6,7);

console.log(php,java,csharp,javascript);


let nextbtn = document.querySelector(".next-btn");
let prevbtn = document.querySelector(".prev-btn");
let randombtn = document.querySelector(".random-btn");
let job = document.getElementById('job');
let info = document.getElementById('info');
let author = document.getElementById('author');
let video = document.getElementById('person-img');
let currentItem=0;
let title = document.querySelector("title");
console.log(title)

// window.addEventListener('DOMContentLoaded',function(){
//     info.textContent = projets[currentItem].info;
//     video.src = projets[currentItem].img;
//     author.textContent = projets[currentItem].author;
//     job.textContent = projets[currentItem].job;
// })


nextbtn.addEventListener('click',function(){
currentItem++;
    switch (title.textContent) {
        case "C#Projets":
            if (currentItem > csharp.length - 1) {
                currentItem = 0;
            }
            console.log("C#projets");
            csharpprojets();
            break;

        case "PhpProjets":
            if (currentItem > php.length - 1) {
                currentItem = 0;
            }
            console.log("Phpprojets");
            phpprojets();
            break;

        case "JavaProjets":
            if (currentItem > java.length - 1) {
                currentItem = 0;
            }
            console.log("Javaprojets");
            javaprojets();
            break;

        case "JavascriptProjets":
            if (currentItem > javascript.length - 1) {
                currentItem = 0;
            }
            console.log("Javascriptprojets");
            javascriptprojets();
            break;

        default:
            break;
    }

})

prevbtn.addEventListener('click',function(){
    currentItem--;
    // if(currentItem<0){
    //     currentItem=projets.length - 1;
    // }

    switch (title.textContent) {
        case "C#Projets":
            if (currentItem < 0) {
                currentItem = csharp.length - 1;
            }
            console.log("C#projets");
            csharpprojets();
            break;

        case "PhpProjets":
            if (currentItem < 0) {
                currentItem = php.length - 1;
            }
            console.log("Phpprojets");
            phpprojets();
            break;

        case "JavaProjets":
            if (currentItem < 0) {
                currentItem = java.length - 1;
            }
            console.log("Javaprojets");
            javaprojets();
            break;

        case "JavascriptProjets":
            if (currentItem < 0) {
                currentItem = javascript.length - 1;
            }
            console.log("Javascriptprojets");
            javascriptprojets();
            break;

        default:
            break;
    }
});
    



function showman(){

    info.textContent = projets[currentItem].githublink;
    video.src = projets[currentItem].video;
    author.textContent = projets[currentItem].title;
    job.textContent = projets[currentItem].outils;
}
function javaprojets(){

    info.textContent = java[currentItem].githublink;
    video.src = java[currentItem].video;
    author.textContent = java[currentItem].title;
    job.textContent = java[currentItem].outils;
}
function phpprojets(){

    info.textContent = php[currentItem].githublink;
    video.src = php[currentItem].video;
    author.textContent = php[currentItem].title;
    job.textContent = php[currentItem].outils;
}
function csharpprojets(){

    info.textContent = csharp[currentItem].githublink;
    video.src = csharp[currentItem].video;
    author.textContent = csharp[currentItem].title;
    job.textContent = csharp[currentItem].outils;
}
function javascriptprojets(){

    info.textContent = javascript[currentItem].githublink;
    video.src = javascript[currentItem].video;
    author.textContent = javascript[currentItem].title;
    job.textContent = javascript[currentItem].outils;
}
// function startVideo() {
//     var video = document.getElementById('person-img');
//     video.play();
// }
document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('person-img');
    var seekbar = document.getElementById('seekbar');

    seekbar.addEventListener('input', function() {
        var newPosition = video.duration * (seekbar.value / 100);
        video.currentTime = newPosition;
    });

    video.addEventListener('timeupdate', function() {
        var newPosition = (video.currentTime / video.duration) * 100;
        seekbar.value = newPosition;
    });
});

function startVideo() {
    var video = document.getElementById('person-img');
    var button = document.querySelector('.switch-btn');
    if (video.paused) {
        video.play();
        button.innerHTML = '<span>Pause</span><span class="switch"></span>';
    } else {
        video.pause();
        button.innerHTML = '<span>Play</span><span class="switch"></span>';
    }
}