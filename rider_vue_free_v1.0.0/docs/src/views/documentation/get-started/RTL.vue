<template>
  <div class="card"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";

export default defineComponent({
  name: "rtl",
  components: {},
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Vue Right-to-Left (RTL)", ["Getting Started"]);
    });

    const htmlCode = `<body direction="rtl" dir="rtl" style="direction: rtl">`;

    return {
      htmlCode,
    };
  },
});
</script>
