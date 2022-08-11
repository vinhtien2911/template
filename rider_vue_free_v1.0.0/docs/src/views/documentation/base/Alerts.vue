<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <Overview></Overview>
      <BasicExample></BasicExample>
      <SolidColors></SolidColors>
      <LightColors></LightColors>
      <BorderExamples></BorderExamples>
      <RichContentExample></RichContentExample>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/alerts/Overview.vue";
import BasicExample from "@/views/documentation/base/alerts/BasicExample.vue";
import SolidColors from "@/views/documentation/base/alerts/SolidColors.vue";
import LightColors from "@/views/documentation/base/alerts/LightColors.vue";
import BorderExamples from "@/views/documentation/base/alerts/BorderExamples.vue";
import RichContentExample from "@/views/documentation/base/alerts/RichContentExample.vue";

export default defineComponent({
  name: "badges",
  components: {
    Overview,
    BasicExample,
    SolidColors,
    LightColors,
    BorderExamples,
    RichContentExample,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Alerts", ["Base"]);
    });
  },
});
</script>
