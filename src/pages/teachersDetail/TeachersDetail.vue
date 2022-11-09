<template>
  <div class="teachersDetail">
    <div class="teacher-head">
      <img :src="teacher.photo" alt="" />
    </div>
    <div class="info-box">
      <div class="name">
        <span>{{ teacher.name === "" ? "张三" : teacher.name }}</span>
      </div>
      <div class="info-text">
        <p>{{ teacher.introduction }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeachersDetail",

  data() {
    return {
      teacher: {
        name: "",
        position: "",
        introduction: "",
        photo: "",
        department: "",
      },
    };
  },
  beforeMount() {
    this.teacher = this.$route.params.teacher;
  },
};
</script>

<style scoped>
.teachersDetail {
  width: 100%;
  height: 100%;
  position: relative;
}
.teacher-head {
  display: flex;
  width: 20%;
  height: 200px;
  position: relative;
  left: 100px;
  top: 50px;
}
.teacher-head > img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 1px solid rgba(148, 143, 143, 0.386);
}
.info-box {
  display: flex;
  width: 50%;
  height: 700px;
  position: relative;
  left: 400px;
  top: -150px;
  border: 1px solid rgba(171, 168, 168, 0.24);
  border-radius: 10px;
}
.name {
  display: flex;
  position: relative;
  top: 3%;
  left: 45%;
  height: 5%;
}
.name > span {
  color: red;
  font-weight: 600;
  font-size: 20px;
}
.info-text {
  display: flex;
  position: relative;
  width: 80%;
  top: 10%;
  left: 5%;
}
.info-text > p {
  float: left;
  letter-spacing: -2px;
  text-indent: 2em;
  line-height: 50px;
  letter-spacing: 3px;
  letter-spacing: 3px;
}
</style>
