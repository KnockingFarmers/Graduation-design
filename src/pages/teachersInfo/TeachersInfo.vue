<template>
  <div class="teachersInfo">
    <InfoBoxVue
      :clicked="readyClicked"
      :teacherIntroduction="teachers"
      @mouseenter="readyClick"
      @mouseout="noClick"
    />
    <InfoBoxVue :clicked="readyClicked" :teacherIntroduction="teachers" />
  </div>
</template>

<script>
import InfoBoxVue from "@/components/infoBox/InfoBox.vue";
export default {
  name: "TeachersInfo",
  components: { InfoBoxVue },
  data() {
    return {
      teachers: {},
      readyClicked: false,
    };
  },

  methods: {
    readyClick() {
      console.log(this.readyClicked);
      this.readyClicked = true;
    },
    noClick() {
      console.log(this.readyClicked);
      this.readyClicked = false;
    },
  },
};
</script>

<style scoped>
.teachersInfo {
  display: flex;
}
</style>
