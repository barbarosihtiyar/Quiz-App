function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap =  dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap == this.dogruCevap;
}

let sorular = [
    new Soru ("1-Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm" , d:"Nuget"} , "c"),
    new Soru ("2-Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm" , d:"Nuget"} , "c"),
    new Soru ("3-Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm" , d:"Nuget"} , "c"),
    new Soru ("4-Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm" , d:"Nuget"} , "c"),
    new Soru ("5-Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm" , d:"Nuget"} , "c")
];

function Quiz(){
    this.sorular = sorular;
    this.soruIndex = 0;
}

Quiz.prototype.soruGetir = function(){
    return this.sorular[this.soruIndex];
}

const quiz = new Quiz(sorular);
var startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click",function(){
    document.querySelector(".quiz_box").classList.add("active");
    let soru=quiz.soruGetir();
    quiz.soruIndex++;
    soruGoster(soru);
});

document.querySelector(".card-footer").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex){
        let soru=quiz.soruGetir();
        quiz.soruIndex++;
        soruGoster(soru);
    }
    else{
        console.log("Quiz Bitti!")
    }

});
function soruGoster(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;


    for(let cevap in soru.cevapSecenekleri){
        options += 
        `<div class="option"> 
        <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>`
    }

    document.querySelector(".question_text").innerHTML = question;
    document.querySelector(".option_list").innerHTML = options;
}