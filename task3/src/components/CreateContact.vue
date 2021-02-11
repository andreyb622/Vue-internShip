<template>
  <form>
    <div>
      <label>Name</label>
      <input type="text" v-model="name"/>
    </div>
    <div>
      <label>Phone</label>
      <input type="tel" v-model="phone"/>
    </div>
    <div>
      <label>Email</label>
      <input type="email" v-model="email"/>
    </div>
    <button @click.prevent="addNewContact">
      add contact
    </button>
  </form>
</template>

<script>
export default {
  name: "new-contact", // необезательное свойство 
  emits: ["addNewContact"],
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    };
  },
  methods: {
    addNewContact() {
      this.$emit("addNewContact", 
        this.name,
        this.phone,
        this.email,
      )
    }
  },
};
</script>

<style></style>
