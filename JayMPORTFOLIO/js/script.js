const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
    });



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');



window.onscroll = () => {
    sections.forEach(sec => { 
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};


document.addEventListener("DOMContentLoaded", function() {
    const typed = new Typed('.multiple-text', {
          strings: ['Frontend Developer', 'Biker', 'Gamer'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
      });
  });
  document.addEventListener("DOMContentLoaded", function() {
      const textElement = document.getElementById('typing-text');
      const descriptionTextElement = document.getElementById('description-text');

      const descriptionText =
          "I am Jay Magpayo, a recent graduate from Don Honorio Ventura Technological State with a specialization in Information Technology. I have a passion for frontend development and a strong foundation in programming, project management, and problem-solving. Proficient in HTML, CSS, JavaScript, and Java, I am dedicated to continuously improving my skills and staying up-to-date with industry trends. I am seeking opportunities to contribute my technical expertise, creativity, and attention to detail in a collaborative and customer-centric environment. Thank you for considering my application.";

      function typeDescriptionText() {
          let index = 0;
          const typingSpeed = 50; // Adjust the typing speed here (in milliseconds)

          function typeCharacter() {
              if (index < descriptionText.length) {
                  descriptionTextElement.textContent += descriptionText.charAt(index);
                  index++;
                  setTimeout(typeCharacter, typingSpeed);
              } else {
                  descriptionTextElement.textContent = descriptionText;
              }
          }

          setTimeout(typeCharacter, 1000); // Adjust the delay before starting typing (in milliseconds)
      }

      typeDescriptionText();

      const typed = new Typed('.multiple-text', {
          strings: ['Frontend Developer', 'Biker', 'Gamer'],
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 1000,
          loop: true
      });
  });


