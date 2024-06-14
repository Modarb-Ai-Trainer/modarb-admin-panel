import customErrors from './customErrors'

const login = async (email: any, password: any) => {
    const cred = {
        email: email, password: password
    }
    console.log(cred);
    const res = await fetch(`${process.env.URI}/api/v1/console/auth/login`, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cred),
    });
    console.log(res);
    return res.json();
};

export default {
    login
};