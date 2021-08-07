
$('document').ready(function() {
	
	$('.table #editButton').on('click',function(event){		
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(client, status){
			$('#addressEdit').val(client.address);
			$('#cityEdit').val(client.city);
			$('#ddlCountryEdit').val(client.countryid);
			$('#detailsEdit').val(client.details);
			$('#emailEdit').val(client.email);
			$('#idEdit').val(client.id);
			$('#mobileEdit').val(client.mobile);
			$('#nameEdit').val(client.name);	
			$('#phoneEdit').val(client.phone);			
			$('#ddlStateEdit').val(client.stateid);	
			
		});			
		$('#editModal').modal();		
	});
	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(client, status){
		    $('#idDetails').val(client.id);
			$('#nameDetails').val(client.name);
			$('#emailDetails').val(client.email);
			$('#phoneDetails').val(client.phone);
			$('#mobileDetails').val(client.mobile);
			$('#cityDetails').val(client.city);
			$('#addressDetails').val(client.address);
			$('#ddlStateDetails').val(client.stateid);
			$('#ddlCountryDetails').val(client.countryid);
			$('#detailsDetails').val(client.details);
			$('#lastModifiedByDetails').val(client.lastModifiedBy);
			$('#lastModifiedDateDetails').val(client.lastModifiedDate.substr(0,19).replace("T", " "));
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
