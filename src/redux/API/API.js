import { createAsyncThunk } from "@reduxjs/toolkit";
import * as axios from "axios";

const token = JSON.parse(localStorage.getItem("rememberMe")) ? localStorage.getItem("token") : sessionStorage.getItem("token");

const instance = axios.create({
    baseURL: 'http://localhost:5000/',
    //withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
});

export const authApi = {
    registration(email, password, username, phone) {
        return instance.post(`api/user/registration`, { email, password, username, phone })
    },

    logIn(email, password) {
        return instance.post(`api/user/login`, { email, password })
    },

    auth() {
        return instance.get(`api/user/auth`);
    }
};

export const userApi = {
    updateprofile(values) {
        return instance.put(`api/user/update`, values, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    },

    getMyAds(userid) {
        return instance.get(`api/user/getmyads?userid=${userid}`);
    }
};

export const itemsApi = {
    addItem(values) {
        return instance.post(`api/item/create`, values, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
        )
    },

    deleteItem(userid, id) {
        console.log(userid, id)
        return instance.delete(`api/item/delete?userid=${userid}&id=${id}`)
    },

    updateItem(values) {
        return instance.patch(`api/item/update`, values, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }
        )
    },

    search({ title, limit = 10, page = 1 }) {
        return instance.get(`api/item/?title=${title}&limit=${limit}&page=${page}`)
    },

    getOne(id) {
        return instance.get(`api/item/one?id=${id}`)
    },

    getAll({ typeid, locationid = 1, limit = 10, page = 1, min = 0, max = 10000, state = 1 }) {
        return instance.get(`api/item/getall?typeid=${typeid}&locationid=${locationid}&limit=${limit}&page=${page}&price=${min},${max}&state=${state}`)
    },

    addToLiked(userid, id) {
        return instance.post(`api/liked/add?userid=${userid}&id=${id}`)
    },

    removeFromLiked(id) {
        return instance.delete(`api/liked/remove?id=${id}`)
    },

    getLiked(userid) {
        return instance.get(`api/liked/getliked?userid=${userid}`)
    }
};

export const typesApi = {
    getTypes() {
        return instance.get(`api/categories/getall`)
    }
};

export const adminApi = {
    getAll({ ispublished = false, limit = 10, page = 1 }) {
        return instance.get(`api/admin/getall?ispublished=${ispublished}&limit=${limit}&page=${page}`)
    },

    approve(id) {
        return instance.patch(`api/admin/approve?id=${id}`)
    },
};

export const locationsApi = {
    getLocations() {
        return instance.get(`api/locations/getall`)
    }
};

export const chatApi = {
    addMessage(did, message) {
        return instance.get(`api/chat/new-messages`, {
            message,
            did
        })
    },

    getMessages() {
        return instance.get(`api/chat/get-messages`)
    },

    getDialogs(userid) {
        return instance.get(`api/chat/getDialogs?userid=${userid}`)
    },

    addChat(user1, user2) {
        return instance.post(`api/chat/new-chat?user1=${user1}&user2=${user2}`)
    }
};

let baseAsyncHandle = (promise) => {
    return promise()
    .then((data) => { return data })
    .catch(function (error) {
        if (error.response) {
            return error.response.data;
        }
    });
}

export const getDialogs = createAsyncThunk(
    'chat/getDialogs',
    async function (userid, { rejectWithValue }) {

        const responce = await chatApi.getDialogs(userid)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
            
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const addChat = createAsyncThunk(
    'chat/addChat',
    async function (value, { rejectWithValue }) {

        const responce = await chatApi.addChat(value.user1, value.user2)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const getMyAds = createAsyncThunk(
    'account/getMyAds',
    async function (userid, { rejectWithValue }) {

        const responce = await userApi.getMyAds(userid)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const approve = createAsyncThunk(
    'admin/approve',
    async function (id, { rejectWithValue }) {

        const responce = await adminApi.approve(id)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const getAllForAdmin = createAsyncThunk(
    'admin/getAll',
    async function (values, { rejectWithValue }) {

        const responce = await adminApi.getAll(values)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const registration = createAsyncThunk(
    'account/registration',
    async function (values, { rejectWithValue }) {

        const responce = await authApi.registration(values.email, values.password, values.username, values.phone)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const logIn = createAsyncThunk(
    'account/logIn',
    async function (values, { rejectWithValue }) {

        const responce = await authApi.logIn(values.email, values.password)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const updateItem = createAsyncThunk(
    'account/updateItem',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.updateItem(values)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const searchItem = createAsyncThunk(
    'account/searchItem',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.search(values)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const deleteItem = createAsyncThunk(
    'account/deleteItem',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.deleteItem(values.userid, values.id)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const auth = createAsyncThunk(
    'account/auth',
    async function (values, { rejectWithValue }) {

        const responce = await authApi.auth()
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const getOne = createAsyncThunk(
    'account/getOne',
    async function (id, { rejectWithValue }) {

        const responce = await itemsApi.getOne(id)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const update = createAsyncThunk(
    'account/update',
    async function (values, { rejectWithValue }) {
        const responce = await userApi.updateprofile(values)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });
        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const addItem = createAsyncThunk(
    'items/addItem',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.addItem(values)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }

        const data = responce.data;
        return data;
    }
);


export const getAll = createAsyncThunk(
    'items/getAll',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.getAll(values)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }

        const data = responce.data;
        return data;
    }
);

export const getTypes = createAsyncThunk(
    'types/getTypes',
    async function (values, { rejectWithValue }) {

        const responce = await typesApi.getTypes()
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const addToLiked = createAsyncThunk(
    'types/addToLiked',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.addToLiked(values.userid, values.id)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const removeFromLiked = createAsyncThunk(
    'types/removeFromLiked',
    async function (values, { rejectWithValue }) {

        const responce = await itemsApi.removeFromLiked(values.id)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const getLiked = createAsyncThunk(
    'types/getLiked',
    async function (userid, { rejectWithValue }) {

        const responce = await itemsApi.getLiked(userid)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const sendMessage = createAsyncThunk(
    'user/sendMessage',
    async function (userid, { rejectWithValue }) {

        const responce = await chatApi.sendMessage(userid)
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);

export const getLocations = createAsyncThunk(
    'locations/getLocations',
    async function (values, { rejectWithValue }) {

        const responce = await locationsApi.getLocations()
            .then((data) => { return data })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            });

        if (responce.message) {
            return rejectWithValue(responce.message)
        }
        const data = responce.data;
        return data;
    }
);