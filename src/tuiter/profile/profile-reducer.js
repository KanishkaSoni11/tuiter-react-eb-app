import {createSlice} from "@reduxjs/toolkit";

const initialProfile =
    {
        firstName: 'Kanishka',
        lastName: 'Soni',
        handle: '@ksoni',
        profilePicture: 'kanishka.jpeg',
        bannerPicture: 'banner.jpg',
        bio: 'Graduate Student at Northeastern University.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '11/17/1997',
        dateJoined: '4/2019',
        followingCount: 340,
        followersCount: 223
    };


const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfile,
    reducers: {
        saveProfile(state, action) {
            return state = action.payload

        }

    }

});

export const {saveProfile} = profileSlice.actions
export default profileSlice.reducer;