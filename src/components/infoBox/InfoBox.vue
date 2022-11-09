<template>
  <div class="info-box" @click="goDetails(teacherIntroduction)">
    <div class="box-img">
      <img :src="teacherIntroduction.photo" alt="" />
    </div>
    <div class="info-name">
      <span>{{ teacherIntroduction.name }}</span>
    </div>
    <div class="title">
      <span>职称: {{ teacherIntroduction.position }}</span>
    </div>
    <div class="department">
      <span>部门: {{ teacherIntroduction.department }}</span>
    </div>
    <div class="der">
      <el-divider></el-divider>
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
  computed: {},

  methods: {
    goDetails(itemData) {
      console.log(111);
      this.$router.push({
        name: "teachersDetail",
        params: {
          teacher: itemData,
        },
      });
    },
  },
};
</script>

<style scoped>
.info-box {
  padding: 5px;
  width: 350px;
  height: 150px;
  border-radius: 5px;
  margin: 5px;
  box-shadow: 0px 0px 1px 1px rgb(33, 34, 34);
  margin: 20px;
}
.info-box:active {
  background-color: #fff;
}
.info-box:hover {
  background-color: #409eff;
}

.box-img {
  display: flex;
  width: 40%;
  height: 100%;
}
.box-img > img {
  width: 99%;
  height: 99%;
}
.info-name {
  position: relative;
  top: -140px;
  width: 100%;
  left: 150px;
  height: 5%;
}
.info-name > span {
  text-align: left;
  width: 100%;
  font-size: 17px;
  font-weight: 700;
  line-height: 100%;
  color: #f023e9;
}
.title {
  position: relative;
  width: 100px;
  height: 30px;
  left: 150px;
  top: -120px;
}
.title > span {
  text-align: left;
  width: 100%;
  font-size: 15px;
  line-height: 0px;
  font-weight: 300;
}
.department {
  position: relative;
  width: 130px;
  height: 30px;
  left: 150px;
  top: -125px;
}
.department > span {
  text-align: left;
  width: 100%;
  font-size: 15px;
  line-height: 0px;
  font-weight: 300;
}

.der {
  width: 60%;
  left: 40%;
  position: relative;
  top: -150px;
}
.info-text {
  position: relative;
  top: -175px;
  left: 40%;
  width: 60%;
  height: 30%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;

  -webkit-box-orient: vertical;
}
.info-text > P {
  font-size: 10px;
}
</style>
