import postSummaryList from "./postSummaryList.js";

const postSummaryListIndexSide = () => {
    return (`
    <ul class="list-group">
    ${postSummaryList()}
    </ul>
    
    `)
}
export default postSummaryListIndexSide