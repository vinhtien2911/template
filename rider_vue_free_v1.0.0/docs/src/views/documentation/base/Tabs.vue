<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <Overview></Overview>

      <LineTabs></LineTabs>

      <LineTabs2x></LineTabs2x>

      <CardTabs></CardTabs>

      <VerticalTabs></VerticalTabs>

      <RichContentVerticalTabs></RichContentVerticalTabs>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/tabs/Overview.vue";
import LineTabs from "@/views/documentation/base/tabs/LineTabs.vue";
import LineTabs2x from "@/views/documentation/base/tabs/LineTabs2x.vue";
import CardTabs from "@/views/documentation/base/tabs/CardTabs.vue";
import VerticalTabs from "@/views/documentation/base/tabs/VerticalTabs.vue";
import RichContentVerticalTabs from "@/views/documentation/base/tabs/RichContentVerticalTabs.vue";

export default defineComponent({
  name: "tabs",
  components: {
    Overview,
    LineTabs,
    LineTabs2x,
    CardTabs,
    VerticalTabs,
    RichContentVerticalTabs,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Tabs", ["Base"]);
    });
  },
});
</script>
