// import React from "react";
//
// const HomeItem = (
//     {
//         post
//     }
// ) => {
//     return (
//         <li className="list-group-item">
//             <div className="list-group-item-action ">
//                 <div className=" row ">
//                     <div className="col-2 ">
//                         <img src={`${post.profileImage}`} className="rounded-circle img-fluid "/>
//                     </div>
//                     <div className="col-10  ">
//                         {post.name} <i className="fas fa-check-circle"></i> {post.userName} - {post.time}
//                         <br/>
//                         <span> {post.desc} {post.blueDesc ? <span class=" pt-2  text-primary ms-1">
//                         {post.blueDesc}
//                      </span> : ''} {post.desc1 ? <span class=" pt-2  text-white ms-1">
//                         {post.desc1}
//                      </span> : ''}</span>
//
//                         <div className="card border border-secondary">
//
//                             <img src={`${post.image}`} className="card-img-top "/>
//
//                             <div className="card-body p-0">
//                                 {post.title ? <div class="row pt-2 ms-1">
//                                     {post.title}
//                                 </div> : ''}
//
//
//                                 {post.details ? <div class="row pt-2   text-secondary ms-1 me-1">
//                                     {post.details}
//                                 </div> : ''}
//
//
//                                 {post.link ? <div class="row pt-2 text-secondary p-2 ">
//                                     <span> <i class="fas fa-link"></i> {post.link}</span>
//                                 </div> : ''}
//                             </div>
//
//
//                         </div>
//                         <div className="row pt-2 text-secondary">
//                 <span>
//                 <i className="far fa-comment pe-3"></i> {post.comment}
//                     <i className="fas fa-retweet ps-5 pe-3"></i> {post.retweet}
//                     <i className="far fa-heart ps-5 pe-3"></i> {post.like}
//                     <i className="fas fa-upload ps-5 "></i>
//
//                 </span>
//
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </li>
//
//
//     );
//
// };
//
// export default HomeItem;