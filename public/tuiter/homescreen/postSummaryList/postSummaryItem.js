const postSummaryItem = (post) => {
    return (`
    <div class = "list-group-item list-group-item-action">
      <div class =" row text-white">
            <div class = "col-2 y">
                <img src="${post.profileImage} " class ="rounded-circle img-fluid " >
             </div>
             <div class = "col-10  ">
              ${post.name} <i class="fas fa-check-circle"></i>${post.userName} - ${post.time}<br>
              <span >${post.desc} ${post.blueDesc ? `<span class = " pt-2  text-primary ms-1">
                       ${post.blueDesc}
                     </span>` : ''} ${post.desc1 ? `<span class = " pt-2  text-white ms-1">
                       ${post.desc1}
                     </span>` : ''}</span>
              
               <div  class ="card border border-secondary">
<!--                <div class = "row  pt-0" >-->
                  <img src = "${post.image}"  class = "card-img-top " />
<!--                </div>-->
                <div class ="card-body p-0">
                ${post.title ?  `<div class = "row pt-2 ms-1">
                      ${post.title}
                 </div>`: ''}
             
    
                  ${post.details ? `<div class = "row pt-2  text-secondary ms-1">
                       ${post.details}
                     </div>` : ''}
                  
               
     
                 ${post.link ?` <div class = "row pt-2 text-secondary p-2 ">
                       <span> <i class="fas fa-link"></i> ${post.link}</span>
                     </div>` : ''}
                 </div>
                      
                 
               
</div>
               <div class = "row pt-2 text-secondary" >
                <span  >
                <i class="far fa-comment pe-3"></i> ${post.comment}
                 <i class="fas fa-retweet ps-5 pe-3"></i>${post.retweet}
                 <i class="far fa-heart ps-5 pe-3"></i>${post.like}
                 <i class="fas fa-upload ps-5 "></i>
                
</span> 
                 
                 </div>   
                  </div>
               
            </div>
    </div>
    
   
    `);
}

export default postSummaryItem