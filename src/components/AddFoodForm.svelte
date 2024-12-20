<script lang="ts">
  import { inventory } from '../stores';
  import { FoodCategory } from '../types';
  import type { FoodItem } from '../types';
  
  let name = '';
  let category = FoodCategory.PANTRY;
  let expirationDate = '';
  let quantity = 1;
  let unit = 'piece';
  let calories = 0;
  let protein = 0;
  let carbs = 0;
  let fat = 0;

  function handleSubmit() {
    const newItem: FoodItem = {
      id: crypto.randomUUID(),
      name,
      category,
      expirationDate,
      quantity,
      unit,
      nutritionInfo: {
        calories,
        protein,
        carbs,
        fat
      }
    };

    inventory.update(items => [...items, newItem]);
    
    // Reset form
    name = '';
    category = FoodCategory.PANTRY;
    expirationDate = '';
    quantity = 1;
    unit = 'piece';
    calories = 0;
    protein = 0;
    carbs = 0;
    fat = 0;
  }
</script>

<form on:submit|preventDefault={handleSubmit} class="needs-validation">
  <div class="mb-3">
    <label for="name" class="form-label">Name</label>
    <input
      type="text"
      class="form-control"
      id="name"
      bind:value={name}
      required
    />
  </div>

  <div class="mb-3">
    <label for="category" class="form-label">Category</label>
    <select class="form-select" id="category" bind:value={category}>
      {#each Object.values(FoodCategory) as cat}
        <option value={cat}>{cat}</option>
      {/each}
    </select>
  </div>

  <div class="mb-3">
    <label for="expiration" class="form-label">Expiration Date</label>
    <input
      type="date"
      class="form-control"
      id="expiration"
      bind:value={expirationDate}
      required
    />
  </div>

  <div class="row mb-3">
    <div class="col">
      <label for="quantity" class="form-label">Quantity</label>
      <input
        type="number"
        class="form-control"
        id="quantity"
        bind:value={quantity}
        min="0"
        step="0.1"
        required
      />
    </div>
    <div class="col">
      <label for="unit" class="form-label">Unit</label>
      <input
        type="text"
        class="form-control"
        id="unit"
        bind:value={unit}
        required
      />
    </div>
  </div>

  <div class="mb-3">
    <h6>Nutrition Info (per serving)</h6>
    <div class="row">
      <div class="col">
        <label for="calories" class="form-label">Calories</label>
        <input
          type="number"
          class="form-control"
          id="calories"
          bind:value={calories}
          min="0"
        />
      </div>
      <div class="col">
        <label for="protein" class="form-label">Protein (g)</label>
        <input
          type="number"
          class="form-control"
          id="protein"
          bind:value={protein}
          min="0"
          step="0.1"
        />
      </div>
    </div>
    <div class="row mt-2">
      <div class="col">
        <label for="carbs" class="form-label">Carbs (g)</label>
        <input
          type="number"
          class="form-control"
          id="carbs"
          bind:value={carbs}
          min="0"
          step="0.1"
        />
      </div>
      <div class="col">
        <label for="fat" class="form-label">Fat (g)</label>
        <input
          type="number"
          class="form-control"
          id="fat"
          bind:value={fat}
          min="0"
          step="0.1"
        />
      </div>
    </div>
  </div>

  <button type="submit" class="btn btn-primary">Add Item</button>
</form>