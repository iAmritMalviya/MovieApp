let title = "the terminator"
let search = document.getElementById('search');


search.addEventListener('click', ()=>
{
    let input = document.getElementById('movieInput').value;
    let api = `https://www.omdbapi.com/?t=${input}&apikey=2803ea14`;
  fetch(api)
  .then(response => response.json())
  .then(data => {
    show(data);     
    console.log(data)
})
})

function show(data) {
    let card = document.getElementById('card');
    let html;

    let t = data.Runtime;
    t = t.split(' ');
    t= t[0];
   let time = convertMinsToHrsMins(t);  
   
    
  
    html = `  <div class="movie_card" id="ave">
    <div class="info_section">
      <div class="movie_header">
        <img class="locandina" src="${data.Poster}"/>
        <h1>${data.Title}</h1>
        <h4>${data.Year}, ${data.Director}</h4>
        <span class="minutes">${time}</span>
        <span class="minutes">${data.Rated}</span>
        <p class="type">${data.Genre}</p>
      </div>
      <div class="movie_desc">
        <p class="text">
        ${data.Plot}<a href="https://www.imdb.com/title/${data.imdbID}/" target="_blank">Read More</a>
        </p>
      </div>
      <div class="movie_social">
        <ul>
          <li><i class="material-icons">share</i></li>
          <li><i class="material-icons"></i></li>
          <li><i class="material-icons">thumb_up</i></li>
          <li>${data.Metascore} Metascore</li>
          <li><i class="material-icons">star</i>${data.imdbRating}/10 | ${data.imdbVotes}</li>
        </ul>
      </div>
    </div>
    <div class="blur_back ave_back"></div>
  </div>`
    
       
    card.innerHTML = html;
}

function convertMinsToHrsMins(time){
    let h = Math.floor(time / 60);
    let m =  (time % 60);

    h = h < 10 ? '0' + h : h; // (or alternatively) h = String(h).padStart(2, '0')
    m = m < 10 ? '0' + m : m; // (or alternatively) m = String(m).padStart(2, '0')
    
    return `${h}h:${m}min`;
  }