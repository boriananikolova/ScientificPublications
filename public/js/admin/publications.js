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
		],
		initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
				if ((column.index() == 3) || (column.index() == 4)){
					var select = $('<select><option value="">All</option></select>')
                    .appendTo( $(column.footer()).empty() )
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                        $(this).val()
                        );
                        
                        column
                        .search( val ? '^'+val+'$' : '', true, false )
                        .draw();
                    } );
                    
					column.data().unique().sort().each( function ( d, j ) {
						select.append( '<option value="'+d+'">'+d+'</option>' )
                    } );
                }
            } );
        }
	} );			                
}

$.ajaxSetup({
	headers: {
		'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
	}
});

function delPublication(id){
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
					url: "/del-publication",
					success: function(data){
						if(data.result == "del")
						{
							table_publications.row('.selected').remove().draw( false );
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

	$('#btn_delete').click( function () {
		delPublication($('td', $('.selected')).eq(0).html());
	});

});
