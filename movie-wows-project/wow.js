var { createApp } = Vue;

createApp({
  data() {
    return {
      randomMovie: null,
      favourites: [],
      apiUrl : "https://owen-wilson-wow-api.onrender.com/wows/random",
    }
  },
  methods: {
    async getRandomMovie() {
        const result = await fetch(this.apiUrl);
        const data = await result.json();
        this.randomMovie = data[0];
    },
    addFavourite() {
      this.favourites.push(this.randomMovie);
      this.saveToLocalStorage();
    },
    loadFavourite(movie) {
      this.randomMovie = movie;
    },
    saveToLocalStorage() {
      const parsed = JSON.stringify(this.favourites);
      localStorage.setItem('favourites', parsed);
    },
  },
  created() {
    this.getRandomMovie();
    if (localStorage.getItem('favourites')) {
      try {
        this.favourites = JSON.parse(localStorage.getItem('favourites'));
      } catch(e) {
        localStorage.removeItem('favourites');
      }
    }
  }
}).mount('#wow_app');


