
$('document').ready(function() {	
	$('.table #editButton').on('click',function(event){		
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(vehicleMaintenance, status){
			$('#idEdit').val(vehicleMaintenance.id);
			$('#ddlSupplierEdit').val(vehicleMaintenance.supplierid);			
			$('#ddlVehicleEdit').val(vehicleMaintenance.vehicleid);
			$('#remarksEdit').val(vehicleMaintenance.remarks);
			$('#priceEdit').val(vehicleMaintenance.price);
			var startDate = vehicleMaintenance.startDate.substr(0,10);
			var endDate = vehicleMaintenance.endDate.substr(0,10);
			$('#startDateEdit').val(startDate);
			$('#endDateEdit').val(endDate);
			
			
		});			
		$('#editModal').modal();		
	});
	
	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(vehicleMaintenance, status){
			$('#idDetails').val(vehicleMaintenance.id);
			$('#ddlSupplierDetails').val(vehicleMaintenance.supplierid);			
			$('#ddlVehicleDetails').val(vehicleMaintenance.vehicleid);
			
			var startDate = vehicleMaintenance.startDate.substr(0,10);
			var endDate = vehicleMaintenance.endDate.substr(0,10);
			$('#startDateDetails').val(startDate);
			$('#endDateDetails').val(endDate);
			$('#priceDetails').val(vehicleMaintenance.price);
			$('#remarksDetails').val(vehicleMaintenance.remarks);
			$('#lastModifiedByDetails').val(vehicleMaintenance.lastModifiedBy);
			$('#lastModifiedDateDetails').val(vehicleMaintenance.lastModifiedDate.substr(0,19).replace("T", " "));
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
	
	