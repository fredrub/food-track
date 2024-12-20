import { writable } from 'svelte/store';
import type { FoodItem } from './types';

export const inventory = writable<FoodItem[]>([]);