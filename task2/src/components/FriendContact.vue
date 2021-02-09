<template>
  <li>
    <h2>
      <span>{{ name }} ({{ valid ? "valid" : "invalid" }})</span>
      <button class="delete">X</button>
      <!-- при нажатии на данную кномпу должно происходить удаление контакта -->
    </h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleValid">
      Toggle Valid
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAdress }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id: String,
    name: {
      type: String,
      required: true,
      default: "0", // function () => logic value
      validator: function(value) {
        return value.length > 0;
      },
    },
    phoneNumber: String,
    emailAdress: String,
    valid: {
      type: Boolean,
      default: false,
    },
  },
  // emits:["toggle-valid"],
  emits: {
    "toggle-valid": function(id) {
      if (id) {
        return true;
      } else {
        return false;
      }
    },
  },
  name: "contact", // необезательное свойство 
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleValid() {
      console.log(1);
      this.$emit("toggle-valid", this.id);
    },
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
