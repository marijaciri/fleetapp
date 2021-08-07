
$('#userName').keyup(function(){			
	var userName = $('userName').val();
	
	$('status').html('<image src="username_loader.gif">');
	if(userName != '')
	{
	$post('CheckUserName.java', {userame:userName}),
	
	function(data)
	   {
	  $('status').html(data);
	  }
	
	}
	else
	{
	$('status').html('');
	
	}
});