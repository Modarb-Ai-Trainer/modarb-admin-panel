'use server'
import { revalidateTag } from "next/cache";

const authToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNkN2Y1YjlhY2U5MTc2ZTIyNGUxNSIsImVtYWlsIjoic3VwZXJAYXBwLmNvbSIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInR5cGUiOiJhZG1pbiIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzE0OTUzNTcxLCJleHAiOjE3MTUwMzk5NzF9.bHu6Dy5bpGA37Su3-tXNoBM7Aq6aKYHkN0BlwXUtjJ0';

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

export async function getWorkouts() {
    const url: string = 'http://localhost:4000/api/v1/console/workouts';
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['Workouts'] 
            } 
        });
    return data;
}





export async function getMuscles() {
    const url: string = 'http://localhost:4000/api/v1/console/muscles';
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: {
             tags: ['muscles'] 
            } 
        });
    return data;
}

export async function getMusclesById(muscleId: String){
    const url: string = `http://localhost:4000/api/v1/console/muscles/${muscleId}`;
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: {
             tags: ['muscle'] 
            } 
        });
    return data;
}

export async function getExercises() {
    const url: string = 'http://localhost:4000/api/v1/console/exercises';
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: {
             tags: ['exercises'] 
            } 
        });
    return data;
}

export async function getExerciseById(exerciseId: String){
    const url: string = `http://localhost:4000/api/v1/console/exercises/${exerciseId}`;
    const data = await fetchData(url, { 
        cache: 'no-cache', 
        next: { 
            tags: ['exercises']
         } 
        });
    return data;
}


export async function getEquipments() {
    const url: string = 'http://localhost:4000/api/v1/console/equipments';
    const data = await fetchData(url, {
         cache: 'no-cache', 
         next: { 
            tags: ['equipments'] 
        } 
    });
    return data;
}

export async function getEquipmentById(equipmentId: String) {
    const url: string = `http://localhost:4000/api/v1/console/equipments/${equipmentId}`;
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: {
             tags: ['equipment'] 
         } 
        });
    return data;
}

export async function getAdmins() {
    const url: string = 'http://localhost:4000/api/v1/console/admins';
    const data = await fetchData(url, { 
        cache: 'no-cache',
         next: { 
            tags: ['admins']
         } 
        });
    return data;
}





