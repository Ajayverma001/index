const people = [
    {
      name: "kaluu",
      profileImage: "https://images.unsplash.com/photo-1512484580809-b5251c5df9dd?q=80&w=1977&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1529040181623-e04ebc611e25?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "22 min"
    },
    {
      name: "Sumit",
      profileImage: "https://images.unsplash.com/photo-1543342578-b01e1755cc6b?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1535241749838-299277b6305f?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "8 hour"
    },
    {
      name: "rony",
      profileImage: "https://images.unsplash.com/photo-1543428073-a0f0337eead3?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1518770352423-dce09a3d3307?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "44 min"
    },
    {
      name: "raj",
      profileImage: "https://images.unsplash.com/photo-1576376260036-7a8f408275f9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://plus.unsplash.com/premium_photo-1675200124904-dfadce24119f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "33 min"
    },
    {
      name: "rohan",
      profileImage: "https://images.unsplash.com/photo-1543349823-729e19b44e31?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:"https://images.unsplash.com/photo-1602521519430-4001b9859086?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      timeLike: "11 hours"
    },

    
  ];
var sum =" "
people.forEach(function(elem,idx){
 sum +=`<div class="dabba">
        <div class="status">
            <img  id="${idx}" src="${elem.profileImage}" alt="">
        </div>
        <div class="detail">
            <h4>
                ${elem.name}
            </h4>
            <h6>${elem.timeLike}</h6>
        </div>
       </div>`
})  

var maindabba=document.querySelector('.maindabba')
maindabba.innerHTML=sum;

var full=document.querySelector('.full')
maindabba.addEventListener('click',function(elem){
   var story=people[elem.target.id].story
  full.style.display='block'
  full.style.backgroundImage=`url(${story})`
  setTimeout(function(){
    full.style.display='none'
  },3000)
  
})