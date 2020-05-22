<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex justify-between bg-blue-900">
        <nuxt-link to="/" class="m-4">
            <div class="flex flex-col">
                <h1 class="text-3xl text-white font-bold">Reactivers</h1>
                <h1 class="text-mc text-white font-bold">Directorio developers</h1>
            </div>
        </nuxt-link>
        <div class="min-h-full flex">
            <nuxt-link to="/about" class="mx-3 my-1 px-2 md:px-6 py-8 bg-blue-600 font-bold text-gray-200">¿Qué es esto?</nuxt-link>
            <nuxt-link to="/signup" class="mx-3 my-1 px-2 md:px-6 py-8 bg-blue-600 font-bold text-gray-200">Añadir mi ficha</nuxt-link>
        </div>
    </header> 

    <div class="flex-1 flex-wrap bg-gradient-t-black-900-300">
      {{skills}}
      <div class="m-4 mb-0">
        <div class="flex flex-wrap">
          <button
            type="button"
            class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white"
          >
            Full Stack
          </button>
          <button
            type="button"
            class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white"
          >
            Frontend
          </button>
          <button
            type="button"
            class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white"
          >
            Backend
          </button>
        </div>
        <category-filters :categories="skills" @change="selectSkills = $event" ></category-filters>
      </div>

      <div class="md:flex md:flex-wrap p-2">
        <profile-item
          v-for="(profile, index) in activeProfiles"
          :key="index"
          :profile="profile"
        ></profile-item>
      </div>
    </div>

    <footer class="bg-blue-900 p-4 text-center">
      <a href="#" class="text-white font-bold">Premium Daniel Primo</a>
    </footer>
  </div>
</template>

<script>
import profiles from "~/static/profiles.json";
import ProfileItem from "~/components/ProfileItem.vue";
import CategoryFilters from "~/components/CategoryFilters.vue";

export default {
  components: {
    ProfileItem,
    CategoryFilters
  },
  data() {
    return {
      selectSkills: [],
      skills: [],
      profiles,
    };
  },
  computed: {
    activeProfiles: function() {
      if (this.selectSkills.length == 0) {
        return this.profiles;
      }

      return this.profiles.filter((profile) =>
        this.selectSkills.every(
          (choice) => profile.skills.indexOf(choice) != -1
        )
      );
    },
  },
  mounted() {
    this.getSkills()
  },
  methods: {
    getSkills() {
      profiles.map(item => {
        item.skills.map(skill => {
          if(!this.checkIfExists(skill, this.skills)) {
            this.skills.push(skill);
          }
        })
      })
    },
    checkIfExists(search, items) {
      return items.some(item => item === search)
    }
  },
};
</script>
