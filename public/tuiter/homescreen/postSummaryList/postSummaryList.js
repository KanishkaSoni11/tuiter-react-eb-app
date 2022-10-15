import postSummaryItem from "./postSummaryItem.js";
import homePost from "./homePost.js";

const postSummaryList = () => {
    return(`
    ${
        homePost.map(homePostIn => {
            return (postSummaryItem(homePostIn))
        }).join('')
    }
    `);
}

export default postSummaryList;