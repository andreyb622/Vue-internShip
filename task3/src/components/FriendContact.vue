<template>
  <li>
    <div>{{ getFriends }}</div>
    <h2>
      <span>{{ friends[id].name }} ({{ friends[id].valid ? "valid" : "invalid" }})</span>
      <button class="delete" @click="deleteContact(id)">X</button>
      <!-- при нажатии на данную кномпу должно происходить удаление контакта -->
    </h2>
    <div>{{ getFriends }}</div>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid(id)">
      Toggle Valid
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friends[id].phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friends[id].email }}
      </li>
    </ul>
    
  </li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ["id"],
  inject: ["friends", "toggleValid", "deleteContact"],
  name: "contact", // необезательное свойство 
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  created() {
    console.log(mapGetters(['getFriends']))
  },
  computed: {
    ...mapGetters(['getFriends'])
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  },
};
</script>

<style scoped>
.delete {
  /* если что так делать нельзя */
  color: red !important;
  background:transparent !important;
  border: none !important;
  box-shadow: none !important;
  float: right;
}
</style>
