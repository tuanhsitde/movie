window.onscroll = function () {
    // tao hieu ung xuat hien khi scroll
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // thay doi translate ve 0%
        document.getElementById("headerScroll").style.transform = "translate(-50%,0)";

    }
    else {
        document.getElementById("headerScroll").style.transform = "translate(-50%,-100%)";
    }
}