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
			
		}
function cal()
{	debugger;
	document.getElementById("hide").style.display="block";
	var a=["It is certain","It is decidedly so","Reply hazy try again","Cannot predict now","Do not count on it","My sources say no","Outlook not so good","Signs point to yes"];
	var b=Math.floor(Math.random() * 8);
	var c=a[b];
	
	var d=document.getElementById("pre").value;
	
	var e=["abc","Will Pappu become the PM of India?","Will I get the Love of my Life?","Will I slap you?","Will you become famous?","Is CEDCOSS worth joining?"];
	
	document.getElementById("p2").innerHTML=e[d];
	document.getElementById("p3").innerHTML=a[b];
	e.remove(e.selectedIndex);
}