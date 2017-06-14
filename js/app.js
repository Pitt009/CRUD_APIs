var api = {
  url: 'https://lab-api-test.herokuapp.com/tasks'
};
 var $taskList = $("#task-list");


var cargarPagina = function () {
  cargarTareas();
  $("#add-form").submit(agregarTarea);
};



var cargarTareas = function () {
  $.getJSON(api.url, function (tareas) {


    tareas.forEach(crearTarea);
  });
}
    var crearTarea = function (tarea) {
      var nombre = tarea.name;
      var estado = tarea.status[0];
      // creamos filas
      var $tr = $("<tr />");
      //creamos celda del nombre
      var $nombreTd = $("<td />")
      $nombreTd.text(nombre);
      //creamos celda del estado
      var $estadoTd = $("<td />")
      $estadoTd.text(estado);
      $tr.append($nombreTd);
      $tr.append($estadoTd);

      $taskList.append($tr);
  
}

var agregarTarea = function (e) {
  e.preventDefault();
  var nombre = $("#nombre-tarea").val();
  $.post(api.url, {
    name: nombre
  }, function (response) {
    $("#myModal").modal("hide");
    cargarTareas();

  });
};
$(document).ready(cargarPagina);
