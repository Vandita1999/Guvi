$(document).ready(function(){
	var email;
	var htmldata;

	$.getJSON('php/jsondatan.json', function(data) {
		console.log(data);
		$.ajax({
			 type: "POST",
            async: false,
            url: "php/returnsession.php",
            data: {
                'mydata': "",
            },
            success: function(result) {
                console.log(result);
                result = result.trim();
                result = result.substring(1, result.length - 1);
                result = JSON.parse(result);
                 email=result.msg;
                 console.log(email);
            }
		});
		for(var i=0;i<data.length;i++){
			if(data[i].email_signup==email){
				var first=data[i].first_signup;
				var last=data[i].last_signup;
				var mobile=data[i].mobile_signup;
				var degree=data[i].degree;
				var passout=data[i].passout;
				 htmldata='<table class="table table-dark"> <thead> <tr> <th scope="col">Email</th> <th scope="col">First</th> <th scope="col">Last</th> <th scope="col">Mobile</th> <th scope="col">Degree</th> <th scope="col">Passout Year</th> </tr></thead> <tbody> <tr> <th scope="row">'+email+'</th> <td>'+first+'</td><td>'+last+'</td><td>'+mobile+'</td><td>'+degree+'</td><td>'+passout+'</td></tr></tbody></table>'
			}
			else{
				console.log(data.length);
			}
		}
		$("#res").html(htmldata)




	});

});