var bagli_hesaplar_section = document.getElementById("bagli-hesaplar");
var medya_item = bagli_hesaplar_section.getElementsByClassName("__item"); 

for(let i = 0; i < medya_item.length; i++){
    if(medya_item[i].classList.contains("--aktif")){
        medya_item[i].getElementsByClassName("__ok")[0].classList.add("--aktif");
    }
}

function popup_ac(index){
    document.querySelectorAll('.popup.'+index)[0].style.display = "block";
}

function popup_kapat(){
    let popup = document.querySelectorAll('.popup');
    for(let i = 0; i < popup.length; i++){
        popup[i].style.display = "none";
    }
}

