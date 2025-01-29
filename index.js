function scuberGreetingForFeet(someValue) {
let result;
if (someValue <= 400) {
  someValue = 199;
  result = 'This one is on me!';
  return result; 
}
else if (someValue >= 400 && someValue <= 2000){
someValue = 1500;
result = 'That will be twenty bucks.';
return result;
}
else if (someValue > 2000 && someValue < 2500){
someValue = 2001;
result = 'I will gladly take your thirty bucks.';
return result;
}
else if (someValue > 2500){
someValue = 2501;
result = 'No can do.';
return result;
}
}
  


function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}


  function switchOnCharmFromTip(tip) {
    switch (tip) {
      case tip = "generous":
        return "Thank you so much.";
      case tip = "not as generous":
        return "Thank you.";
      case tip = "thanks for everything":
        return "Bye.";
      default:
        return "No response.";
    }
  }