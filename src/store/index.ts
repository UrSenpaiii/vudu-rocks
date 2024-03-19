import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ParsedPost, Post, User } from "@/types";
import axios from "axios";

export const useStore = defineStore("store", () => {
  const posts = ref<Array<Post>>([]);
  const users = ref<Array<User>>([]);

  const parsedPosts = computed(
    (): Array<ParsedPost> =>
      posts.value.map((post: Post) => {
        const author =
          users.value.find((user: User) => post.userId === user.id)?.name ||
          "Some guy";
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { userId, ...newPost } = post;

        return { ...newPost, author };
      }),
  );

  const fetchData = async () => {
    await axios.get("/posts").then((r) => (posts.value = r.data));
    await axios.get("/users").then((r) => (users.value = r.data));
  };

  return { posts, users, parsedPosts, fetchData };
});
