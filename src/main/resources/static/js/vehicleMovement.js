
$('document').ready(function() {
	
	$('.table #editButton').on('click',function(event){		
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(vehicleMovement, status){
			$('#idEdit').val(vehicleMovement.id);
			$('#ddlLocation1Edit').val(vehicleMovement.locationid1);
			$('#ddlLocation2Edit').val(vehicleMovement.locationid2);			
			$('#ddlVehicleEdit').val(vehicleMovement.vehicleid);
			$('#remarksEdit').val(vehicleMovement.remarks);
			
			var date1 = vehicleMovement.date1.substr(0,10);
			var date2 = vehicleMovement.date2.substr(0,10);
			$('#date1Edit').val(date1);
			$('#date2Edit').val(date2);
			
			
		});			
		$('#editModal').modal();		
	});
	
    $('.table #detailsButton').on('click',function(event) {
	     event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(vehicleMovement, status){
			$('#idDetails').val(vehicleMovement.id);
			$('#ddlLocation1Details').val(vehicleMovement.locationid1);
			$('#ddlLocation2Details').val(vehicleMovement.locationid2);			
			$('#ddlVehicleDetails').val(vehicleMovement.vehicleid);
			$('#remarksDetails').val(vehicleMovement.remarks);
			
			var date1 = vehicleMovement.date1.substr(0,10);
			var date2 = vehicleMovement.date2.substr(0,10);
			$('#date1Details').val(date1);
			$('#date2Details').val(date2);
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
	