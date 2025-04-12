const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameText = document.getElementById("form_name").value.trim();
    const messageText = document.getElementById("form_message").value.trim();
    const fromMail = document.getElementById("form_email").value.trim();
    const phoneText = document.getElementById("form_phone").value.trim();
    const purposeText = document.getElementById("form_purpose").value.trim();

    // Validación JavaScript (además de la validación HTML5)
    if (!nameText || !messageText || !fromMail) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromMail)) {
        alert("Por favor, ingrese un email válido.");
        return;
    }

    const mail = "heberduarteryr@gmail.com";
    const purpose = encodeURIComponent("Mensaje de " + purposeText);
    const message = encodeURIComponent(messageText);
    const name = encodeURIComponent("Hola, mi nombre es: " + nameText);
    const from_email = encodeURIComponent("Mi correo es: " + fromMail);
    const phone = encodeURIComponent("Mi numero de telefono es: " + phoneText);

    const mailto = `mailTo:${mail}?subject=${purpose}&body=${name}\n${phone}\n${from_email}\n\n${message}`;
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.setAttribute('href', mailto);
    a.click();
});

//   Controla la altura del textarea
  const textarea = document.getElementById("form_message");
  textarea.addEventListener("input", () => textarea.style.height = textarea.scrollHeight + "px");