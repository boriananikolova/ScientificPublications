var table_categories;

function initTable(){
	table_categories = $('#categories').DataTable( {
		"lengthMenu": [[10], [10]],
		"aaSorting": [],
        "scrollY": window.innerHeight - 400,
        "scrollX": "auto",
        "paging": false,
		"bInfo" : false,
		"columns": [
			{ "width": "10px" },
            null
		]
	} );			                
}

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

function delCategory(id){
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
					url: "/del-category",
					success: function(data){
						if(data.result == "del")
						{
							table_categories.row('.selected').remove().draw( false );
							$('#btn_edit').prop('disabled', true);
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

$(function () {
    initTable();
	
	$('#categories tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
			$('#btn_edit').prop('disabled', true);
			$('#btn_delete').prop('disabled', true);
		}
		else {
			$('#categories tbody tr').removeClass('selected');
			$(this).addClass('selected');
			$('#btn_edit').prop('disabled', false);
			$('#btn_delete').prop('disabled', false);
		}
	} );

	$('#btn_create').click( function () {
		window.location = "/category";
	});

	$('#btn_edit').click( function () {
		window.location = "/category/" + $('td', $('.selected')).eq(0).html();
	});

	$('#btn_delete').click( function () {
		delCategory($('td', $('.selected')).eq(0).html());
	});

});
