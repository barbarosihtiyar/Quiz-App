let soru  = quiz.soruGetir();    

ui.startBtn.addEventListener("click",function(){
    ui.quiz_box.classList.add("active");
    startTime(10);
    ui.soruGoster(quiz.soruGetir());
});

ui.next_btn.addEventListener("click",function(){
    if(quiz.sorular.length != quiz.soruIndex + 1 ){
        quiz.soruIndex++;
        clearInterval(counter);
        startTime(10);
        ui.soruGoster(quiz.soruGetir());
        ui.next_btn.classList.remove("show");
    }
    else{
        ui.next_btn.classList.remove("show");
        clearInterval(counter);
        ui.score_box.classList.add("active");
        ui.quiz_box.classList.remove("active");
        ui.skoruGoster(quiz.sorular.length,quiz.dogruCevapSayisi);
    }

});

    function optionSelected(option){
        clearInterval(counter);
        let cevap = option.querySelector("span b").textContent;
        let soru = quiz.soruGetir();
        if(soru.cevabiKontrolEt(cevap)){
            quiz.dogruCevapSayisi += 1;
            option.classList.add("correct");
        }else{
            option.classList.add("incorrect");
        }
        for(let i=0 ; i < ui.option_list.children.length ; i++){
            ui.option_list.children[i].classList.add("disabled");
        }
        ui.next_btn.classList.add("show");

    }

    

    ui.btn_quit.addEventListener("click",function(){
        window.location.reload();
    });

    ui.btn_replay.addEventListener("click",function(){
        quiz.soruIndex = 0;
        quiz.dogruCevapSayisi = 0;
        ui.startBtn.click();
        ui.score_box.classList.remove("active");
    });

 let counter ;
      function startTime(time){
        counter = setInterval(timer,1000);

        
        function timer(){
            ui.time_second.textContent = time ;
            time--;

            
        if(time < 0 ){
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti";
            let cevap = quiz.soruGetir().dogruCevap;

            for(let option of ui.option_list.children){
                if(option.querySelector("span b").textContent == cevap){
                    option.classList.add("correct");
                }

                option.classList.add("disabled");

            }

            ui.next_btn.classList.add("show");
        }
    }
     }