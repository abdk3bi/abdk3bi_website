let butup = document.querySelector(".butup");

let menbtn = document.querySelector(".menbtn");
let MainMenu = document.querySelector(".MainMenu");




window.onscroll= function(){
if (this.scrollY>=200){
    butup.classList.add("showbut");
}else {
    butup.classList.remove("showbut");
}
};

butup.onclick = function() {

    window.scrollTo({
        top:0,
        behavior: "smooth",
    })

};




// menbtn.onclick = function() {
//     console.log("jfdfhjdh");
//     MainMenu.style.display = "block";

// };


menbtn.onclick = function() {
    if (MainMenu.style.display == "none") {
        MainMenu.style.display = "block";
    } else {
        MainMenu.style.display = "none";
    }
  }