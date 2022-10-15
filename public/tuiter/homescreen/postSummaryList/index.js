import postSummaryList from "./postSummaryList.js";

const postSummaryListIndex = () => {
    return(`
    <ul class ="list-group">
    ${postSummaryList()}
    </ul>
    `)
}
export default postSummaryListIndex