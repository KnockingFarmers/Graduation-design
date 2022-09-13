<template>
  <div class="info-box">
    <div class="box-img">
      <img :src="teacherIntroduction.photo" alt="" />
    </div>
    <div class="info-name">
      <p>{{ teacherIntroduction.name }}</p>
    </div>
    <div class="info-text">
      <p>
        {{ teacherIntroduction.introduction }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoBox",
  props: ["teacherIntroduction", "clicked"],
  data() {
    return {};
  },
  computed: {
    sty() {
      if (this.clicked) {
        return "info-box-ready";
      }
      return "info-box";
    },
  },

  methods: {},
};
</script>

<style scoped>
.info-box {
  padding: 5px;
  width: 150px;
  height: 280px;
  border-radius: 10px;
  margin: 5px;
  box-shadow: 0px 0px 1px 1px rgb(76, 79, 79);
}
.info-box:active {
  background-color: #fff;
}
.info-box:hover {
  background-color: #409eff;
}

.box-img {
  display: flex;
  width: 100%;
  height: 50%;
}
.box-img > img {
  width: 99%;
  height: 99%;
}
.info-name {
  width: 100%;
  height: 5%;
}
.info-name > p {
  text-align: left;
  width: 100%;
  font-size: 10px;
  font-weight: 700;
  line-height: 100%;
}
.info-text {
  display: flex;
  width: 100%;
  height: 30%;
}
.info-text > p {
  height: 100%;
  width: 100%;
  font-size: 10px;
  color: rgb(72, 70, 70);
  word-break: break-all;
  overflow: hidden;
}
</style>
