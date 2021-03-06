
    ///// Equalizer code
    let lines = document.querySelectorAll('.vertical');
    function setEqualizer() {
      for (let i = 0; i < lines.length; i += 1) {
        let line = lines[i];
        line.style.animation = `equalizer ${Math.random() * (3 - 0.3) + 0.3}s ease infinite`;
        line.style.animationDirection = 'alternate-reverse'
      }
    }
    setEqualizer()

    ///// Equalizer icon code
    let volumBtnIcon = document.querySelector('.left-volum__icon');
    let volumEq = document.querySelector('#vertical-lines')
    volumBtnIcon.addEventListener('click',()=>{
        volumBtnIcon.classList.toggle('volumeIcon');
        volumEq.classList.toggle('volumEq');
        volumeIcon()
    });

    ///// Equalizer muted code
    function volumeIcon() {

        let video=document.getElementById("myVideo")
        if(video.muted){
            video.muted = false;
        } else {
            video.muted = true;
        }
    }

    ///// Equalizer volume code
    function SetVolume(val) {
        let player = document.getElementById('myVideo');
        console.log('Before: ' + player.volume);
        player.volume = val / 100;
        console.log('After: ' + player.volume);
    }


    ///// Burger inner & burger menu code
    let burgerBtn = document.querySelector('.burger-wrapper');
    let burgerBox = document.querySelector('.burger-box');
    let rightMenuOpen = document.querySelector('.right-menu__open');
    let rightMenuClose = document.querySelector('.right-menu__close');

        burgerBtn.addEventListener('click',()=> {
            burgerBtn.classList.toggle('burgerBtn');
            burgerBox.classList.toggle('burgerBox');
            rightMenuOpen.classList.toggle('rightMenuOpen');
            rightMenuClose.classList.toggle('rightMenuClose');
        });

        rightMenuOpen.addEventListener('click',()=> {
            burgerBtn.classList.add('burgerBtn');
            burgerBox.classList.add('burgerBox');
            rightMenuOpen.classList.add('rightMenuOpen');
            rightMenuClose.classList.add('rightMenuClose');
        });

        rightMenuClose.addEventListener('click',()=> {
            burgerBtn.classList.remove('burgerBtn');
            burgerBox.classList.remove('burgerBox');
            rightMenuOpen.classList.remove('rightMenuOpen');
            rightMenuClose.classList.remove('rightMenuClose');
        });



    let sliderIndex = 1;
    let timeout;
    const layers = [...document.querySelectorAll('.layer')];
    const covers = [...document.querySelectorAll('.photo-frame')];

    function changeCoverAnimState(state = 0) {
    const st = state === 1 ? 'running' : 'paused';
    covers.forEach(cover => {
        cover.querySelector('.cover').style.width = `${state * 100}%`;
    });
    }

    function switchLayer(step = 1) {
        const nextSlide = (sliderIndex + step) % 3 === 0 ? 3 : (sliderIndex + step) % 3;
    
        changeCoverAnimState(1);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            changeCoverAnimState(0)
        }, 500);
    
        for(let i of layers) {
            i.classList.remove('layer-displayed');
            i.classList.remove('layer-displayed-exit');
            if(i.dataset.scene == nextSlide) {
            i.classList.add('layer-displayed');
            }
            if(i.dataset.scene == sliderIndex) {
            i.classList.add('layer-displayed-exit');
            }
        }
        
        sliderIndex = nextSlide;
    }