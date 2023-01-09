const { createApp } = Vue;

createApp({
  data() {
    return {
      todoList: [],
      apiUrl: "../server.php",
    };
  },
  methods: {
    getTodo() {
      axios.get(this.apiUrl).then((res) => {
        this.todoList = res.data;
      });
    },
  },
  mounted() {
    this.getTodo();
  },
}).mount("#app");
