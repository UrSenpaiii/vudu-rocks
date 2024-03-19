<template>
  <div class="card text-start">
    <div class="card-body">
      <h5 class="card-title text-primary text-truncate fw-bold text-capitalize">
        {{ title }}
      </h5>
      <p class="card-text text-ellipsis">
        {{ text }}
      </p>
      <p class="card-text">
        <small class="text-body-secondary">{{ author }}</small>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: String,
  text: String,
  author: String,
});
</script>

<style scoped lang="scss">
.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
</style>
