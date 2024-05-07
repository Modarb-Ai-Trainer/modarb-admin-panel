const err = {
    status: 500,
    error: ["Something went wrong, please check your internet connection."]
}
export default {
    add: async (name: string, image: string) => {
        console.log(process.env.TOKEN);
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/equipments`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.TOKEN}`

                },
                body: JSON.stringify({ name, image }),
            });
            console.log(res);
            if (!res.ok) return err;
            return res.json();
        } catch {
            return err;
        }
    },
    update: async (id: string, name: string, image: string) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/equipments/${id}`, {
                method: "PATCH",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.TOKEN}`
                },
                body: JSON.stringify({ name, image }),
            });
            console.log(res);
            if (!res.ok) return err;
            return res.json();
        } catch {
            return err;
        }
    },
    get: async (id: string) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/equipments/${id}`, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.TOKEN}`
                }
            });
            console.log(res);
            if (!res.ok) return err;
            return res.json();
        } catch {
            return err;
        }
    }
}