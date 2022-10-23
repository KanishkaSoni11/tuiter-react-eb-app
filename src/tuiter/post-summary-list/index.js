import React from "react";
import post from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">

            {
                post.map(postItem =>
                    <PostSummaryItem
                        key={postItem._id}
                        post={postItem}/>
                )
            }
        </ul>
    );
};

export default PostSummaryList;

