import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">

            {
                postsArray.map(postItem =>
                    <PostSummaryItem
                        key={postItem._id}
                        post={postItem}/>
                )
            }
        </ul>
    );
};

export default PostSummaryList;

