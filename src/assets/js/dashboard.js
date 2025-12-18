$(function () {

  $(".dashboard-content .history .hide-show-menu").on('click', function () {

    $(".dashboard-content").toggleClass("wide");
    $(".hide-show-menu i").toggleClass("change-dir");
    $(".dashboard-content .history").toggleClass("hide");
    $(".history-content").toggleClass("d-none");


  });
}
);



var checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach(checkbox => {

  checkbox.addEventListener('change', function () {
    if (this.checked) {
      this.closest('.checkbox-wrapper').querySelector('label').style.backgroundColor = 'black';
      this.closest('.checkbox-wrapper').querySelector('label').style.color = 'white';
    } else {
      this.closest('.checkbox-wrapper').querySelector('label').style.backgroundColor = '';
      this.closest('.checkbox-wrapper').querySelector('label').style.color = 'black';
    }

  })

});

$(document).ready(function(){
  if ($.fn.DataTable.isDataTable('#usersTable')) {
      $('#usersTable').DataTable().destroy();
    }

    $('#usersTable').DataTable({

      processing: true,
      paging: true,
      ordering: true,
      searching: false,
      lengthChange: false,

    });


    const table1 = $('#designationDatatable');

if ($.fn.DataTable.isDataTable(table1)) {
    table1.DataTable().clear().destroy();
}

    $("#designationDatatable").DataTable({
     
      filter: true,
       searching: false,
      lengthChange: false,
      dom: "lBfrtip",
      lengthChange: false,
      autoWidth: true,
      order: [],
    });
    $(".table-confidence-score").DataTable({
     
      filter: true,
       searching: false,
      lengthChange: false,
      dom: "lBfrtip",
      lengthChange: false,
      autoWidth: true,
      order: [],
    });


})

  

  


    







