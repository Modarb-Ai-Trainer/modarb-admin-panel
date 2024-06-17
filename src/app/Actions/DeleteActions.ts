'use server'
import { revalidateTag } from "next/cache";
const authToken = process.env.token;
async function Delete(endpoint: string, Id: any) {
    const res = await fetch(`${process.env.server}/api/v1/console/${endpoint}/${Id}`, {
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
export async function MealPlanDelete(MealPlanId:any) {
    return Delete('mealplans',MealPlanId)
}
