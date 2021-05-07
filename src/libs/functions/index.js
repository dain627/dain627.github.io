export const getUserInfor = () => {
    return JSON.parse(localStorage.getItem("user_data"));
};
