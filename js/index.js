//Day, Month & Year
   let now = new Date().toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric", year:"numeric"});
   document.querySelector('.day').innerHTML = now;
   
   //Time
   let time = document.querySelector('.time') 
   let hr = document.querySelector('.hours')
   let mn = document.querySelector('.minutes')
   let sc = document.querySelector('.seconds')

   function update() {
       let time = new Date();
       let h = time.getHours();
       let m = time.getMinutes();
       let s = time.getSeconds();

       hr.innerHTML = h<10?"0"+h:h;
       mn.innerHTML = m<10?"0"+m:m;
       sc.innerHTML = s<10?"0"+s:s;
   }
   setInterval(update, 500);

   function alarm(){
    
   }
   setInterval(alarm,500);