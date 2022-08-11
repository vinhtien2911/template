<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <Overview></Overview>

      <BasicExamples></BasicExamples>

      <OffsetExample></OffsetExample>

      <ButtonWithTextExample></ButtonWithTextExample>

      <CircleExample></CircleExample>

      <OutlineExample></OutlineExample>

      <OutlineAndCircleExample></OutlineAndCircleExample>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/pagination/Overview.vue";
import BasicExamples from "@/views/documentation/base/pagination/BasicExamples.vue";
import OffsetExample from "@/views/documentation/base/pagination/OffsetExample.vue";
import ButtonWithTextExample from "@/views/documentation/base/pagination/ButtonWithTextExample.vue";
import CircleExample from "@/views/documentation/base/pagination/CircleExample.vue";
import OutlineExample from "@/views/documentation/base/pagination/OutlineExample.vue";
import OutlineAndCircleExample from "@/views/documentation/base/pagination/OutlineAndCircleExample.vue";

export default defineComponent({
  name: "pagination",
  components: {
    Overview,
    BasicExamples,
    OffsetExample,
    ButtonWithTextExample,
    CircleExample,
    OutlineExample,
    OutlineAndCircleExample,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Pagination", ["Base"]);
    });
  },
});
</script>
