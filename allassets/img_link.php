<?php 

function getlink ($id)
{switch ($id)
	{
case "1":
return "https://i.imgur.com/cXC5BgQ.jpg";
break;
case "2":
return "https://i.imgur.com/1J21zYk.jpg";
break;
case "3":
return "https://i.imgur.com/jLbIGOR.jpg";
break;
case "4":
return "https://i.imgur.com/wpDzVMO.jpg";
break;
case "5":
return "https://i.imgur.com/vwSDoRH.jpg";
break;
	}
}	

$num[1]=rand(1,5);
for ($i=2;$i<=5;$i++)
{
	$num[$i]=$num[$i-1]+1;
	if (($num[$i])==6)
	$num[$i]=1;

}
for ($i=1;$i<=5;$i++)
$rand_link[$i]=getlink($num[$i]);

?>