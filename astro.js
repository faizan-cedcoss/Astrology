function inp()
		{
			document.getElementById("hide").style.display="block";
			var a=document.getElementById("name1").value;
			
			if(a=="")
			{
				document.getElementById("p2").innerHTML=",";
				
			}
			else{
				document.getElementById("p2").innerHTML=a+',';
				
			}
			
			localStorage.setItem("firstname",a);
			
		}
		document.getElementById('s1').innerHTML = "Hi " + localStorage.getItem("firstname") + ",<br>" ;
function cal()
{	debugger;
	document.getElementById("hide1").style.display="block";
	var a=["It is certain","It is decidedly so","Reply hazy try again","Cannot predict now","Do not count on it","My sources say no","Outlook not so good","Signs point to yes"];
	var b=Math.floor(Math.random() * 8);
	var c=a[b];
	
	var d=document.getElementById("pre").value;
	var f=document.getElementById("pre");
	
	var e=["abc","Will India win next World Cup?","Will I get the Love of my Life?","Should I get a haircut?","Is Gangadhar, Shaktiman?","Is CEDCOSS worth joining?","Will Pappu become the PM of India?"];
	
	document.getElementById("p21").innerHTML=e[d];
	document.getElementById("p31").innerHTML=a[b];
	if (f.selectedIndex>=0) {
	f.remove(f.selectedIndex);
	}
	else
	{
		alert("You have predicted all the questions");
		window.location.href="index.html";

	}
}
function nextsec()
{
	document.getElementById("upper").style.display="none";
	document.getElementById("lower").style.display="block";
}
function prevsec()
{
	alert("Goodbye, Hope to see you again");
		window.location.href="index.html";
}