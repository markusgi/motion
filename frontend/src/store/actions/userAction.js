export const userAction = () => async (dispatch, getState) => {
    const { token } = localStorage;
    const url = "https://motion.propulsion-home.ch/backend/api/users/me/";
    const config = {
        method: "GET",
        headers: new Headers ({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }),
    };
    const response = await fetch(url, config);
    const data = await response.json();
    return data;
}