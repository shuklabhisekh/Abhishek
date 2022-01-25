arr=JSON.parse(localStorage.getItem("order"))
displayOrder(arr)


function displayOrder(arr){
   if(arr.length==0){
      window.location.href="menu.html"
   }
    var show= document.getElementById("show")
    show.textContent=""
    var  sum = 0
arr.map(function(elem,index){
   var value1 =document.getElementById("value")
   

   var box0=document.createElement("div")
   var img=document.createElement("img")
   img.src= elem.strMealThumb
   var price=document.createElement("h5")
   let a = Math.floor(Math.random()*(500-100)+100)
   price.textContent="Rs : "+ a
   
   sum= sum +a
   
   value1.textContent="Total Price : "+ sum

   var button=document.createElement("button")
   button.textContent="Remove from cart"
   button.addEventListener("click",function(){
       removeOrder(index)
   })
   box0.append(img,price,button)
   show.append(box0)
})

}


function removeOrder(index){
   arr.splice(index,1)
   displayOrder(arr)
   localStorage.setItem("order",JSON.stringify(arr))
  
}