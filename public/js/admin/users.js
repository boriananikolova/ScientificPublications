var table_users;

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

function delUser(id){
	$( "#dialog_confirm_delete" ).dialog({
		resizable: false,
		height: "auto",
		width: 400,
		modal: true,
		buttons: {
			"Yes": function() {
				$.ajax({
					type: "POST",
					data: {id:id},
					url: "/del-user",
					success: function(data){
						if(data.result == "del")
						{
							table_users.row('.selected').remove().draw( false );
							$('#btn_delete').prop('disabled', true);
							alert("The row was successfully removed.");
						}
						else
						{
							alert("This row can't be removed.");
						}
					}
				}); 			
				$( this ).dialog( "close" );
			},
			"Cancel": function() {
				$( this ).dialog( "close" );
			}
		}
    });
}

function initTable(){
	table_users = $('#users').DataTable( {
		"lengthMenu": [[10], [10]],
		"aaSorting": [],
        "scrollY": window.innerHeight - 400,
        "scrollX": "auto",
        "paging": false,
		"bInfo" : false,
		"columns": [
			{ "width": "10px" },
            null,
            null
		]
	} );			                
}

$(function () {
    initTable();

    $('#users tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
			$('#btn_delete').prop('disabled', true);
		}
		else {
			$('#users tbody tr').removeClass('selected');
			$(this).addClass('selected');
			$('#btn_delete').prop('disabled', false);
		}
	});

	$('#btn_delete').click( function () {
		delUser($('td', $('.selected')).eq(0).html());
	});

});