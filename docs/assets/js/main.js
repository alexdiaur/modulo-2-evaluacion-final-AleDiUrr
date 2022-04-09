"use strict";const buttonSearch=document.querySelector(".js-search-btn"),cocktailInput=document.querySelector(".js-cocktail-input"),list=document.querySelector(".js-favs-list");let drinks=[];function handleClickResults(t){console.log(t.currentTarget.id)}function listenerliResults(){const t=document.querySelectorAll(".js-result");for(const e of t)e.addEventListener("click",handleClickResults)}function renderDrinkList(t){let e="";for(let t=0;t<drinks.length;t++){const n=drinks[t];e+=`<li class="result_item_list js-result" id=${n.id}>`,e+=`<img src=${n.img} width=200px >`,e+=`<h2>${n.name} </h2>`,e+="</li>"}list.innerHTML=e,listenerliResults()}function dataFromApi(){const t=cocktailInput.value;fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+t).then(t=>t.json()).then(t=>{drinks=t.drinks.map(t=>({id:t.idDrink,name:t.strDrink,img:t.strDrinkThumb})),renderDrinkList()})}function handleClicKSearchDrink(t){t.preventDefault(),dataFromApi()}buttonSearch.addEventListener("click",handleClicKSearchDrink);