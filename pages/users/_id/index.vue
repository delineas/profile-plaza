<template>
  <div>
    <h1>User</h1>
    <h2>{{ user.first_name }} {{ user.last_name }}</h2>
    <p><img :src="user.avatar" /></p>
  </div>
</template>

<script>
import users from "~/static/users.json";

export default {
  asyncData({ params }) {
    return { user: users.filter(user => user.id == params.id)[0] };
  },
  validate({ params }) {
    if (params.id > 10) {
      return false;
    }
    return true;
  }
};
</script>

<style></style>
