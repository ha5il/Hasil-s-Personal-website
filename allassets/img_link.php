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
case "6":
return "https://i.imgur.com/TW7rOEp.jpg";
break;
case "7":
return "https://i.imgur.com/MBr9wWr.jpg";
break;
case "8":
return "https://i.imgur.com/Mm7u1pp.jpg";
break;
case "9":
return "https://i.imgur.com/oJSKrd4.jpg";
break;
case "10":
return "https://i.imgur.com/AUjKZlX.jpg";
	}
}	

$num[1]=rand(1,10);
for ($i=2;$i<=10;$i++)
{
	$num[$i]=$num[$i-1]+1;
	if (($num[$i])==11)
	$num[$i]=1;

}
for ($i=1;$i<=10;$i++)
$rand_link[$i]=getlink($num[$i]);
shuffle ($rand_link);
?>