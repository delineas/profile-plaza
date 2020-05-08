<template>
  <div class="flex mt-3 flex-wrap">
    <label
      v-for="category in categories"
      :key="category"
      class="p-2 px-4 mr-2 rounded-full text-white"
      :class="setStyle(category)"
    >
      <input
        class="hidden"
        type="checkbox"
        :value="category"
        v-model="selected"
        @change="$emit('change', selected)"
      />{{ category }}
    </label>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      selected: [],
    };
  },
  methods: {
      setStyle(category) {
          // SI la categoría esta marcada return 'bg-black-800'
          if(this.selected.some(cat => cat === category)) {
              return 'bg-black-800';
          }
          // ELSE devuelve 'bg-red-600'
          return 'bg-red-600';
          //return this.selected.includes(category) ? 'bg-black-800' : 'bg-black-300'
      }
  }
};
</script>

<style></style>
