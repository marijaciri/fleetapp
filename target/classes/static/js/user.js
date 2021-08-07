
$('document').ready(function(){
   $('table #editButton').on('click', function(event){
      event.preventDefault();
      var href = $(this).attr('href');
      $.get(href, function(user, status){
       $('#idEdit').val(user.id);
       $('#firstnameEdit').val(user.firstname);
       $('#lastnameEdit').val(user.lastname);
       $('#usernameEdit').val(user.username);
       $('#passwordEdit').val(user.password);
      
      });
     $('#editModal').modal();
   
   });
   
   $('.table #deleteButton').on('click',function(event) {
		event.preventDefault();
		var href = $(this).attr('href');
		$('#deleteModal #delRef').attr('href', href);
		$('#deleteModal').modal();

      });
      $('.table #detailsButton').on('click',function(event) {
		event.preventDefault();		
		var href= $(this).attr('href');		
		$.get(href, function(user, status){
			$('#idDetails').val(user.id);
			$('#firstnameDetails').val(user.firstname);
            $('#lastnameDetails').val(user.lastname);
			$('#lastModifiedByDetails').val(user.lastModifiedBy);
			$('#lastModifiedDateDetails').val(user.lastModifiedDate.substr(0,19).replace("T", " "));
		});			
		$('#detailsModal').modal();		
	});	
});