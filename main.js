//--------------------Start navbar background ---------------------------
let backgroundimg = document.querySelector('.contain-nav');
if(backgroundimg != null){ // this part of code run whith home-page and about-page only
    arrimg = ['1.jpeg','1.jpg','hero_2.jpg'];
setInterval(() => {
    var randombackground = Math.floor(Math.random()*arrimg.length);
    backgroundimg.style.background = 'url("images/'+ arrimg[randombackground] +'")';
}, 10000);
}
else{
    
}
// ----------------------------------------- End navbar background------------------------------------
// -----------------------------------------Start contact us----------------------------------------
let contactus = document.querySelectorAll('.registration .bg-transparent');
let submitButton = document.querySelector('#submitButton');
let error = document.querySelector('.registration .error');
contactus.forEach(e => { 
    e.style.border = 'none';          
    e.style.borderBottom = '2px solid #C27DFC';
}); 
submitButton.addEventListener('click',function(event){
    contactus.forEach(e => {                        
        if(e.value.trim() === ''){
            event.preventDefault();
            e.style.borderBottom = '2px solid red';  
            error.innerHTML = 'plase fill in the fields' ;
        
    
        }
        else{
            
            
        }
    
        
    });

    

});
let myString = "AaBbcdefG123!234%^&*";
let atozall = /[A-Z1-5]/;
console.log(myString.match(atozall));

