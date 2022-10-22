import React from "react";
import post from "./posts.json";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return(
        <ul className="list-group">
            <li className="list-group-item">
                <h3>Explore</h3>
            </li>
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

