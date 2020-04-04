var player = {
  banana: 0,
  banana_per_click: 1
};
update()

function on_BananaButtonClick() {
  player.banana += player.banana_per_click;
}

function update() {
  document.getElementById("bananadisplay").innerHTML = "You have " + player.banana + " bananas.";
  document.getElementById("bananabutton").innerHTML = "Increase banana by " + player.banana_per_click;
  update();
}
