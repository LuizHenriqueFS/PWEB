window.addEventListener("DOMContentLoaded", function() {
    var windowElement = document.getElementById("janela");
  
    windowElement.addEventListener("mouseover", function() {
      windowElement.classList.remove("fechada");
      windowElement.classList.add("aberta");
    });
  
    windowElement.addEventListener("mouseout", function() {
      windowElement.classList.remove("aberta");
      windowElement.classList.add("fechada");
    });
  
    windowElement.addEventListener("click", function() {
      windowElement.classList.add("quebrada");
    });
  });
  