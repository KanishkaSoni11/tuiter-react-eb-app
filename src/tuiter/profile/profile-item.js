import React from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";


const ProfileItem = () => {
    const profile = useSelector(state => state.profile);
    return (
        <>
            <h1>{profile.firstName} {profile.lastName} </h1>
            <p className="ps-2 text-secondary">6,114 Tweets</p>
            <div className="position-relative ">
                <img src={profile.bannerPicture} className="w-100 "/><br/>
                <div className="col-3 position-absolute top-50 ms-2">
                    <img className="rounded-circle img-fluid img-thumbnail" src={profile.profilePicture}/>
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary rounded-pill float-end">
                        Edit Profile
                    </button>
                </div>
            </div>
            <h3 className="mt-5 pt-5">{profile.firstName} {profile.lastName}</h3>
            <h4 className="ps-2 text-secondary">{profile.handle}</h4>
            <p className="ps-2">{profile.bio}</p>
            <div className="ps-2">
                <i className="fa-solid fa-location-dot"></i> {profile.location}
                <i className=" fa-solid fa-gift ms-5"></i> Born {profile.dateOfBirth}
                <i className="fa-solid fa-calendar-days ms-5"></i> Joined {profile.dateJoined}
            </div>
            <div className="mt-2 ps-2">
                <span className="fw-bold">{profile.followingCount}</span> Following
                <span className="fw-bold ms-4"> {profile.followersCount}</span> Followers
            </div>


        </>
    )
}

export default ProfileItem;