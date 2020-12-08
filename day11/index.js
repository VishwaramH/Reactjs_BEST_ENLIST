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

document.getElementsByTagName("p")[0].style.backgroundColor = "black";
document.getElementsByTagName("p")[0].style.color = "white";