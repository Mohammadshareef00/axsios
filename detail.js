async function getprodact(){
    const urlparams=new URLSearchParams(window.location.search);
    const id = urlparams.get('id');

    const response = await axios.get('https://forkify-api.herokuapp.com/api/get?rId=${id}');
    const data = await response.data;
     const recipe =data.recipe;
  
     const result = recipe.map( function(ele){
  
     return `
     <h2>${ele.title}</h2>
     <img src="${ele.image_url}"/>
     <a href="detail.html?prodact_id=${ele.recipe_id}">details</a>
     `;
             
  
     } );
     
     document.querySelector(".products").innerHTML= result;
  }
  
  
  getprodact();