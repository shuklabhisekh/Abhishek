function submit(e){
    e.preventDefault()
    console.log("here")
    alert("Your order is accepted")


    setTimeout(function(){
        alert("your order is being cooked")
    },3000)

    setTimeout(function(){
        alert("your order is ready")
    },10000)

    setTimeout(function(){
        alert("your order is out for delivery")
    },12000)

    setTimeout(function(){
        alert("Ordered delivered")
    },15000)
}