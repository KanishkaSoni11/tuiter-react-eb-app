import React from "react";
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
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img src={`/images/${post.image}`} className="rounded-circle img-fluid "/>
                </div>
                <div className="col-10">
                    <div>{post.userName} <i className="fa-solid fa-circle-check text-primary"></i> {post.handle }. {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.tuit}</div>
                </div>

            </div>
        </li>
    );
};
export default TuitItem;
