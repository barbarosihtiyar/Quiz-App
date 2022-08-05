function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap =  dogruCevap;
    this.score_box = document.querySelector(".score_box"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.time_second = document.querySelector(".time_second"),
    this.time_text = document.querySelector(".time_text")
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



var startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click",function(){
    document.querySelector(".quiz_box").classList.add("active");
    startTime(10);
    let soru=quiz.soruGetir();
    quiz.soruIndex++;
    soruGoster(soru);
});

document.querySelector(".card-footer").addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex){
        let soru=quiz.soruGetir();
        quiz.soruIndex++;
        soruGoster(soru);
        document.querySelector(".next_btn").classList.remove("show");

    }
    else{
        document.querySelector(".score_box").classList.add("active");
        document.querySelector(".quiz_box").classList.remove("active");
        skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
        console.log("Quiz Bitti!")
    }

});
const option_list = document.querySelector(".option_list");
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
    option_list.innerHTML = options;

    const option = document.querySelectorAll(".option");

    for(let opt of option){

        opt.setAttribute("onclick","optionSelected(this)");
    }
}

    function optionSelected(option){
        let cevap = option.querySelector("span b").textContent;
        let soru  = quiz.soruGetir();    

        if(soru.cevabiKontrolEt(cevap)){
            quiz.dogruCevapSayisi += 1;
            option.classList.add("correct");

        }else{
            option.classList.add("incorrect");
        }
        for(let i=0 ; i < option_list.children.length ; i++){
            option_list.children[i].classList.add("disabled");
        }
        document.querySelector(".next_btn").classList.add("show");
    }

    function skoruGoster(toplamSoru,dogruCevap){
        let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz`;
        document.querySelector(".score_text").innerHTML = tag;
        startBtn.click();
        score_box.classList.remove("active");
    }

    btn_quit.addEventListener("click",function(){
        window.location.reload();
    });

    btn_replay.addEventListener("click",function(){
        quiz.soruIndex = 0;
        quiz.dogruCevapSayisi = 0;
        startBtn.click();
        score_box.classList.remove("active");
    });

    function startTime(time){

        setInterval(time);
        function time(){
            Quiz.time_second.textContent = time;
            time--;
        }
    }