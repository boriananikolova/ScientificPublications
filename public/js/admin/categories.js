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

});
