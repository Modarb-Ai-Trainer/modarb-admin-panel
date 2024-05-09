
const testLogin = async (email: any, password: any) => {
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
    if (!res.ok) { throw new Error('Something went wrong2'); }
    return res.json();
};

export default {
    testLogin
};