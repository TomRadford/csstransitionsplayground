const trigger = document.querySelector("#trigger");
const wee = document.querySelector(".flyer");
trigger.addEventListener("click", (e) => {
  if (wee.className.includes("flyer-move")) {
    wee.className = `flyer`;
  } else {
    wee.className = `${wee.className} flyer-move`;
  }
});
