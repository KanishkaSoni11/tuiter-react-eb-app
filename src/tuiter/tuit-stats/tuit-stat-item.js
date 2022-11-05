import React from "react";

const TuitStatsItem = (
    {
        tuitstat = {
            liked: "true",
            replies: 123,
            retuits: 432,
            likes: 2345
        }
    }
) => {
    return (
        <span>
        <i className="far fa-comment pe-3"></i> {tuitstat.likes}
            <i className="fas fa-retweet ps-5 pe-3"></i> {tuitstat.replies}
            <i className="far fa-heart ps-5 pe-3"></i> {tuitstat.retuits}
            <i className="fas fa-upload ps-5 "></i>
    </span>
    );
};

export default TuitStatsItem;