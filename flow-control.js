function basicTeenager(age) {
if (age < 13 || age > 19)
return (undefined)
if (age >= 13 || age <= 19)
return `You are a teenager!`
}

function teenager(age) {
if (age < 13 || age > 19) {return `You are not a teenager`}
else {return `You are a teenager!`}
}

function ageChecker(age) {
if (age<13) {return `You are a kid`}
if (age>19) {return `You are a grownup`}
if (age >= 13 || age <=19) {return `You are a teenager!`}
}

function ternaryTeenager(age) {
return age >= 13 && age <= 19 ? `You are a teenager` : `You are not a teenager`
}

function switchAge(age) {
  switch(age) {
    case age<=19:
      return `You are a teenager`
      break;
    case age>=13:
      return `You are a teenager`
      break;
    default:
      return `You have an age`
    }
}
