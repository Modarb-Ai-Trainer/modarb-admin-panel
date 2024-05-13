'use server'
import { revalidateTag } from "next/cache";

const authToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MmNkN2Y1YjlhY2U5MTc2ZTIyNGUxNSIsImVtYWlsIjoic3VwZXJAYXBwLmNvbSIsIm5hbWUiOiJTdXBlciBBZG1pbiIsInR5cGUiOiJhZG1pbiIsInJvbGUiOiJzdXBlckFkbWluIiwiaWF0IjoxNzE1NTQzNTUxLCJleHAiOjE3MTU2Mjk5NTF9.3QbCXY4ytd6LBw1fQLj940dBhKanWKOCAY4bPetApbQ';

async function Delete(endpoint: string, Id: any) {
    const res = await fetch(`http://localhost:4000/api/v1/console/${endpoint}/${Id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${authToken}`,
        }
    });
    revalidateTag(endpoint); 
    return res.json();
}

export async function ExerciseDelete(exerciseId: any) {
    return Delete('exercises', exerciseId);
}

export async function EquipmentDelete(EquipmentId: any) {
    return Delete('equipments', EquipmentId);
}

export async function MusclesDelete(MuscleId: any) {
    return Delete('muscles', MuscleId);
}
export async function WorkoutDelete(WorkoutId: any) {
    return Delete('Workouts', WorkoutId);
}

export async function IngradientDelete(IngredientId: any) {
    return Delete('Ingredients', IngredientId);
}
export async function MealDelete(MealId: any) {
    return Delete('meals', MealId);
}
