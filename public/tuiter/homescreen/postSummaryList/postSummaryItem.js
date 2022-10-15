const postSummaryItem = (post) => {
    return (`
    <div class = "list-group-item list-group-item-action">
      <div class =" row text-white">
            <div class = "col-2">
                <img src="${post.profileImage} " class ="rounded-circle img-fluid height = 100%">
      </div>
      <div class = "col-10 border-1">
              ${post.name} <i class="fas fa-check-circle"></i>${post.userName} - ${post.time}<br>
              ${post.desc}
              
              <div class = "row pt-2" >
        <img src = "${post.image}"/>
     </div>
     <div class = "row pt-2">
        ${post.title}
      </div>  
     <div class = "row pt-2 text-secondary">
          ${post.details}
     </div>
     
     ${post.link ?
        ` <div class = "row pt-2 text-secondary">
        <span> <i class="fas fa-link"></i> ${post.link}</span>
     </div>` : ''}

      </div>
     

    
    </div>
    </div>
    
   
    `);
}

export default postSummaryItem