<template>
  <div class="layou">
    <!-- 导航 -->
    <el-container style="border: 1px solid #eee">
      <el-header>
        <!-- @select="handleSelect" -->
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          :router="true"
        >
          <el-menu-item index="1">老师信息</el-menu-item>
          <el-menu-item index="2" :route="routeGo.about">关于我们</el-menu-item>

          <el-menu-item index="3">实训资料</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >电子信息学院官网</a
            ></el-menu-item
          >
        </el-menu>
      </el-header>

      <!-- 主体部分 -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Layout",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      routeGo: {
        about: {
          name: "about",
        },
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.el-aside {
  color: #333;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-main {
  overflow: hidden;
}
</style>
