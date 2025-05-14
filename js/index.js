"use strict";

// ===== PROJECTS SECTION =====
// Error Modal for projects section
const closeModal = document.getElementById("closeModal");
const errorModal = document.getElementById("errorModal");

closeModal.addEventListener("click", () => {
  errorModal.classList.add("hidden-modal");
});
// end errorModal

const projectSection = document.getElementById("projects");
const projectList = projectSection.querySelector("ul");

function fetchGithubProjects() {
  fetch("https://api.github.com/users/codercreative/repos")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((repositories) => {
      for (let i = 0; i < repositories.length; i++) {
        if (
          repositories[i].name === "codercreative" ||
          repositories[i].name === "christina-kepler" ||
          repositories[i].name === "github-repo-gallery"
        ) {
          //don't display
          //1. codercreative needs to stay public in GitHub as it is my intro on my Github acount page
          //2. No need to display my portfolio christina-kepler within my portfolio
          //3. I want to keep github-repo-gallery public, but I don't want to display it in my portfolio
          continue;
        } else {
          const project = document.createElement("li");
          project.classList.add("project-li");
          const link = document.createElement("a");
          link.href = repositories[i].html_url;
          link.innerText = repositories[i].name;
          project.appendChild(link);
          projectList.appendChild(project);
        }
      }
    })
    .catch((error) => {
      console.log(error);
      // adding error modal
      errorModal.classList.remove("hidden-modal");
    });
}

fetchGithubProjects();

// ===== SKILLS SECTION =====

// 1. STORING MY SKILLS IN AN ARRAY
const skills = ["HTML", "CSS", "JavaScript", "Git/GitHub", "Figma"];

// 2. CREATING VARIABLES FOR THE SKILLS ELEMENT AND THE UL ELEMENT
const skillsSection = document.getElementById("skills");
const skillsList = skillsSection.querySelector("ul");

// 3. LOOPING THROUGH THE SKILLS ARRAY TO CREATE LI ELEMENTS
for (let i = 0; i < skills.length; i++) {
  // Creating an li element
  const skill = document.createElement("li");
  // Each skill is added to the li element
  skill.innerText += skills[i];
  // Appending the li to the ul and displaying in browser
  skillsList.appendChild(skill);
}

// ===== MESSAGE SECTION =====
const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", (event) => {
  // Prevents automatic form submission and page reload so the form can be handled with custom code inside the event listener’s callback function.
  event.preventDefault();

  // Getting user's name, email and message values
  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  // Selecting the ul inside the messages section to display messages
  const messagesSection = document.getElementById("messages");
  const messageList = messagesSection.querySelector("ul");
  messageList.classList.add("message-ul");

  // Creating an li element for the user's message
  const newMessage = document.createElement("li");
  newMessage.classList.add("user-msg-li");
  newMessage.innerHTML = `
  <div class="user-info">
    <a class="user-email" href="mailto:${usersEmail}">${usersName}</a>
    <span class="user-msg" >${usersMessage}</span>
  </div>
  `;

  // Creating the remove button for the messages section
  const removeButton = document.createElement("button");
  removeButton.setAttribute("type", "button");
  removeButton.innerText = "Remove";
  removeButton.classList.add("remove-btn");

  // Appending the remove button to the message li
  newMessage.appendChild(removeButton);

  messagesSection.classList.remove("hidden");

  messageList.appendChild(newMessage);

  // Remove the message (entry) when clicking on the remove button
  removeButton.addEventListener("click", () => {
    const entry = removeButton.parentNode;
    entry.remove();

    //if no <li> elements remain within the <ul> element, the messagesSection (i.e. the "Messages" section title) will be hidden
    if (messageList.children.length === 0) {
      messagesSection.classList.add("hidden");
    }
  });
  // Clearing the form so default placeholders appear again
  messageForm.reset();
});

// ===== FOOTER SECTION =====
// 1. CREATING THE FOOTER AND P TAGS
const footer = document.createElement("footer");
const copyright = document.createElement("p");

// 2. APPENDING THE FOOTER TO BODY ElEMENT AND THE COPYRIGHT P ELEMENT TO THE FOOTER
document.body.appendChild(footer);
footer.appendChild(copyright);

// 3. CREATING A YEAR VARIABLE (SO THAT THE YEAR WILL UPDATE DYNAMICALLY EVERY YEAR)
const today = new Date();
const thisYear = today.getFullYear();

// 4. DISPLAYING THE COPYRIGHT UNICODE, MY NAME AND CURRENT YEAR IN THE BROWSER
copyright.textContent = `\u00A9 Christina Ligare ${thisYear}`;
