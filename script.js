let count=0;

document.getElementById("decreaseBtn").onclick = function(){
  count --
  document.getElementById("countLbl").textContent=count;
}
document.getElementById("increaseBtn").onclick = function(){
  count ++
  document.getElementById("countLbl").textContent=count;
}

document.getElementById("resetBtn").onclick = function(){
  count=0
  document.getElementById("countLbl").textContent=count;
}