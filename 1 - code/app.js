new Vue({
  data() {
    return {
      counter: 0,
      Name: '',
      editName:"",
      id: "events"
    }
  },
  watch: {
    counter(value, oldValue){
      if(value === 10 ){
        this.counter = 0
      }
    }
  },
  computed:{
     fullName() {
      console.log('fullname method')
       return this.name + "second Name"
     }
  },
  methods:{
    increase(e){
      this.counter++
    },
    decrease(){
      this.counter--
    },
    changeName(e){ 
      this.editName = e.target.value
    },
    setName(){
      this.Name = this.editName
    },
    deleteName(){
      this.editName = ""
    }
  }
}).$mount("#events"); 

