const toggleFormBtn = document.getElementById('toggleFormBtn');
const snippetForm = document.getElementById('snippetForm');
const snippetList = document.getElementById('snippetList');
const searchInput = document.getElementById('search');
const searchForm = document.getElementById('search-form');
let snippets =''

toggleFormBtn.addEventListener('click', () => {
  snippetForm.classList.toggle('hidden');
});

fetch('http://localhost:3000/snippets')
.then(resp=>resp.json())
.then(data=>{
  snippets=data;
  renderSnippets(data);
  
})

snippetForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  fetch('http://localhost:3000/snippets',{
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      title: e.target.snippetTitle.value,
      description: e.target.snippetDescription.value,
      code: e.target.snippetCode.value,
      language: e.target.snippetLanguage.value,
      tags: [...(e.target.test).options].filter(option => option.selected).map(option => option.value)
    })
  })
  .then(response=>response.json())
  .then(((data)=>
    
    {renderSnippet(data);
      snippetForm.classList.toggle('hidden');
    }))
})

// Function to render the All Snippets
function renderSnippets(snippets) {
  snippets.forEach((snippet) => {
    renderSnippet(snippet)
  });
}

// Function to render the snippet
function renderSnippet(snippet){

  const li = document.createElement('li');

  const header = document.createElement('h3');
  header.innerHTML = `${snippet.title}`;
  li.append(header);

  const description = document.createElement('p');
  description.innerHTML = `${snippet.description}`;
  li.append(description);

  const code = document.createElement('code');
  code.innerHTML = `${snippet.code}`;
  code.contentEditable = "true";
  code.spellcheck = "false";
  li.append(code);

  const p = document.createElement('p');
  li.append(p);
  
  snippet.tags.forEach((tag)=>{
    const span = document.createElement('span');
    span.className = "span";
    span.innerHTML = `${tag}`;
    li.append(span);
  })
  
  const span2 = document.createElement('span');
  span2.innerHTML = '     ';
  li.append(span2);

  const span3 = document.createElement('span');
  span3.className = "span";
  span3.innerHTML = `${snippet.language}`;
  li.append(span3);
  
  const likeButton = document.createElement('button');
  likeButton.className = "likeButton";
  
  likeButton.innerHTML ="🤍"
  likeButton.addEventListener('click',()=>{
    console.log("clicked")
    if(likeButton.innerHTML ==="🤍"){
      console.log("empty")
      likeButton.innerHTML="❤️";
    }
    else{
      console.log("filled")
      likeButton.innerHTML ="🤍";
    }
    
  })
  li.append(likeButton)
  
  snippetList.appendChild(li);
  snippetForm.reset() //reset form 
   

}

//Search functionality
searchInput.addEventListener("input", (e) => {
  filteredSnippets = snippets.filter((snippet)=> snippet.tags.map(tag=>tag.toLowerCase()).includes(e.target.value.toLowerCase()))
  snippetList.innerHTML=''
  renderSnippets(filteredSnippets)
})



