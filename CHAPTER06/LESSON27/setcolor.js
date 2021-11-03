window.addEventListener(
    "load",
    function (event) {
        setBoxColor();
    },
    false
);

// 色設定
function setBoxColor() {
    let query = window.location.search;
    let sp1 = query.substr(1).split("&");
    for(let i = 0; i < sp1.length; i++) {
        let sp2 = sp1[i].split("=");
        if(sp2[0] == "col") {
            color = sp2[1];
            break;
        }
    }

    let divs = document.getElementsByTagName("div");
    for(let i = 0; i < divs.length; i++) {
        if(divs[i].className == "odd")
            divs[i].style.background = color;
    }
}