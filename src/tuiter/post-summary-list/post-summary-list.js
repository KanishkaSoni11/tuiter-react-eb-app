import PostSummaryItem from "./post-summary-item";
import posts from "./posts.json"

const PostSummaryList = () => {
    return(
        <>
            <ul>
                {
                    posts.map(postItem => {
                        return(<PostSummaryItem post={postItem} />)
                    })
                }
            </ul>
        </>
    );
}

export default PostSummaryList;