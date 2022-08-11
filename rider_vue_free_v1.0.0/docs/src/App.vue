<template>
  <router-view />
</template>

<style lang="scss">
@import "~bootstrap-icons/font/bootstrap-icons.css";
@import "~sweetalert2/dist/sweetalert2.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~socicon/css/socicon.css";
@import "~line-awesome/dist/line-awesome/css/line-awesome.css";
@import "~@vueform/multiselect/themes/default.css";
@import "~prism-themes/themes/prism-shades-of-purple.css";
@import "~element-plus/lib/theme-chalk/index.css";

// Main demo style scss
@import "assets/sass/plugins";
@import "assets/sass/style";
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "app",
  components: {},
});
</script>
