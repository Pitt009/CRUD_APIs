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
      var plantillaFinal = "";
      plantillaFinal += plantilla.replace("__name__" , tarea.name).replace("__status__" , tarea.status[0]);
      $taskList.html(plantillaFinal);
      // var nombre = tarea.name;
      // var estado = tarea.status[0];
      // // creamos filas
      // var $tr = $("<tr />");
      // //creamos celda del nombre
      // var $nombreTd = $("<td />")
      // $nombreTd.text(nombre);
      // //creamos celda del estado
      // var $estadoTd = $("<td />")
      // $estadoTd.text(estado);
      // $tr.append($nombreTd);
      // $tr.append($estadoTd);
      //
      // $taskList.append($tr);

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



var plantilla = '<tr>' + '<td>__name__</td>' + '<td>__status__</td>' + '<td>'+
  '<a class="glyphicon glyphicon-plus" aria-hidden="true"></a>' +
  '<a class="glyphicon glyphicon-remove" aria-hidden="true"></a>'+
  '<a class="glyphicon glyphicon-pencil" aria-hidden="true"></a>' + '</td>' +
  '</tr>';



$(document).ready(cargarPagina);
