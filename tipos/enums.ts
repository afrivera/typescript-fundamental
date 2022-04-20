(()=>{

    enum AudioLevel {
        min =1,
        medium =5,
        medium2,
        max =10
    }

    let currentAudio:AudioLevel = AudioLevel.medium2

    console.log(currentAudio);
    console.log(AudioLevel);
})()