
$('document').ready(function() {
	
	$('.table #editButton').on('click',function(event){		
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(supplier, status){
			$('#addressEdit').val(supplier.address);
			$('#cityEdit').val(supplier.city);
			$('#ddlCountryEdit').val(supplier.countryid);
			$('#detailsEdit').val(supplier.details);
			$('#emailEdit').val(supplier.email);
			$('#idEdit').val(supplier.id);
			$('#mobileEdit').val(supplier.mobile);
			$('#nameEdit').val(supplier.name);	
			$('#phoneEdit').val(supplier.phone);			
			$('#ddlStateEdit').val(supplier.stateid);	
			
		});			
		$('#editModal').modal();		
	});
	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(supplier, status){
		    $('#idDetails').val(supplier.id);
			$('#nameDetails').val(supplier.name);
			$('#emailDetails').val(supplier.email);
			$('#phoneDetails').val(supplier.phone);
			$('#mobileDetails').val(supplier.mobile);
			$('#cityDetails').val(supplier.city);
			$('#addressDetails').val(supplier.address);
			$('#ddlStateDetails').val(supplier.stateid);
			$('#ddlCountryDetails').val(supplier.countryid);
			$('#detailsDetails').val(supplier.details);
			$('#lastModifiedByDetails').val(supplier.lastModifiedBy);
			$('#lastModifiedDateDetails').val(supplier.lastModifiedDate.substr(0,19).replace("T", " "));
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
