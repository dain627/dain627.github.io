export const getUserInfor = () => {
    return JSON.parse(localStorage.getItem("user_data"));
};

export const getUserType = () => {
    if (!localStorage.getItem("user_data")) return null;
    return JSON.parse(localStorage.getItem("user_data")).user_type;
};