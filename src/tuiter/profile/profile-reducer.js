import {createSlice} from "@reduxjs/toolkit";

const initialProfile =
    {
        firstName: 'Jose',
        lastName: 'Annunziato',
        handle: '@jannunzi',
        profilePicture: 'kanishka.jpeg',
        bannerPicture: 'banner.jpg',
        bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
        website: 'youtube.com/webdevtv',
        location: 'Boston, MA',
        dateOfBirth: '7/7/1968',
        dateJoined: '4/2009',
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