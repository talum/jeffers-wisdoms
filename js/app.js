document.addEventListener("DOMContentLoaded", function(event){
  loadData();
  buttonListener();
});

function loadData(){
  var num = Math.floor(Math.random() * data.length);
  document.getElementById('quote').textContent = data[num].quote;
  document.getElementById('follow-up').textContent = data[num].followUp;
  document.getElementById('context').textContent = data[num].context;
}

function buttonListener(){
  document.getElementById('knowledge-button').onclick = function(){
    loadData();
    this.blur();
  }
}