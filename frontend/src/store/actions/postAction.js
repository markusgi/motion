import baseUrl from "../../helper/dev";

export const postAction = (content) => async (dispatch, getState) => {
    const { token } = localStorage;
    const preContent = {content};
    const payload = preContent.content;
    const url = `${baseUrl}backend/api/social/posts/`;
    const config = {
        method: "POST",
        headers: new Headers ({
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }),
        body: JSON.stringify({content})
    };
    console.log(config)
    const response = await fetch(url, config);
    const data = await response.json();
    console.log(data)
    return data;
}