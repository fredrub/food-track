export interface FoodItem {
  id: string;
  name: string;
  category: FoodCategory;
  expirationDate: string;
  nutritionInfo: NutritionInfo;
  quantity: number;
  unit: string;
}

export interface NutritionInfo {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export enum FoodCategory {
  PRODUCE = 'Produce',
  MEAT = 'Meat',
  DAIRY = 'Dairy',
  PANTRY = 'Pantry',
  FROZEN = 'Frozen',
  OTHER = 'Other'
}