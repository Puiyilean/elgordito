// Obtén los elementos
var modal = document.getElementById("miModal");
var img = document.getElementById("miImagen");
var modalImg = document.getElementById("imgAmpliada");
var cerrar = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en la imagen
img.onclick = function(){
  modal.style.display = "flex";
  modalImg.src = this.src;
}

// Cuando el usuario hace clic en (x), se cierra el modal
cerrar.onclick = function() { 
  modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera de la imagen, también cierra el modal
modal.onclick = function() {
  modal.style.display = "none";
}
