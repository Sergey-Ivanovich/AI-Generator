function displayAnswer(response) {
  let aiResponse = response.data.answer;

  new Typewriter(answerShown, {
    strings: aiResponse,
    autoStart: true,
    delay: 1,
    cursor: ` `,
  });
}

function handleForm(event) {
  event.preventDefault();

  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let apiContext = `You are an exceptionally smart travel agent who loves helping people to find their dream travel destination, they will give you a few prompt words or sentences, and you present the top 3 best destinations in the world based on the prompt given, give each answer/destination as a <ul><li>answer</li></ul> in html format, with a dash off the name of the location and a short sentence explaining why, and make the destination bold, using a strong, and add a new line between each destination, if the user inpts a question, reply to it in a polite ans short but concise and enthusiastic way, dont ask question, as the user cannot reply`;
  let apiPrompt = userPrompt.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);

  new Typewriter(answerShown, {
    strings: [
      `Generating a Response based on "${userPrompt.value}"`,
      `.`,
      `..`,
      `...`,
    ],
    autoStart: true,
    delay: 1,
    cursor: ` `,
  });
}

let answerShown = document.querySelector("#reply-box");
let formElement = document.querySelector("#form");
formElement.addEventListener("submit", handleForm);
