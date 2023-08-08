const toggleFormBtn = document.getElementById('toggleFormBtn');
const gistForm = document.getElementById('gistForm');
const gistList = document.getElementById('gistList');

  toggleFormBtn.addEventListener('click', () => {
    gistForm.classList.toggle('hidden');
  });



fetch('http://localhost:3000/snippets')
.then(resp=>resp.json())
.then(snippets=>renderGists(snippets))

gistForm.addEventListener('submit', (e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/snippets',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      title: e.target.gistTitle.value,
      description: e.target.gistDescription.value,
      code: e.target.gistCode.value,
      language: e.target.gistLanguage.value,
      tags: ["javascript", "math"]
    })
  })
  .then(response=>response.json())
  .then(((data)=>
    
    {renderGist(data);
      
      gistForm.classList.toggle('hidden');
    }))
})

// Function to render the gists
function renderGists(gists) {
  //gistList.innerHTML = ''; // Clear the existing list

  gists.forEach((gist) => {
    renderGist(gist)
  });
}

function renderGist(gist){

  const li = document.createElement('li');

  const header = document.createElement('h3')
  header.innerHTML = `${gist.title}`
  li.append(header)

  const description = document.createElement('p')
  description.innerHTML = `${gist.description}`
  li.append(description)

  const code = document.createElement('code')
  code.innerHTML = `${gist.code}`
  code.contentEditable = "true"
  code.spellcheck = "false"
  li.append(code)

  const p = document.createElement('p')
  li.append(p)
  
  gist.tags.forEach((tag)=>{
    const span = document.createElement('span')
    span.className = "span"
    span.innerHTML = `${tag}`
    li.append(span)
  })
  
  const span2 = document.createElement('span')
  span2.innerHTML = '     '
  li.append(span2)

  const span3 = document.createElement('span')
  span3.className = "span"
  span3.innerHTML = `${gist.language}`
  li.append(span3)
  
  
  gistList.appendChild(li);
  gistForm.reset()
   

}

