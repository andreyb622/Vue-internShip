const app = new Vue({
  data() {
    return {
      items: [],
      enteredItemValue: ""
    };
  },
  methods: {
    addItem() {
      this.items.push(this.enteredItemValue)
    },
    removeItem(index) {
      // два возможных варианта
      //this.items = this.items.filter((item, i)=> i != index)
      this.items.splice(index, 1)
    }
  }
});

app.$mount('#user-items');
