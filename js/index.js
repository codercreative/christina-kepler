"use strict";

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
