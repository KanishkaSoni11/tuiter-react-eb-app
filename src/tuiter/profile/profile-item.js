import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveProfile} from "./profile-reducer";
import {cancelProfile} from "./profile-reducer";

const ProfileItem = () => {
    const profile = useSelector(state => state.profile);
    const [editProfile, setEditProfile] = useState(false);
    const [firstName, setFirstName] = useState(profile.firstName);
    const [lastName, setLastName] = useState(profile.lastName);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dob, setDob] = useState(profile.dateOfBirth);
    const dispatch = useDispatch();

    const editClickHandler = () => {
        setEditProfile(true);
    };

    const saveClickHandler = () => {
        setEditProfile(false);
        const prof = {...profile , firstName, lastName, bio, location, website, dob};
        dispatch(saveProfile(prof))
    }

    const cancelClickHandler = () => {
        setEditProfile(false);
        const prof = {...profile};
        dispatch(saveProfile(prof))
    }


    return (
        <>
            {
                !editProfile &&
                <>
                    <h1>{profile.firstName} {profile.lastName} </h1>
                    <p className="ps-2 text-secondary">6,114 Tweets</p>
                </>
            }
            {
                editProfile &&
                <div className="row">
                    <i
                        onClick={cancelClickHandler}
                        className="col-1 fa-solid fa-xmark fa-2x"></i>
                    <h1 className="col-8">Edit Profile</h1>
                    <button
                        onClick={saveClickHandler}
                        className=" my-1 me-0  btn btn-primary col-2 float-end rounded-pill"> Save
                    </button>
                </div>

            }


            <div className="position-relative ">
                <img src={`/images/${profile.bannerPicture}`} className="w-100 "/><br/>
                <div className="col-3 position-absolute top-50 ms-2">
                    <img className="rounded-circle img-fluid img-thumbnail" src={`/images/${profile.profilePicture}`}
                    />
                </div>
                <div className="mt-2">
                    <button className="btn btn-primary rounded-pill float-end" onClick={editClickHandler}>
                        Edit Profile
                    </button>
                </div>
            </div>
            {
                !editProfile &&
                <h3 className="mt-5 pt-5">{profile.firstName} {profile.lastName}</h3>
            }

            {
                editProfile &&
                <div className="mt-5 pt-5">
                    <div className="form-floating ">
                        <input
                            onChange={(event) => {
                                setFirstName(event.target.value.split(' ').slice(0, -1).join(' '))
                                setLastName(event.target.value.split(' ').slice(-1).join(' '))
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={`${firstName} ${lastName}`}></input>
                        <label htmlFor="floatingInputGrid">Name</label>
                    </div>
                </div>


            }

            {
                !editProfile &&
                <h4 className="ps-2 text-secondary">{profile.handle}</h4>
            }

            {
                !editProfile &&
                <p className="ps-2">{profile.bio}</p>
            }

            {
                editProfile &&
                <div className="form-floating mt-2">

                    <textarea value={bio}
                              style={{height:100}}
                              onChange={(event) => {
                                  setBio(event.target.value)
                              }
                              }
                              className="form-control "
                              id="floatingInputGrid"
                              rows = "7" cols = "10"
                    ></textarea>
                    <label htmlFor="floatingInputGrid">Bio</label>

                </div>

            }

            {
                !editProfile &&
                <p className="ps-2">{profile.website}</p>

            }

            {
                !editProfile &&
                <div className="ps-2">
                    <i className="fa-solid fa-location-dot"></i> {profile.location}
                    <i className=" fa-solid fa-gift ms-5"></i> Born {profile.dateOfBirth}
                    <i className="fa-solid fa-calendar-days ms-5"></i> Joined {profile.dateJoined}
                </div>
            }

            {
                editProfile &&
                <div className=" mt-2">
                    <div className="form-floating">
                        <input
                            onChange={(event) => {
                                console.log("loc " ,event.target.value )
                                setLocation(event.target.value)
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={location}></input>
                        <label htmlFor="floatingInputGrid">Location</label>
                    </div>

                </div>
            }

            {
                editProfile &&
                <div className=" mt-2">
                    <div className="form-floating">
                        <input
                            onChange={(event) => {
                                setWebsite(event.target.value)
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={website}></input>
                        <label htmlFor="floatingInputGrid">Website</label>
                    </div>

                </div>
            }

            {
                editProfile &&
                <div className=" mt-2">
                    <div className="form-floating">
                        <input
                            onChange={(event) => {
                                setDob(event.target.value)
                            }
                            }
                            className="form-control" id="floatingInputGrid"
                            value={dob}></input>
                        <label htmlFor="floatingInputGrid">Birth Date</label>
                    </div>

                </div>
            }

            {
                !editProfile &&
                <div className="mt-2 ps-2">
                    <span className="fw-bold">{profile.followingCount}</span> Following
                    <span className="fw-bold ms-4"> {profile.followersCount}</span> Followers
                </div>
            }


        </>
    )
}

export default ProfileItem;