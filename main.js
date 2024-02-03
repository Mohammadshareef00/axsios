 

 
async function getprodact(){


  const response = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
  const data = await response.data;
   const recipes =data.recipes;

   const result = recipes.map( function(ele){

   return `
   <h2>${ele.title}</h2>
   <img src="${ele.image_url}"/>
   <a href="detail.html?prodact_id=${ele.recipe_id}">details</a>
   `;
           

   } );
   
   document.querySelector(".products").innerHTML= result;
}


getprodact();
 