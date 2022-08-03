function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap =  dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap == this.dogruCevap;
}

let sorular = [
    new Soru ("Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm"} , "c"),
    new Soru ("Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm"} , "c"),
    new Soru ("Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm"} , "c"),
    new Soru ("Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm"} , "c"),
    new Soru ("Hangisi javascript paket yönetim uygulamasıdır ?" , {a:"Node.js" , b:"Typescript" , c:"Npm"} , "c")
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
    if(quiz.sorular.length != quiz.soruIndex){
    console.log(quiz.soruGetir());
    quiz.soruIndex++;
    }
    else{
        console.log("Quiz Bitti!")
    }

})