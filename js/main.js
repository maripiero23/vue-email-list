const { createApp } = Vue;

const app = createApp({
  data () {
    return {
      listaEmails: [],
      listaProvvisoria: [],

    };
    counter: 0

  },
  methods: {

        // recupero la lista mail tramite api
        addEmail(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp) => {
              this.listaProvvisoria.push(resp.data.response)
              this.counter++
              console.log(this.counter);
              if(this.counter === 10){
                this.listaEmails = this.listaProvvisoria
              }

    
            });
        } 


    },
    
  
  mounted () {
    this.counter = 0
    for (let i = 1; i <= 10; i++) {
        this.addEmail();
    
  }
}
}).mount('#app');