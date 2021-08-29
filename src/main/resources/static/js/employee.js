
$('document').ready(function() {
	
	$('.table #editButton').on('click',function(event){		
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(employee, status){
			$('#addressEdit').val(employee.address);
			$('#cityEdit').val(employee.city);
			$('#ddlNationalityEdit').val(employee.countryid);			
			var dob = employee.dateOfBirth.substr(0,10);
			$('#dateOfBdEdit').val(dob);
			$('#emailEdit').val(employee.email);
			$('#firstnameEdit').val(employee.firstname);
			$('#usernameEdit').val(employee.username);
			$('#ddlGenderEdit').val(employee.gender);
			$('#lastnameEdit').val(employee.lastname);
			$('#ddlmaritalSEdit').val(employee.maritalStatus);
			$('#mobileEdit').val(employee.mobile);
			$('#phoneEdit').val(employee.phone);				
			$('#socSecNumberEdit').val(employee.socialSecurityNumber);			
			$('#ddlStateEdit').val(employee.stateid);	
			$('#ddlTitleEdit').val(employee.title);			
			$('#ddlEmployeeTypeEdit').val(employee.employeetypeid);				
			var hireDate = employee.hireDate.substr(0,10);
			$('#hireDatedEdit').val(hireDate);
			$('#ddlJobTitleEdit').val(employee.jobtitleid);	
			
		});			
		$('#editModal').modal();		
	});
	$('.table #detailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(employee, status){
			$('#addressDetails').val(employee.address);
			$('#cityDetails').val(employee.city);
			$('#ddlNationalityDetails').val(employee.countryid);			
			var dob = employee.dateOfBirth.substr(0,10);
			$('#dateOfBdDetails').val(dob);
			$('#emailDetails').val(employee.email);
			$('#firstnameDetails').val(employee.firstname);
			$('#usernameDetails').val(employee.username);
			$('#ddlGenderDetails').val(employee.gender);
			$('#idDetails').val(employee.id);
			$('#lastnameDetails').val(employee.lastname);
			$('#ddlmaritalSDetails').val(employee.maritalStatus);
			$('#mobileDetails').val(employee.mobile);
			$('#phoneDetails').val(employee.phone);				
			$('#socSecNumberDetails').val(employee.socialSecurityNumber);			
			$('#ddlStateDetails').val(employee.stateid);	
			$('#ddlTitleDetails').val(employee.title);			
			$('#ddlEmployeeTypeDetails').val(employee.employeetypeid);				
			var hireDate = employee.hireDate.substr(0,10);
			$('#hireDatedDetails').val(hireDate);
			$('#ddlJobTitleDetails').val(employee.jobtitleid);
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

