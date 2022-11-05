import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
    const postsArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group mt-2">

            {
                postsArray.map(postItem =>
                    <TuitItem
                        key={postItem._id}
                        post={postItem}/>
                )
            }
        </ul>
    );
};

export default TuitList;