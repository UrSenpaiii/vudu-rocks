<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { ParsedPost } from "@/types";

const model = defineModel<Array<ParsedPost>>();

const props = defineProps({
  items: Array,
});

const perPage = 9;
const page = ref(1);

const pages = computed(() => Math.ceil(props.items?.length / perPage));
const modelUpdate = () => {
  model.value = props.items.slice(
    (page.value - 1) * perPage,
    page.value * perPage,
  );
};

watch(
  () => props.items,
  () => {
    modelUpdate();
    page.value = 1;
  },
);

const nextPage = () => {
  if (page.value !== pages.value) page.value += 1;
  modelUpdate();
};

const backPage = () => {
  if (page.value !== 1) page.value -= 1;
  modelUpdate();
};

const goToPage = (numPage: number) => {
  page.value = numPage;
  modelUpdate();
};
</script>

<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li
        @click.prevent="backPage"
        :class="['page-item', { disabled: page === 1 }]"
      >
        <a class="page-link" href="#">Prev</a>
      </li>

      <li
        v-for="item in pages"
        :key="item"
        @click.prevent="goToPage(item)"
        :class="['page-item', { active: page === item }]"
      >
        <a class="page-link" href="#">{{ item }}</a>
      </li>

      <li
        @click.prevent="nextPage"
        :class="['page-item', { disabled: page === pages }]"
      >
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
