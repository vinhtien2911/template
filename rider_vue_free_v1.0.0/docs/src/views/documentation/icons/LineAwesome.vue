<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <Overview></Overview>
      <Usage></Usage>
      <IconColors></IconColors>
      <IconSizes></IconSizes>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/icons/line-awesome/Overview.vue";
import Usage from "@/views/documentation/icons/line-awesome/Usage.vue";
import IconColors from "@/views/documentation/icons/line-awesome/IconColors.vue";
import IconSizes from "@/views/documentation/icons/line-awesome/IconSizes.vue";

export default defineComponent({
  name: "line-awesome",
  components: {
    Overview,
    Usage,
    IconColors,
    IconSizes,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Line Awesome", ["Icons"]);
    });
  },
});
</script>
