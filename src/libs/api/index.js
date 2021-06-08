import axios from "axios";

function request(props) {
    console.log("ASD");
    return axios({
        // url: `https://warm-snail-86.loca.lt/${props.uri}`,
        url: `http://localhost:8090/${props.uri}`,
        method: props.method,
        data: props.body,
        headers: props.headers,
    });
}

export const loginApi = (data) => {
    return request({
        uri: "api/user/login",
        body: data,
        method: "POST",
    });
};

export const registerApi = (data) => {
    console.log(data);
    return request({
        uri: "api/user",
        body: data,
        method: "POST",
    });
};

export const logoutApi = () => {
    return request({
        uri: "api/user/logout",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        method: "POST",
    });
};

export const getUserInfor = () => {
    return request({
        url: "api/user",
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const getChefProfileApi = () => {
    return request({
        uri: "api/dining/chef",
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const postChefProfileApi = (data) => {
    return request({
        uri: "api/dining/chef",
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
    });
};

export const postDiningMenuApi = (data) => {
    return request({
        uri: "api/dining/menu",
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
    });
};

export const getAllMenusApi = () => {
    return request({
        uri: "api/dining/menus",
        method: "GET",
    });
};

export const getMenuApi = (id) => {
    return request({
        uri: `api/dining/menu/${id}`,
        method: "GET",
    });
};

export const updateMenuApi = (data, id) => {
    return request({
        uri: `api/dining/menu/${id}`,
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
    });
};

export const deleteMenuApi = (id) => {
    return request({
        uri: `api/dining/menu/${id}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const bookingApi = (data, id) => {
    return request({
        uri: `api/booking/${id}`,
        method: "POST",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: data,
    });
};

export const getBookingListApi = () => {
    return request({
        uri: "api/booking/chef",
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const deleteBookingApi = (id) => {
    return request({
        uri: `api/booking/${id}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const createUser = (data) => {
    return request({
        uri: "api/user",
        method: "POST",
        body: data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const getUsers = () => {
    return request({
        uri: "api/user/users",
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const updateUser = (data, id) => {
    return request({
        uri: `api/user/${id}`,
        method: "POST",
        body: data,
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};

export const deleteUser = (id) => {
    return request({
        uri: `api/user/${id}`,
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    });
};