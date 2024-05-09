import admin from "./admin";
import customErrors from './customErrors'

interface ingTypes {
    name: string,
    image: string
}
export default {
    add: async (data: ingTypes) => {
        console.log(process.env.TOKEN, admin.token);
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/muscles`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${admin.token}`

                },
                body: JSON.stringify(data),
            });
            console.log(res);
            if (res.status === 422) return customErrors.invalidData;
            if (res.status === 401) return customErrors.unauthorized;
            if (!res.ok) return customErrors.general;
            return res.json();
        } catch {
            return customErrors.general;
        }
    },
    update: async (id: string, data: ingTypes) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/muscles/${id}`, {
                method: "PATCH",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${admin.token}`
                },
                body: JSON.stringify(data),
            });
            console.log(res);
            if (res.status === 422) return customErrors.invalidData;
            if (res.status === 401) return customErrors.unauthorized;
            if (!res.ok) return customErrors.general;
            return res.json();
        } catch {
            return customErrors.general;
        }
    },
    get: async (id: string) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/muscles/${id}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${admin.token}`
                }
            });
            console.log(res);
            if (res.status === 422) return customErrors.invalidData;
            if (res.status === 401) return customErrors.unauthorized;
            if (!res.ok) return customErrors.general;
            return res.json();
        } catch {
            return customErrors.general;
        }
    }
}