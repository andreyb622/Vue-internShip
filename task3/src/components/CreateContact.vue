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
import {mapActions} from 'vuex'

export default {
  name: "new-contact", // необезательное свойство 
  data() {
    return {
      name: '',
      phone: '',
      email: ''
    };
  },
  methods: {
    ...mapActions(['addContact']),
    addNewContact() {
      this.addContact({
        name: this.name,
        phone: this.phone,
        email: this.email
        })
      this.resetForm()
    },
    resetForm() {
      this.name = "";
      this.phone = "";
      this.email = "";
    }
  },
};
</script>

<style></style>
