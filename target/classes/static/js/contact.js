
$('document').ready(function() {
	
	$('.table #editButton').on('click',function(event){		
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(contact, status){
		    $('#idEdit').val(contact.id);
		    $('#firstnameEdit').val(contact.firstname);	
		    $('#lastnameEdit').val(contact.lastname);
		    $('#phoneEdit').val(contact.phone);
		    $('#mobileEdit').val(contact.mobile);
		    $('#emailEdit').val(contact.email);
			$('#remarksEdit').val(contact.remarks);
			
		});			
		$('#editModal').modal();		
	});
	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(contact, status){
		    $('#idDetails').val(contact.id);
			$('#firstnameDetails').val(contact.firstname);
			$('#emailDetails').val(contact.email);
			$('#phoneDetails').val(contact.phone);
			$('#mobileDetails').val(contact.mobile);
			$('#lastnameDetails').val(contact.lastname);
			$('#remarksDetails').val(contact.remarks);
			$('#lastModifiedByDetails').val(contact.lastModifiedBy);
			$('#lastModifiedDateDetails').val(contact.lastModifiedDate.substr(0,19).replace("T", " "));
		});			
		$('#detailsModal').modal();
		
	});	
	
	$('.table #deleteButton').on('click',function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('#deleteModal #delRef').attr('href', href);
		$('#deleteModal').modal();		
	});	
	});