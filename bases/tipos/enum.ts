(() => {

  enum AudioLevel {
    min = 1,
    medium, // 2
    max = 10,
  }

  let currentAudio = AudioLevel.medium

  console.log(currentAudio)
  console.log(AudioLevel)

})()