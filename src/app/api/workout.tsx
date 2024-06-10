import admin from "./admin";
import customErrors from './customErrors'
interface workoutType {
    name: string,
    description: string,
    type: string,
    image: string,
    fitness_level: string,
    fitness_goal: string,
    place: string[],
    min_per_day: number,
    total_number_days: number,
    created_by: string,
    template_weeks: {
        week_number: number,
        week_name: string,
        week_description: string,
        days: {
            day_number: number,
            total_number_exercises: number,
            day_type: string,
            exercises: string[]
        }[],
    }[],
}
export default {
    add: async (data: workoutType) => {
        console.log(process.env.TOKEN, admin.token);
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/workouts`, {
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
    update: async (id: string, data: workoutType) => {
        try {
            const res = await fetch(`${process.env.URI}/api/v1/console/workouts/${id}`, {
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
            const res = await fetch(`${process.env.URI}/api/v1/console/workouts/${id}`, {
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
            const res = await fetch(`${process.env.URI}/api/v1/console/workouts`, {
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