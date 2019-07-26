var animations = ['rejection','inattentive','mnemonics','phonological','estimate'
                        ,'dyslexia','articulation','incomprehension','confusion'];
    var i, len = animations.length;
    for(i = 0; i < len; i += 1) {
        var anim;
        var elem = document.getElementById(animations[i])
        var animData = {
            container: elem,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            rendererSettings: {
                progressiveLoad:true,
                preserveAspectRatio:'xMidYMid meet'
            },
            path: 'https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/'+animations[i]+'.json'
        };
        anim = lottie.loadAnimation(animData);
        anim.setSubframe(false);
    }