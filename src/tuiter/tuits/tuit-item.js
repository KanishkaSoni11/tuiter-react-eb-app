import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";

const TuitItem = (
    {
        post = {
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            image: "tesla.jpeg"
        }


    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }

    return (

        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${post.image}`} className="rounded-circle img-fluid "/>
                </div>
                <div className="col-10">
                    <i className="bi bi-x-lg float-end"
                       onClick={() => deleteTuitHandler(post._id)}></i>
                    <div>{post.userName} <i
                        className="fa-solid fa-circle-check text-primary"></i> {post.handle}. {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.tuit}</div>

                    <div className="mt-2">
                          <span>
                         <i className="far fa-comment pe-3"></i> {post.replies}
                              <i className="fas fa-retweet ps-5 pe-3"></i> {post.retuits}
                              {
                                  !post.liked &&
                                  <>
                                      <i className="far fa-heart ps-5 pe-3"></i> {post.likes}
                                  </>


                              }
                              {
                                  post.liked &&
                                  <>
                                      <i className="fa-solid fa-heart ps-5 pe-3 text-danger"></i>{post.likes}
                                  </>


                              }


                              <i className=" fa-solid fa-share-nodes ps-5 "></i>
                     </span>
                    </div>


                </div>


            </div>
        </li>
    );
};
export default TuitItem;
