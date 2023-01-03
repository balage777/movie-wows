var { createApp } = Vue;

createApp({
  data() {
    return {
      randomMovie: {'movie':'Random movie'},
      apiUrl : "https://owen-wilson-wow-api.onrender.com/wows/random",
    }
  },
  methods: {
    async getRandomMovie() {
        const result = await fetch(this.apiUrl);
        const data = await result.json();
        this.randomMovie = data[0];
    }  
  },
  created() {
    this.getRandomMovie();
  }
}).mount('#wow_app');


