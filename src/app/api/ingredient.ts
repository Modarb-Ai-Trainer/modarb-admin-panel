
const err = {
    status: 500,
    error: ["Something went wrong, please check your internet connection!"]
}
interface ingTypes {
    name: string,
    serving_size: number,
    servings_count: number,
    serving_size_unit: string,
    servings_count_unit: string,
    calories: number,
    carbs: number,
    proteins: number,
    fats: number
}
export default {
    add: async (data: ingTypes) => {
        console.log(process.env.TOKEN);
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/ingredients`, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.TOKEN}`

                },
                body: JSON.stringify(data),
            });
            console.log(res);
            if (!res.ok) return err;
            return res.json();
        } catch {
            return err;
        }
    },
    update: async (id: string, data: ingTypes) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/ingredients/${id}`, {
                method: "PATCH",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.TOKEN}`
                },
                body: JSON.stringify(data),
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
            const res = await fetch(`${process.env.URI}/api/v1/console/ingredients/${id}`, {
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