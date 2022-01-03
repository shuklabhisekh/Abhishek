arr=JSON.parse(localStorage.getItem("order"))
console.log(arr)
displayOrder(arr)

function displayOrder(arr){
    var show= document.getElementById("show")
    show.textContent=""
arr.map(function(elem,index){
   var value=document.getElementById("value")
//    var sum= sum+price
//    value.textContent=sum

   var box0=document.createElement("div")
   var img=document.createElement("img")
   img.src= elem.strMealThumb
   var price=document.createElement("h5")
   price.textContent="Rs : "+Math.floor(Math.random()*(500-100)+100)
   var button=document.createElement("button")
   button.textContent="Remove from cart"
   button.addEventListener("click",function(){
       removeOrder(index)
   })
   box0.append(img,price,button)
   show.append(box0)
})
//    displayOrder(arr)
}


function removeOrder(index){
   arr.splice(index,1)
   displayOrder(arr)
   localStorage.setItem("order",JSON.stringify(arr))
  
}