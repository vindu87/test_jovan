

    playAudio = (id) => {
        debugger;
        var element = document.getElementById(`poem${id}`);
        var play = "fa-play-circle";
        var pause = "fa-pause-circle";
        var audio = document.getElementById(id);
        //var audio = new Audio(`./mp3/${poemsAudioToIdMapper(id)}.mp3`);
        if(element.className.includes(play)){
            element.classList.remove(play);
            element.classList.add(pause);
            audio.play();
        } else {
            element.classList.remove(pause);
            element.classList.add(play);
            audio.pause();
            audio.currentTime = 0;
        }
    },
    
    poemsAudioToIdMapper = (id) => {
        switch (id) {
            case 1:
                return "huk_mrtve_sove"        
            default:
                break;
        }
    }    