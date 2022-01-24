getDishes()


let arr=JSON.parse(localStorage.getItem("order"))||[]
// document.getElementById("#total").textContent=arr.length

async function getDishes(){
    try{
        let url="https://www.themealdb.com/api/json/v1/1/search.php?s"
    let response = await fetch(url)
    let data= await response.json()
    console.log(data.meals)
    showDishes(data.meals)
    }
   catch(error){
       console.log(error)
   }
}

function showDishes(data){
    document.getElementById("itemsInCart").textContent=arr.length

    var getDishes=document.getElementById("getDishes")
        getDishes.textContent=""
    data.map(function(elem){
       
        var box0=document.createElement("div")
        var img=document.createElement("img")
        img.src= elem.strMealThumb
        var price=document.createElement("h5")
        price.textContent="Rs : "+Math.floor(Math.random()*(500-100)+100)
        var button=document.createElement("button")
        button.textContent="Add to cart"
        button.addEventListener("click",function(){
            storeOrder(elem)
        })
        box0.append(img,price,button)
        getDishes.append(box0)
        

    })
   }

function storeOrder(elem){
    // document.getElementById("itemsInCart").textContent=arr.length
arr.push(elem)
localStorage.setItem("order",JSON.stringify(arr))
getDishes()
console.log(elem)
}