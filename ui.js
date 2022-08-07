function UI(){
    this.startBtn = document.querySelector(".startBtn"),
    this.next_btn = document.querySelector(".next_btn"),
    this.quiz_box = document.querySelector(".quiz_box"),
    this.option_list = document.querySelector(".option_list"),
    this.score_box = document.querySelector(".score_box"),
    this.btn_quit = document.querySelector(".btn_quit"),
    this.btn_replay = document.querySelector(".btn_replay"),
    this.time_text = document.querySelector(".time_text"),
    this.time_second = document.querySelector(".time_second")
}

UI.prototype.soruGoster = function(soru){
    let question = `<span>${soru.soruMetni}</span>`;
    let options = ``;


    for(let cevap in soru.cevapSecenekleri){
        options += 
        `<div class="option"> 
        <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
        </div>`;
    }


    document.querySelector(".question_text").innerHTML = question;
    this.option_list.innerHTML = options;

    const option = this.option_list.querySelectorAll(".option")

    for(let opt of option){

        opt.setAttribute("onclick","optionSelected(this)");
    }
}

UI.prototype.skoruGoster = function(toplamSoru,dogruCevap){
    let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz`;
    document.querySelector(".score_text").innerHTML = tag;
    ui.startBtn.click();
    score_box.classList.remove("active");
}

const ui = new UI();
