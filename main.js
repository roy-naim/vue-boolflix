Vue.config.devtools = true;


var app = new Vue(
  {
  el: '#root',
  data: {
    inputSearch: '',
    risultati: [],
    api_key: '2b27e667a5b6f8ecd1719f3f32e10b50',
    language: 'it',
    uri: 'https://api.themoviedb.org/3',
  },

  methods: {
    search: function () {
      this.risultati = []
      axios.get(`${this.uri}/search/movie?api_key=${this.api_key}&query=${this.inputSearch}&language=${this.language}`)
        .then((response) =>{
          // console.log(response.data.results);
          this.risultati = [...this.risultati, ...response.data.results];
        })
      axios.get(`${this.uri}/search/tv?api_key=${this.api_key}&query=${this.inputSearch}&language=${this.language}`)
        .then((response) =>{
          // console.log(response.data.results);
          this.risultati = [...this.risultati, ...response.data.results];
        })
    },

    getTitle: function (obj) {
      if (obj.title) {
        return obj.title
      } else {
        return obj.name
      }
    },

    getOriginalTitle: function (obj) {
      if (obj.original_title) {
        return obj.original_title
      } else {
        return obj.original_name
      }
    },

    getVoteAverage: function (obj) {
      if (obj.vote_average) {
        return obj.vote_average
      }
    },
  }
});
