function getName() {
  const firstName = document.getElementById("firstname").value.trim();
  const lastName = document.getElementById("lastname").value.trim();

  if(firstName === "" || lastName === "") {
    return null;
  }
  else {
    document.write(`${firstName} ${lastName}`);
  }
}

document.body.style.backgroundColor = "black";
document.body.style.color = "white";
