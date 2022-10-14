import WhoToFollowList from "./whoToFollowList.js";
const whoToFollowBar =() => {
    return(`
      <div class="list-group wd-bottom-border">
                <div class="list-group-item list-group-item-action fw-bold">
                         Who to Follow
                </div>  
                ${WhoToFollowList()}           
                <div>
                
</div>
                    
      </div>
 `)
}
export default whoToFollowBar