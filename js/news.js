document.getElementById('search-btn').addEventListener('click',function(){
  const searchInput =document.getElementById('search-input');
  // const searchInputValue = searchInput.value;
  newsField (searchInput.value)
})

const newsField = async (name) =>{
    const url =`https://newsapi.org/v2/everything?q=apple&from=2022-09-04&to=2022-09-04&sortBy=${name}&apiKey=71d68dcabac3451bbbf10ad000f7a8b9`
    const res = await fetch (url)
    const data = await res.json()
    displayNews(data.articles);
}

document.getElementById('search-input').addEventListener('keypress',function(even){
    if(even.key === "Enter"){
      
      const btn =document.getElementById('search-btn').click()
    }
})

const displayNews =(newses) =>{
    // console.log(news);
    
    
    const cardDisplay =document.getElementById('card-display');
    cardDisplay.textContent='';
    newses.forEach(news => {
      const foundedMsg =document.getElementById('founded-msg');
      foundedMsg.innerText=newses.length;
      // console.log(news);
      const {source,author,title,description,url,urlToImage,publishedAt,content} = news;
      
      const {id,name} = source;
      // console.log(content);
      

      const createBtn =document.createElement('button');
      createBtn.classList.add('btn','btn-outline-primary')
      createBtn.setAttribute('data-bs-toggle','modal')
      createBtn.setAttribute('data-bs-target','#staticBackdrop')




      createBtn.innerText='Show More'
      createBtn.addEventListener('click',function(){
        readAll(news)
      })
           
        const cardDisplayDiv =document.createElement('div')       
        cardDisplayDiv.classList.add('card','mb-3');
        cardDisplayDiv.innerHTML=`
        <div class="row g-3">
        <div class="col-md-4">
          <img src="${urlToImage}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title mb-2">${title}</h3>
            <p class="card-text">${description.length > 200 ? description.slice(0,200)+ '...' : description}</p>
           <div class="d-flex justify-content-between">
                <p class="card-text">Author Name: ${author.length > 50 ? author.slice(0,50) + "..." : author}</p>
                <p class="card-text"><small class="text-muted">Published Date: ${publishedAt}</small></p>
                </div>
                </div>
                </div>
                </div>
                `;
                cardDisplayDiv.appendChild(createBtn);

        cardDisplay.appendChild(cardDisplayDiv);
    });
}

              //   <button onclick='readAll("${title}")' type="submit" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              //         Read Full
              //  </button> 



// modal 

const readAll=(modals)=>{
  console.log(modals);
  const {content,title,urlToImage} =modals;

  const modal = document.getElementById('modal');
  modal.innerHTML=`
  <img  class="p-4" src="${urlToImage}" alt="">
  <div class="modal-header">
      
        <h5 class="modal-title" id="staticBackdropLabel">${title}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">${content}</div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Understood</button>
      </div>
  `;

}
newsField();

// newsField()