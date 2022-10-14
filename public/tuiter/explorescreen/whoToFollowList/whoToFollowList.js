import WhoToFollowListItem from "./whoToFollowListItem.js";
import who from "./who.js"

const whoToFollowList = () => {
    return (`${
        who.map(whoIn => {
            return (WhoToFollowListItem(whoIn));
        }).join('')
    }    
`);
}
export default whoToFollowList;
