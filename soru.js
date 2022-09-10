function Soru(soruMetni,cevapSecenekleri,dogruCevap){
    this.soruMetni = soruMetni;
    this.cevapSecenekleri = cevapSecenekleri;
    this.dogruCevap =  dogruCevap;
}

Soru.prototype.cevabiKontrolEt = function(cevap){
    return cevap == this.dogruCevap;
}

let sorular = [
    new Soru ("1- Aşağıda Verilen İlk Çağ Uygarlıklarından Hangisi Yazıyı İcat Etmiştir ?" , {a:"Hititler "  ,b:"Elamlar " ,   c:"Sümerler "  ,d:"Urartular"} , "c"),
    new Soru ("2-Mustafa Kemal Atatürk’ün Nüfusa Kayıtlı Olduğu İl Hangisidir ?" , {a:"Bursa " , b:"Ankara "  , c:"İstanbul "   ,d:"Gaziantep"} , "d"),
    new Soru ("Tsunami Felaketinde En Fazla Zarar Gören Güney Asya Ülkesi Aşağıdakilerden Hangisidir ?" , {a:"Endonezya "  ,b:"Srilanka "  , c:"Tayland "   ,d:"Hindistan"} , "a"),
    new Soru ("4-Romen Rakamında Hangi Sayı Yoktur ? " , {a:"0 " , b:"50 " ,  c:"100 "   ,d:"1000"} , "a"),
    new Soru ("5-Aspirinin Hammaddesi Nedir ?" , {a:"Söğüt " , b:"Köknar ",   c:"Kavak "   ,d:"Meşe "} , "a")
];

