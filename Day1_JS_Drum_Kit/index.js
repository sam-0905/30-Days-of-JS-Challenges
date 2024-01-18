function playSound(e) {
  const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`); // we are geeting a corresponding audio element for that key.
  //console.log(audio);
  const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
  console.log(key);

  if (!audio) return; //If no audio or return null,So we will just return "Null" if there is no audio.
  audio.currentTime = 0; //If we hit it multiple times ,let it want to play/Rewind the start.
  audio.play();
  //console.log(e); //IT shows the event keyboard with key&keycodes.
  //console.log(e.keyCode);
  key.classList.add("playing");
}

//TO make a little animation we are adding class .playing to it

function removeTransition(e) {
  //console.log(e);
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = this.document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
