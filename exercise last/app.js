const API_KEY = "fc17f2bd8fe3418e882180090389ac14";

const newsDiv = document.getElementById("news");
const savedDiv = document.getElementById("saved");


async function getNews(category){
  showHome();

  let cat = category === "all" ? "general" : category;
  if(cat === "politics") cat = "general";

  const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=${API_KEY}`);
  const data = await res.json();

  render(data.articles);
}


async function searchNews(){
  const q = document.getElementById("search").value;

  const res = await fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=${API_KEY}`);
  const data = await res.json();

  render(data.articles);
}


function render(articles){
  newsDiv.innerHTML = "";

  if(!articles){
    newsDiv.innerHTML = "<p>No news found</p>";
    return;
  }

  articles.forEach((a,i)=>{
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <img src="${a.urlToImage || 'https://via.placeholder.com/300'}">
      <h3>${a.title}</h3>
      <p>${a.description || ""}</p>
      <button onclick="openModal('${a.title}','${a.content || ""}')">Read</button>
      <button onclick="saveNews('${a.title}')">Save</button>
    `;

    newsDiv.appendChild(div);
  });
}


function openModal(title, content){
  document.getElementById("modal").style.display = "flex";
  document.getElementById("modalContent").innerHTML = `
    <h2>${title}</h2>
    <p>${content}</p>
    <button onclick="closeModal()">Close</button>
  `;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}


function saveNews(title){
  let saved = JSON.parse(localStorage.getItem("news")) || [];

  if(!saved.includes(title)){
    saved.push(title);
    localStorage.setItem("news", JSON.stringify(saved));
  }
}


function showSaved(){
  document.getElementById("home").classList.remove("active");
  document.getElementById("savedPage").classList.add("active");

  let saved = JSON.parse(localStorage.getItem("news")) || [];

  savedDiv.innerHTML = saved.map(n=>`
    <div class="card">
      <h3>${n}</h3>
      <button onclick="removeNews('${n}')">Remove</button>
    </div>
  `).join("");
}

function removeNews(title){
  let saved = JSON.parse(localStorage.getItem("news")) || [];
  saved = saved.filter(n=>n!==title);
  localStorage.setItem("news", JSON.stringify(saved));
  showSaved();
}


function showHome(){
  document.getElementById("home").classList.add("active");
  document.getElementById("savedPage").classList.remove("active");
}


getNews("all");