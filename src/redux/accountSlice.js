 import { createSlice } from "@reduxjs/toolkit";
 import { registration } from "./API/API";
 import { logIn } from "./API/API";

const accountSlice = createSlice({
    name: 'account',
    initialState: {
        user: {username: "John",
                avatar: null},
        ads: {
        active: [{
            id: 1,
            title: "Втулка",
            category:  ["Вилки", "ригидная"],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            condition: "used",
            location: ["Минск", "Советский"],
            dataTime: "24.01.2022, 13:32",
            photo: "https://picsum.photos/200",
            isLiked: true,
            phoneNumber: "+375336693046",
            price: 400
        },
        {
            id: 2,
            title: "Колесо",
            category:  ["Колеса", "26"],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            condition: "used",
            location: ["Минск", "Советский"],
            dataTime: "24.01.2022, 13:32",
            phoneNumber: "+375336693046",
            photo: "https://picsum.photos/200",
            isLiked: true,
            price: 400
        }],  
        moderation:  [{id: 4,
            title: "Вилка",
            phoneNumber: "+375336693046",
            category:  ["Вилки", "ригидная"],
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            condition: "new",
            location:  ["Минск", "Советский"],
            dataTime: "24.01.2022, 13:32",
            photo: "https://picsum.photos/200",
            isLiked: true,
            price: 300
        }],
        rejected: [],
        deactiveted: []
    },
    currentAds:  [{
        id: 1,
        title: "Втулка",
        category: ["Вилки", "ригидная"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        condition: "used",
        location:  ["Минск", "Центральный"],
        dataTime: "24.01.2022, 13:32",
        phoneNumber: "+375336693046",
        photo: "https://picsum.photos/200",
        isLiked: true,
        price: 400
    },
    {
        id: 2,
        title: "Колесо",
        category:  ["Вилки", "ригидная"],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        condition: "used",
        phoneNumber: "+375336693046",
        location:  ["Минск", "Советский"],
        dataTime: "24.01.2022, 13:32",
        photo: "https://picsum.photos/200",
        isLiked: true,
        price: 400
    }],
    editAd: {}
},
    reducers: {
        setCurrentAds(state, action) {
            state.currentAds = [...state.ads[action.payload]];
        },
        setEditAd (state, action) {
            let id = Number.parseInt(action.payload);
            state.currentAds.forEach(elem => {
                if (elem.id === id) {
                    state.editAd = {...elem}}
              })
        }
    },
    extraReducers: {
        [registration.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [registration.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.user = action.payload;
        },
        [registration.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        },
        [logIn.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [logIn.fulfilled]: (state, action) => {
            state.status = "resolved";
            state.authData = action.payload;
        },
        [logIn.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
});

export const {setCurrentAds, setEditAd} = accountSlice.actions;
export default accountSlice.reducer;