var table_publications;

function initTable(){
	table_publications = $('#publications').DataTable( {
		"lengthMenu": [[10], [10]],
		"aaSorting": [],
        "scrollY": window.innerHeight - 400,
        "scrollX": "auto",
        "paging": false,
		"bInfo" : false,
		"columns": [
			{ "width": "10px" },
            null,
            null,
            null,
            null
		]
	} );			                
}

$(function () {
    initTable();
	
	$('#publications tbody').on( 'click', 'tr', function () {
		if ( $(this).hasClass('selected') ) {
			$(this).removeClass('selected');
			$('#btn_edit').prop('disabled', true);
			$('#btn_delete').prop('disabled', true);
		}
		else {
			$('#publications tbody tr').removeClass('selected');
			$(this).addClass('selected');
			$('#btn_edit').prop('disabled', false);
			$('#btn_delete').prop('disabled', false);
		}
    } );
    
    $('#btn_create').click( function () {
		window.location = "/publication";
	});

	$('#btn_edit').click( function () {
		window.location = "/publication/" + $('td', $('.selected')).eq(0).html();
	});

});
