function scuberGreetingForFeet(ride=''){
  if (ride<= 400){
    return 'This one is on me!';
  }else if (ride<= 2000 && ride>400){
    return 'That will be twenty bucks.';
  }else if (ride>2000 && ride<= 2499){
    return 'I will gladly take your thirty bucks.';
  }else if (ride>=2500){
    return 'No can do.';
  }
}  

function ternaryCheckCity(city=''){
  if( city === 'NYC') {
      return 'Ok, sounds good.'  
  } else if ( city != 'NYC')  {
    return 'No go.' 
  }
}

  function switchOnCharmFromTip(trip=''){
    if (trip === 'generous') {
      return 'Thank you so much.'
    } else if (trip === 'not as generous') {
      return 'Thank you.'
    } else if (trip === 'thanks for everything') {
      return 'Bye.'
  
}
}