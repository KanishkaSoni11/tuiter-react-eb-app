import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitList = () => {
    const {tuits, loading} = useSelector(
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    // const postsArray = useSelector(state => state.tuits)
    return (
        <ul className="list-group mt-2">

            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }


            {
                tuits.map(postItem =>
                    <TuitItem
                        key={postItem._id}
                        post={postItem}/>
                )
            }
        </ul>
    );
};

export default TuitList;