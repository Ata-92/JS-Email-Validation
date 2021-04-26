function validEmail(email) {
  if (parseInt(email[0]) != email[0] && email.includes("@") && email.split(".").length === 2 && (email.split(".")[1].length === 3 || email.split(".")[1].length === 2)) {
    alert(`Your email ${email} is valid`);
    return true;
  } else {
    alert(`Your email ${email} is invalid. Please try again`);
    return false;
  }
}

const myEmail = prompt("Please enter your email : ");
console.log(validEmail(myEmail));
