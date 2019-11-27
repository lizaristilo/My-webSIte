let letters = document.getElementsByClassName("title-letter");
setTimeout(() => {
  for (let i = 0; i < letters.length; i++) {
    anime({
      targets: letters[i],
      easing: "easeInQuad",
      translateX: ["50px", "0"],
      delay: 90 * i
    });

    // anime({
    //   targets: letters[i],
    //   easing: "easeInQuad",
    //   opacity: 1,
    //   delay: 60 * i
    // });
  }
}, 500);
