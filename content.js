const socket = new WebSocket("wss://promocatcher.onrender.com/");
 
socket.addEventListener("message", function (event) {
    const {type, text} = JSON.parse(event.data);
    if(type==="coupon"){
      const caseBattleCoupon = document.querySelector(".block__coupon").querySelector("input");  
      const button = document.querySelector(".block__coupon").querySelector("button");  

      if (caseBattleCoupon  && button) {
         caseBattleCoupon.value = text;
        
        // setTimeout(()=>{
        //   button.click();
        // }, 1000)
        
      }
    }else if(type==="promo"){
    
      const dinoPromo = document.querySelector("input.NewPromoInput_input__ljgpW");
  
      const button = document.querySelector("button.NewPromoInput_acceptBtn__gVjBs");  
  
    if (dinoPromo && button) {
      dinoPromo.value = text;
 
 

      setTimeout(()=>{
        button.click();
      }, 150)
    }
  }

});
