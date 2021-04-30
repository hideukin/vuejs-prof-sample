Vue.createApp({
  data: function () {
    return {
      count: 0,
    };
  },
  methods: {
    onclickCountUp: function (event) {
      this.count += 1;
    },
  },
}).mount("#app");
