<script lang="ts">
  import { onMount } from 'svelte';
  import { inventory } from './stores';
  import AddFoodForm from './components/AddFoodForm.svelte';
  import InventoryList from './components/InventoryList.svelte';
  import 'bootstrap/dist/css/bootstrap.min.css';

  onMount(() => {
    const savedInventory = localStorage.getItem('inventory');
    if (savedInventory) {
      inventory.set(JSON.parse(savedInventory));
    }

    inventory.subscribe(value => {
      localStorage.setItem('inventory', JSON.stringify(value));
    });
  });
</script>

<main class="container py-4">
  <h1 class="mb-4">Food Inventory Manager</h1>
  
  <div class="row">
    <div class="col-md-4">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title h5">Add New Item</h2>
          <AddFoodForm />
        </div>
      </div>
    </div>
    
    <div class="col-md-8">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title h5">Current Inventory</h2>
          <InventoryList />
        </div>
      </div>
    </div>
  </div>
</main>

<style>
  :global(body) {
    background-color: #f8f9fa;
  }
</style>