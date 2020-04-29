<template>
  <div>
    <h1>User</h1>
    <span v-for="country in countries" :key="country">
      <input
        type="checkbox"
        :value="country"
        v-model="selectedCountries"
      /><label>{{ country }}</label>
    </span>
    <ul>
      <li v-for="user in activeUsers" :key="user.id">
        <nuxt-link :to="`/users/${user.id}`">{{ user.first_name }}</nuxt-link>
        {{ user.country }}
      </li>
    </ul>
  </div>
</template>

<script>
import users from "~/static/users.json";

export default {
  data() {
    return {
      selectedCountries: [],
      countries: ["ES", "BO"],
      users
    };
  },
  asyncData({ params }) {
    return { users };
  },
  computed: {
    activeUsers: function() {
      if (this.selectedCountries.length == 0) return this.users;

      return this.users.filter(
        user =>
          this.selectedCountries.every(
            choice => user.country.indexOf(choice) != -1
          )
      );

    }
  }
};
</script>

<style>
</style>
