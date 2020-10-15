 export const feedAction = () => async (dispatch, getState) => {
    const { token } = localStorage;
    const url = "https://docker-markus.propulsion-learn.ch/backend/api/social/posts/"
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