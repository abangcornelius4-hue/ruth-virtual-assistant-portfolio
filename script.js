let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x")
    navbar.classList.toggle("active");
}

let contactForm = document.querySelector("#contact-form");

contactForm.onsubmit = (event) => {
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let subject = document.querySelector("#subject").value;
    let message = document.querySelector("#message").value;

    let whatsappMessage = `Hello Ruth,

    Name: ${name}
    Email: ${email}
    Phone: ${phone}
    Subject:${subject}

    Message: ${message}`;
      
      let whatsappLink = `https://wa.me/2347071127234?text=${encodeURIComponent(whatsappMessage)}`;

      window.open(whatsappLink, "_blank");

}