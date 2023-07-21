const toggleFormBtn = document.getElementById('toggleFormBtn');
const gistForm = document.getElementById('gistForm');
const gistList = document.getElementById('gistList');

toggleFormBtn.addEventListener('click', () => {
  gistForm.classList.toggle('hidden');
});

fetch('http://localhost:3000/snippets')
.then(resp=>resp.json())
.then(snippets=>renderGists(snippets))

// Function to render the gists
function renderGists(gists) {
  gistList.innerHTML = ''; // Clear the existing list

  gists.forEach((gist) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${gist.title}</h3>
      <p>${gist.description}</p>
      <code contenteditable="true" spellcheck="false">${gist.code}</code>
      <p></p>
      <span style="
        background-color: #D9A21B;
        width: auto;
        border: 1px solid black;
        padding: 0.5px;
        "
      >${gist.tags}</span>
      
      <span style="
        background-color: #D9A21B;
        width: auto;
        border: 1px solid black;
        padding: 0.5px;
        "
      >${gist.language}</span>
    `;

    gistList.appendChild(li);
  });
}

// Call the function to render the gists
// renderGists();
//#E1F1FF
//#7CACF9
//#4078C0
//#D9A21B