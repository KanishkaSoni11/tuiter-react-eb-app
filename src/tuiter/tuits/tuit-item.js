import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

const TuitItem = (
    {
        post
    }
) => {

    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
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
                                      <i className="fa-regular fa-thumbs-up ps-5 pe-3"
                                         onClick={() => dispatch(updateTuitThunk({
                                             ...post,
                                             likes: post.likes + 1,
                                             liked: true
                                         }))}></i>{post.likes}
                                  </>
                              }
                              {
                                  post.liked &&
                                  <>
                                      <i className="fa-solid fa-thumbs-up ps-5 pe-3 text-danger"
                                         onClick={() => dispatch(updateTuitThunk({
                                             ...post,
                                             likes: post.likes - 1,
                                             liked: false
                                         }))}></i>{post.likes}
                                  </>

                              }

                              {
                                  !post.disliked &&
                                  <>
                                      <i className="fa-regular fa-thumbs-down ps-5 pe-3"
                                         onClick={() => dispatch(updateTuitThunk({
                                             ...post,
                                             dislikes: post.dislikes + 1,
                                             disliked: true
                                         }))}></i>{post.dislikes}
                                  </>
                              }
                              {
                                  post.disliked &&
                                  <>
                                      <i className="fa-solid fa-thumbs-down ps-5 pe-3 text-danger"
                                         onClick={() => dispatch(updateTuitThunk({
                                             ...post,
                                             dislikes: post.dislikes - 1,
                                             disliked: false
                                         }))}></i>{post.dislikes}
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
