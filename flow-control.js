function basicTeenager(age)
{
  if(age >= 13 && age <= 19)
  {
  return(`You are a teenager!`)
}
}

function teenager(age)
{
  if(age >= 13 && age <= 19)
  {
  return(`You are a teenager!`)
}
else {
  return (`You are not a teenager`)

}
}

function ageChecker(age)
 {
  if(age >= 13 && age <= 19)
  {
  return true
}
return false 
}
ageChecker('You are a teenager')


function ternaryTeenager(age)
 {
return(`You are not a teenager`)

  if (age >= 13 && age <= 19)
  {
  return(`You are a teenager`)
}

}

function switchAge(age)
 {
   switch(age) {
     case age <=19 && age >= 13:
      return "You are a teenager"
      default :
      return "You have an age";
      break;


}
}
