var player = {
  banana: 0,
  banana_per_click: 1
};
document.getElementById("bananadisplay").innerHTML = "You have " + player.banana + " bananas";

function addBanana(){
  player.banana += count;
}
