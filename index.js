const toggleFormBtn = document.getElementById('toggleFormBtn');
const gistForm = document.getElementById('gistForm');
const gistList = document.getElementById('gistList');

toggleFormBtn.addEventListener('click', () => {
  gistForm.classList.toggle('hidden');
});

// Sample data for gists (Replace this with actual data from your API)
const gists = [
  { name: 'Gist 1', description: 'Description for Gist 1', content: 'Content of Gist 1' },
  { name: 'Gist 2', description: 'Description for Gist 2', content: 'Content of Gist 2' },
  { name: 'Gist 3', description: 'Description for Gist 3', content: 'Content of Gist 3' },
];

// Function to render the gists
function renderGists() {
  gistList.innerHTML = ''; // Clear the existing list

  gists.forEach((gist) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <h3>${gist.name}</h3>
      <p>${gist.description}</p>
      <pre>${gist.content}</pre>
    `;
    gistList.appendChild(li);
  });
}

// Call the function to render the gists
renderGists();
