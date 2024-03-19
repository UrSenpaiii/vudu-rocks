<script setup lang="ts">
import SearchFilter from "@/components/SearchFilter.vue";
import { useStore } from "@/store";
import { computed, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import PostCard from "@/components/PostCard.vue";
import PagePaginator from "@/components/PagePaginator.vue";
import { ParsedPost } from "@/types";

const store = useStore();
const { parsedPosts } = storeToRefs(store);
const filter = ref("");
const paginatedPosts = ref<Array<ParsedPost>>([]);

const filteredPosts = computed(() =>
  parsedPosts.value.filter((post) =>
    post.author.toLowerCase().includes(filter.value.toLowerCase()),
  ),
);

onMounted(async () => {
  await store.fetchData();
  paginatedPosts.value = parsedPosts.value.slice(0, 9);
});
</script>

<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <search-filter v-model="filter" />
    </div>
    <div class="row row row-cols-1 row-cols-sm-2 row-cols-md-3 my-4">
      <div v-for="post in paginatedPosts" :key="post.id">
        <post-card
          class="my-2"
          :author="post.author"
          :text="post.body"
          :title="post.title"
        />
      </div>
    </div>
    <page-paginator v-model="paginatedPosts" :items="filteredPosts" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import "~bootstrap/dist/css/bootstrap.css";
@import "~bootstrap-icons/font/bootstrap-icons.css";
</style>
