<script lang="ts">
  import { inventory } from '../stores';
  import { formatDistance } from 'date-fns';

  function removeItem(id: string) {
    inventory.update(items => items.filter(item => item.id !== id));
  }

  function getExpirationStatus(date: string) {
    const expirationDate = new Date(date);
    const today = new Date();
    const daysUntilExpiration = Math.ceil((expirationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

    if (daysUntilExpiration < 0) return 'table-danger';
    if (daysUntilExpiration <= 3) return 'table-warning';
    return '';
  }

  function formatExpirationDate(date: string) {
    return formatDistance(new Date(date), new Date(), { addSuffix: true });
  }
</script>

<div class="table-responsive">
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Quantity</th>
        <th>Expiration</th>
        <th>Nutrition</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each $inventory as item}
        <tr class={getExpirationStatus(item.expirationDate)}>
          <td>{item.name}</td>
          <td>{item.category}</td>
          <td>{item.quantity} {item.unit}</td>
          <td>{formatExpirationDate(item.expirationDate)}</td>
          <td>
            <small>
              {item.nutritionInfo.calories} cal,
              {item.nutritionInfo.protein}g protein,
              {item.nutritionInfo.carbs}g carbs,
              {item.nutritionInfo.fat}g fat
            </small>
          </td>
          <td>
            <button
              class="btn btn-danger btn-sm"
              on:click={() => removeItem(item.id)}
            >
              Remove
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

{#if $inventory.length === 0}
  <div class="text-center text-muted py-4">
    <p>No items in inventory</p>
  </div>
{/if}