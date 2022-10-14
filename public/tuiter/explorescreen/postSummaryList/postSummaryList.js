import postSummaryItem from "./postSummaryItem.js";
import post from "./post.js";

const postSummaryList = () => {
    return (`
    ${
        post.map(postIn => {
            return (postSummaryItem(postIn))
        }).join('')
    }
    `);
}
export default postSummaryList;