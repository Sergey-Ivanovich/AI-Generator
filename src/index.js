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

  answerShown.classList.remove("hidden");
  let userPrompt = document.querySelector("#user-prompt");
  let apiKey = `oe3107c03bbf1b061844a8c3d518t9b3`;
  let apiContext = `you are an experienced travel agent, and is
   ready to help when a user inputs anything related to travelling,
    whether that would be a question, asking for suggestions, or just
     inputing prompt words, always stay on topic and give you answers
      in a bullet point html format utilizing different elements like 
      <strong> where necessary, do your best to give a full response 
      even if just a single word has been inputted, use these as prompts, 
      always try to relate things to giving an answer as locations for 
      a vacation, REMEMBER, ALWAYS, try to give your answer a 3 separate
      locations in the prestated bullet point format 
      as an  easter egg, tell the user a funny joke about eggs when he asks "tell me a yoke"`;
  let apiPrompt = userPrompt.value;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  axios.get(apiUrl).then(displayAnswer);

  answerShown.innerHTML = `⏳ <span class="generating">  Generating a Response based on "${userPrompt.value}" </span>`;
}

let answerShown = document.querySelector("#reply-box");
let formElement = document.querySelector("#form");
formElement.addEventListener("submit", handleForm);
