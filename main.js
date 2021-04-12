Vue.config.devtools = true;

var app = new Vue(
  {
  el: '#root',
  data: {
    inputSearch: '',
    risultati: [],
  },

  methods: {
    search: function () {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2b27e667a5b6f8ecd1719f3f32e10b50&query=${this.inputSearch}&language=it`)
        .then((response) =>{
          // console.log(response.data.results);
          this.risultati = response.data.results;
        })
    }
  }

}

);
