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
    <button @click="addNewContact(name, phone, email)">
      add contact
    </button>
  </form>
</template>

<script>
export default {
  name: "new-contact", // необезательное свойство 
  inject: ["addNewContact"],
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    };
  },
  methods: {
    resetForm() {
      this.contactName = "";
      this.contactPhone = "";
      this.contactEmail = "";
    }
  },
};
</script>

<style></style>
