function validEmail(email) {
  if (parseInt(email[0]) != email[0] && email.split("@").length === 2 && email.split("@")[1].split(".").every(i => i.split("").every(j => j.toLocaleLowerCase() != j.toLocaleUpperCase())) && email.split(".").length === 2 && (email.split(".").some(i => i.length === 2 || i.length === 3))) {
    alert(`Your email ${email} is valid`);
    return true;
  } else {
    alert(`Your email ${email} is invalid. Please try again`);
    return false;
  }
}

const myEmail = prompt("Please enter your email : ");
console.log(validEmail(myEmail));
