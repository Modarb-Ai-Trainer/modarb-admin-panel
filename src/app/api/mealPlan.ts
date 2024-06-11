import admin from "./admin";
import customErrors from './customErrors'

interface featureType {
    title: string,
    description: string,

}
interface dayType {
    day_number: number,
    meals: string[],
}
interface mealPlan {
    image: string,
    description: string,
    duration: number,
    level: string,
    your_journey: string,
    key_features: featureType[],
    days: dayType[],

}
export default {
    add: async (data: mealPlan) => {
        console.log(process.env.TOKEN, admin.token);
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/mealPlans`, {
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
    update: async (id: string, data: mealPlan) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/mealPlans/${id}`, {
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
            const res = await fetch(`${process.env.URI}/api/v1/console/mealPlans/${id}`, {
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
    },
    getAll: async () => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/mealPlans`, {
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