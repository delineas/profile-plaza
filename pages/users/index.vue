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

      // return this.users.filter(
      //   user =>
      //     this.selectedCountries.every(
      //       choice => user.country.indexOf(choice) != -1
      //     )
      // );

      let activeUsers = [];
      let filters = this.selectedCountries;

      this.users.forEach(user => {
        function userContainsFilter(filter) {
          return user.country.indexOf(filter) != -1;
        }

        if (filters.every(userContainsFilter)) {
          activeUsers.push(user);
        }
      });

      return activeUsers;
    }
  }
  // transition: {
  //   name: 'fade'
  // }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
