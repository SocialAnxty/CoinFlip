const results = document.getElementById("results");

flip.onclick = function() {
  let random = Math.random();
  if (random <= 0.5) {
    results.textContent = "The Coin Landed On Heads";
    document.getElementById("heads").style.visibility = "visible";
    document.getElementById("tails").style.visibility = "hidden";
  } else {
    results.textContent = "The Coin Landed On Tails";
    document.getElementById("tails").style.visibility = "visible";
    document.getElementById("heads").style.visibility = "hidden";
  }
};
