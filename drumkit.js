document.getElementById("hihat").addEventListener("click",hihat);
document.getElementById("crashcymbal").addEventListener("click",crashcymbal);
document.getElementById("bassdrum").addEventListener("click",bassdrum);
document.getElementById("snare").addEventListener("click",snare);
document.getElementById("hihatn").addEventListener("input",function(){
    let hihatn=document.getElementById("hihatn").value;
    hihatn=60/hihatn;
    setInterval(hihat,hihatn*1000);
});
document.getElementById("crashcymbaln").addEventListener("input",function(){
    let crashcymbaln=document.getElementById("crashcymbaln").value;
    crashcymbaln=60/crashcymbaln;
    setInterval(crashcymbal,crashcymbaln*1000);
});
document.getElementById("bassdrumn").addEventListener("input",function(){
    let bassdrumn=document.getElementById("bassdrumn").value;
    bassdrumn=60/bassdrumn;
    setInterval(bassdrum,bassdrumn*1000);
});
document.getElementById("snaren").addEventListener("input",function(){
    let snaren=document.getElementById("snaren").value;
    snaren=60/snaren;
    setInterval(snare,snaren*1000);
});

function hihat(){
    document.getElementById("hihataudio").load();
    document.getElementById("hihataudio").play();
}

function crashcymbal(){
    document.getElementById("crashcymbalaudio").load()
    document.getElementById("crashcymbalaudio").play();
}


function bassdrum(){
    document.getElementById("bassdrumaudio").load();
    document.getElementById("bassdrumaudio").play();
}

function snare(){
    document.getElementById("snareaudio").load();
    document.getElementById("snareaudio").play();
}
document.addEventListener("keydown",function(e){
    if(e.key=='s'){
        snare();

    }
    else if(e.key=='u'){
        bassdrum();
    }
    else if(e.key=='a'){
        crashcymbal();
    }
    else if(e.key=='h'){
        hihat();
        
    }
})