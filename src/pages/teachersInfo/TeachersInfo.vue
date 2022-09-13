<template>
  <div class="teachersInfo">
    <InfoBoxVue
      v-for="(item, index) in teachers"
      :key="index"
      :clicked="readyClicked"
      :teacherIntroduction="item"
    />
  </div>
</template>

<script>
import InfoBoxVue from "@/components/infoBox/InfoBox.vue";
import { teacherIntroduction } from "./data.js";
export default {
  name: "TeachersInfo",
  components: { InfoBoxVue },
  data() {
    return {
      teachers: teacherIntroduction,
      readyClicked: false,
    };
  },

  methods: {},
  mounted() {
    console.log(this.teachers);
  },
};
</script>

<style scoped>
.teachersInfo {
  display: flex;
  padding: 10px;
  width: 100%;
  overflow: hidden;
  justify-content: left;
  flex-flow: wrap;
}
</style>
