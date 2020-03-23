let porky = {
  clicks: 0,
  multiplier: 1,
  autoMultiplier: 0,
  upgrade: ["apples", "corn", "farm", "cleaver"]
}

let clickUpgrade = {
  apple: {
    price: 50,
    quantity: 0
  },
  corn: {
    price: 100,
    quantity: 0
  }
}


let automaticUpgrade = {
  farm: {
    price: 200,
    quantity: 0
  },
  cleaver: {
    price: 500,
    quantity: 0
  }
}


function clicks(bacon) {
  porky.clicks += porky.multiplier

  document.getElementById("clicks").innerHTML = porky.clicks.toString()
}

// function apple() {
//   return apples++
//   document.getElementById("apple").innerHTML = apples.toString()

// }
function upgrade(increase) {
  if (increase == 1 && porky.clicks >= clickUpgrade.apple.price) { //THEN
    porky.multiplier++
    clickUpgrade.apple.quantity++;
    porky.clicks -= clickUpgrade.apple.price;
    clickUpgrade.apple.price += 50;
    drawPage();
  }
  else if (increase == 2 && porky.clicks >= clickUpgrade.corn.price) {
    porky.multiplier += 2
    clickUpgrade.corn.quantity++
    porky.clicks -= clickUpgrade.corn.price
    clickUpgrade.corn.price += 50
    drawPage();
  }
  else if (increase == 3 && porky.clicks >= automaticUpgrade.farm.price) {
    porky.autoMultiplier += .3334
    automaticUpgrade.farm.quantity++
    porky.clicks -= automaticUpgrade.farm.price
    automaticUpgrade.farm.price += 100
    drawPage();
    startInterval();
  }
}
function autoUpgrade() {
  porky.clicks++
  drawPage();
}
function startInterval() {
  let myVar = setInterval(autoUpgrade, 3000)
}


function drawPage() {
  document.getElementById("clicks").innerText = porky.clicks.toString();
  document.getElementById("baconMult").innerHTML = porky.multiplier.toString();
  document.getElementById("applePrice").innerText = clickUpgrade.apple.price.toString();
  document.getElementById("myApple").innerText = clickUpgrade.apple.quantity.toString();
  document.getElementById("cornPrice").innerText = clickUpgrade.corn.price.toString();
  document.getElementById("myCorn").innerText = clickUpgrade.corn.quantity.toString();
  document.getElementById("myFarm").innerText = automaticUpgrade.farm.quantity.toString();
  document.getElementById("farmPrice").innerText = automaticUpgrade.farm.price.toString()
  document.getElementById("baconPerSec").innerHTML = porky.autoMultiplier.toString()
}