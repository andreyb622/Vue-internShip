<template>
  <form @submit.prevent="submitForm">
    <legend>Sign in</legend>
    <div>
      <label for="name">User name</label>
      <input id="name" type="text">
      <label for="pass">Password</label>
      <input id="pass" type="text">
    </div>
    <button type="button" @click="login">login</button>
  </form>
</template>

<script>
export default {
  inject: ["login"]
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 2rem auto;
  max-width: 30rem;
  box-shadow: 0 2px 8px rgb(0 0 0 / 26%);
  border-radius: 12px;
  padding: 1rem;
}

div {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  row-gap: 0.5rem;
  margin: 1rem 0;
}

button {
  background-color: #11005c;
  border-radius: 0.5rem;
  text-transform: uppercase;
  color: #fff;
  padding: 0.5rem 2rem;
}

legend {
  font-weight: bold;
  font-size: 2rem;
}
</style>