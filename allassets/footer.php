<?php
   $quot = rand(1,9);
   switch ($quot) {
       case "1":
           $result = ' May be its mine bad-luck<br>Or yours not to get me <br>But I still have hope <br>Of being yours';
           break;
       case "2":
           $result = ' If you know that I am genius <br>Then know that you made me genius <br>Everyone don\'t accept me as genius <br>Because they aren\'t genius to belief me as genius';
           break;
       case "3":
           $result = ' Life for me is just a result of experiments being performed by far more developed creatures.';
           break;
   		case "4":
   		$result = ' Dream big! But not so big that it becomes a mess, and you may never reach reality.';
   break;
       case "5":
           $result = ' Dreaming of getting you <br>I loosed everything <br>Cheerfulness of smile <br>And all the dreams of life';
           break;
   		    case "6":
           $result = ' Give me another Chance <br>Then, You will Get <br> Less than I Gain...';
           break;
   		    case "7":
           $result = ' When I was small I felt like a Superhero as my father threw me up in the air.<br>Now after reaching this success peak I unmask - Real Superhero made me Superhero!';
           break;
   		    case "8":
           $result = ' Congratulations to your mom and dad for birth of a sweet child!<br>Sorry that I couldn\'t wish them when you were born.';
           break;
		    case "9":
           $result = ' I will miss you not because you taught me,<br>not because you helped me on all steps of education;<br>but only because you made me a leader to lead as an perfect Electrical Engineer.';
           break;
       default:
           $result = ' How come you reach here?';
   }
   
       echo '<footer><a class="white-text" style="text-align:center" href="https://www.goodreads.com/author/quotes/7394609.Hasil_Paudyal" target="_blank"><center>'."$result".'</center></a></footer>'
   ?>