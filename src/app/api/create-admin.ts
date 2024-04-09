const URI = 'https://modarb-backend.onrender.com/api/v1/console/auth/login';
const cred = {
    email: "admin@app.com",
    password: "password"
}
const testLogin = async () => {
    const res = await fetch(URI, {
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