'use server'
import { revalidateTag } from "next/cache";

const authToken = process.env.token;
interface RequestOptions {
    headers?: Record<string, string>;
    cache?: RequestCache; 
    next?: {
        tags: string[];
    };
    method?: string;
}


export async function fetchData(url: string, options: RequestOptions = {}) {
    options.headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${authToken}`,
        ...options.headers,
    };

    const res = await fetch(url, options);
    if (!res.ok) {
        throw new Error("Could not fetch data");
    }

    if (options.next && options.next.tags) {
        options.next.tags.forEach(tag => revalidateTag(tag));
    }

    return res.json();
}
export async function getmealPlans() {
    const url: string = `${process.env.server}/api/v1/console/mealplans`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['mealplans'] 
            } 
        });
    return data;
}
export async function getmealplansById(mealplanId: String) {
    const url: string = `${process.env.server}/api/v1/console/mealplans/${mealplanId}`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['mealplans'] 
            } 
        });
    return data;
}


export async function getmeals() {
    const url: string = `${process.env.server}/api/v1/console/meals`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['meals'] 
            } 
        });
    return data;
}
export async function getmealsById(mealId: String) {
    const url: string = `${process.env.server}/api/v1/console/meals/${mealId}`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['meals'] 
            } 
        });
    return data;
}

export async function getIngradients() {
    const url: string = `${process.env.server}/api/v1/console/Ingredients`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['ingradients'] 
            } 
        });
    return data;
}
export async function getIngradientsById(IngradientId:string) {
    const url: string = `${process.env.server}/api/v1/console/Ingredients/${IngradientId}`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['ingradients'] 
            } 
        });
    return data;
}

export async function getWorkouts() {
    const url: string = `${process.env.server}/api/v1/console/workouts`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['Workouts'] 
            } 
        });
    return data;
}

export async function getWorkoutByID(WorkoutId:String) {
    const url: string = `${process.env.server}/api/v1/console/workouts/${WorkoutId}`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['Workouts'] 
            } 
        });
    return data;
}




export async function getMuscles() {
    const url: string = `${process.env.server}/api/v1/console/muscles`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['muscles'] 
            } 
        });
    return data;
}

export async function getMusclesById(muscleId: String){
    const url: string = `${process.env.server}/api/v1/console/muscles/${muscleId}`;
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: {
             tags: ['muscle'] 
            } 
        });
    return data;
}

export async function getExercises() {
    const url: string = `${process.env.server}/api/v1/console/exercises`;
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: {
             tags: ['exercises'] 
            } 
        });
    return data;
}

export async function getExerciseById(exerciseId: String){
    const url: string = `${process.env.server}/api/v1/console/exercises/${exerciseId}`;
    const data = await fetchData(url, { 
        cache: 'no-cache', 
        next: { 
            tags: ['exercises']
         } 
        });
    return data;
}


export async function getEquipments() {
    const url: string =  `${process.env.server}/api/v1/console/equipments`;
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: { 
            tags: ['equipments'] 
        } 
    });
    return data;
}

export async function getEquipmentById(equipmentId: String) {
    const url: string = `${process.env.server}/api/v1/console/equipments/${equipmentId}`;
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: {
             tags: ['equipment'] 
         } 
        });
    return data;
}

export async function getAdmins() {
    const url: string = `${process.env.server}/api/v1/console/admins`;
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: { 
            tags: ['admins']
         } 
        });
    return data;
}





