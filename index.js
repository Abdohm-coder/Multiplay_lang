class Tranlate{
    constructor(){
        document.getElementById("arabic").addEventListener("click",()=>{
            this.tranlate("arabic");
        });
        document.getElementById("english").addEventListener("click",()=>{
            this.tranlate("english");
        });
        this.tranlate(localStorage.getItem("Language"));
    }
    tranlate(language){
        if(language == "arabic"){
            document.getElementById("title").innerHTML = "عبدالرزاق";
            document.getElementById("p").innerHTML = "تعلم جافا سكريبت";
        }else if(language == "english"){
            document.getElementById("title").innerHTML = "Abderrezak";
            document.getElementById("p").innerHTML = "Learn JavaScript";
        }
        localStorage.setItem("Language",language);
    }
}
onload = new Tranlate();