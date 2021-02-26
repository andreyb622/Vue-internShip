<template>
  <li>
    <h2>
      <span>{{ getFriends[id].name }} ({{ getFriends[id].valid ? "valid" : "invalid" }})</span>
      <button class="delete" @click="removeContact(getFriends[id].id)">X</button>
      <!-- при нажатии на данную кномпу должно происходить удаление контакта -->
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid(getFriends[id].id)">
      Toggle Valid
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ getFriends[id].phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ getFriends[id].email }}
      </li>
    </ul>
    
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ["id"],
  name: "contact", // необезательное свойство 
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  computed: {
    ...mapGetters(['getFriends'])
  },
  methods: {
    ...mapActions(['deleteContact', 'changeValid']),
    removeContact(id) {
      this.deleteContact(id)
    },
    toggleValid(id){
      this.changeValid(id)
    },
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
