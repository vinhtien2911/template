<template>
  <!--begin::Card-->
  <div class="card"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "dark-mode",
  components: {},
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Dark mode", ["Getting Started"]);
    });

    const htmlCode = `<body class="dark-mode">`;

    return {
      htmlCode,
    };
  },
});
</script>
