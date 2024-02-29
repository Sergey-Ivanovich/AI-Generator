function handleForm(event) {
  event.preventDefault();

  let answerShown = document.querySelector("#reply-box");

  new Typewriter(answerShown, {
    strings: `hello turkey is pretty cool i think`,
    autoStart: true,
    delay: 1,
    cursor: ` `,
  });
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", handleForm);
