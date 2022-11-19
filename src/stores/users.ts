import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("users", {
  state: () => {
    return {
      users: [],
    };
  },
});
