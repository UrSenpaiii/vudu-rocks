<template>
  <div class="input-group flex-nowrap w-25 w-sm-100 w-md-75">
    <span class="input-group-text">
      <i class="bi bi-search"></i>
    </span>
    <input
      v-model="model"
      type="text"
      class="form-control"
      placeholder="Search Author"
    />
  </div>
</template>

<script setup lang="ts">
const model = defineModel();
</script>

<style scoped>
@media (max-width: 768px) {
  .w-sm-100 {
    width: 100% !important;
  }
}
</style>
