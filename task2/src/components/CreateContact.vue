<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" />
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" />
    </div>
    <div>
      <label>Email</label>
      <input type="email" />
    </div>
    <button>
      add contact
    </button>
  </form>
</template>

<script>
export default {
  name: "new-contact", // необезательное свойство 
  data() {
    return {};
  },
  methods: {},
};
</script>

<style></style>
