function validatePassword() {
  var password = document.getElementById("password").value;

  // Vérifiez le mot de passe ici
  if (password === "Annie, are you okay? Will you tell us that you're okay? There's a sound at the window Then he struck you, a crescendo, Annie He came into your apartment Left the bloodstains on the carpet And then you ran into the bedroom You were struck down It was your doom") {
    window.location.href = "preface.html";
  } else {
    alert("Mot de passe incorrect. Veuillez réessayer.");
  }
}
