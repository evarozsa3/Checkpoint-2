let porky = {
  clicks: 0,
  upgrade: ["apples", "corn", "farm", "cleaver"]
}

let bacon = 0;
let multiplier = 1;


function clicks(bacon) {
  porky.clicks++
  document.getElementById("clicks").innerHTML = porky.clicks.toString()
}