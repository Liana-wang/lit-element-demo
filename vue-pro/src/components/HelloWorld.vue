<template>
  <div>
    <lit-button :data.prop="options" @litClick="myEvent">按钮</lit-button>
    <div>
      基本用法：
      <lit-checkbox @litClick="checkClick" :checked="checked">
        行行行
      </lit-checkbox>
    </div>
    <div>
      禁用：
      <lit-checkbox @litClick="checkClick" :disabled="true">
        哈哈哈
      </lit-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "",
      checked: true,
      options: [
        {
          id: "1",
          name: "React",
        },
        {
          id: "2",
          name: "Vue",
        },
        {
          id: "3",
          name: "Ng",
        },
      ],
      selected: {
        id: "2",
        name: "Vue",
      },
    };
  },
  methods: {
    myEvent: function (event) {
      this.checked = false;
      console.log("click", event);
    },
    checkClick: function ({ detail }) {
      this.checked = detail.checked;
      console.log("check", detail);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
