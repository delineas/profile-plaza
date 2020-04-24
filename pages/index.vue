<template>
  <div class="flex flex-col min-h-screen">
    <header class="flex justify-between p-4 bg-blue-900">
      <h1 class="text-2xl text-white font-bold">Profile Plaza</h1>
      <input
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2"
        type="search"
        placeholder="Busca..."
      />
    </header>

    <div class="flex-1 flex-wrap bg-gradient-t-black-900-300">
      <div class="m-4 mb-0">
        <div class="flex flex-wrap">
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Full Stack</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Frontend</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Backend</button>
        </div>
        <div class="flex mt-3 flex-wrap">
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">PHP</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Python</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Javascript</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Node</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">VUE</button>
          <button type="button" class="p-2 px-4 mr-2 rounded-full bg-red-600 text-white">Now</button>
        </div>
        <div class="flex mt-3">
          <label>
            <input type="checkbox" value="php" v-model="selectSkills" />PHP
          </label>
          <label>
            <input type="checkbox" value="node" v-model="selectSkills" />Node
          </label>
        </div>
      </div>

      <div class="md:flex md:flex-wrap p-2">
        <profile-item v-for="profile in activeProfiles" :profile="profile"></profile-item>
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

export default {
  components: {
    ProfileItem
  },
  data() {
    return {
      selectSkills: [],
      profiles
    };
  },
  computed: {
    activeProfiles: function() {
      if (this.selectSkills.length == 0) {
        return this.profiles;
      }

      return this.profiles.filter(profile =>
        this.selectSkills.every(
          choice => profile.skills.indexOf(choice) != -1
        )
      );
    }
  }
};
</script>