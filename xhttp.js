function abc()
		{
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function()
			{
							
				if (this.readyState == 4 && this.status == 200)
				{
					console.log("jhhjbl");
					console.log(JSON.parse(this.responseText));
					var data = JSON.parse(this.responseText);
					var edu = data.edu_qual;
					var proj = data.projects;
					var skill = data.skills;
					var education= " " ;
					for (var i = 0; i<data.edu_qual.length; i++) 
					{
						education +="<h4><strong>";
						education += edu[i].Location;
						education += "</strong></h4><h6>";
						education += edu[i].Board + ".....[";
						education += edu[i].year_span + "]";
						education += ")<br>";
						education += edu[i].contento;
						education += "<br><br></h6>";	
					}
					
					var projects= " " ;
					for (var i = 0; i<data.projects.length; i++)
					{
						projects += "<h4><strong>";
						projects +=	proj[i].title_;		
						projects += "</strong></h4><h6>";
						projects += proj[i].description;
						projects += "</h6>";
						
					}

					var skills = "<ul><h6>"
					for (var i = 0; i<data.skills.length; i++)
					{
						skills += "<li>" + skill[i].langs + " :: " + skill[i].level + "</li>";						
					}
					skills += "</h6></ul>";										

					document.getElementById("name_").innerHTML = data.name_;
					document.getElementById("about_me").innerHTML = data.about_me;
					document.getElementById("profile_pic").src = data.profile_pic;
					document.getElementById("edu_qual").innerHTML = education;
					document.getElementById("skills").innerHTML = skills;
					document.getElementById("email").innerHTML = data.email;
					document.getElementById("other_email").innerHTML = data.other_email;
					document.getElementById("contact").innerHTML = data.contact;
					document.getElementById("hobbies").innerHTML = data.hobbies;
					document.getElementById("projects").innerHTML = projects;
				}
			}
			xhttp.open("GET","https://gist.githubusercontent.com/AniDas10/612ac43458b98062380f6f0490f154a6/raw/764e65d51659609f6f10c6256e1c03df308294b2/Resume_contents.json",true);
			xhttp.send();
		}
window.onload = abc;