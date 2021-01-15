function myBtn() {
    if (document.getElementById("NinjaColor").style .display === 'none', document.getElementById("main").style .display === 'block') {
    document.getElementById("NinjaColor").style .display = 'block';
    document.getElementById("main").style.display = 'none';
} else {
        document.getElementById("NinjaColor").style.display ='none';
        document.getElementById("main").style .display = 'block';
    }
}
function show(){
    var btns = document.getElementById("Idcolor");
    var color = btns.options[btns.selectedIndex].value;
    document.getElementById("photo").style .backgroundColor = color;
}
function reset(){
    document.getElementById("photo").style .backgroundColor = 'white';
}
function MyGenerate(){
    var a, b;
    a = "0123456789ABCDEF";
    b = "#";
    i = 0;
    for (i; i < 6; i++) {
        b = b + a[Math.floor(Math.random() * 16)];
    }
    document.getElementById("photo").style .backgroundColor = b;
}