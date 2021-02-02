new Vue({
  data() {
    return {
      firstBox: false, 
      secondBox: false, 
      thirdBox: false, 
    };
  },
  methods: {
    selected(boxNumber){
      if (boxNumber == 1) {
        this.firstBox = !this.firstBox
      } else if (boxNumber == 2) {
        this.secondBox = !this.secondBox
      } else if (boxNumber == 3) {
        this.thirdBox = !this.thirdBox
      }
    } 
  }

}).$mount("#styling");
