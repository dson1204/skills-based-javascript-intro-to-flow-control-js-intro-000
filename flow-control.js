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
    case "13 || 14 || 15 || 16 || 17 || 18 || 19"
    default:
      return `You are a teenager`
}
