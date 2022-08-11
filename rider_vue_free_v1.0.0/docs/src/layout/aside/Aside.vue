<template>
  <!--begin::Aside-->
  <div
    id="kt_docs_aside"
    class="docs-aside"
    data-kt-drawer="true"
    data-kt-drawer-name="aside"
    data-kt-drawer-activate="{default: true, lg: false}"
    data-kt-drawer-overlay="true"
    data-kt-drawer-width="{default:'200px', '300px': '250px'}"
    data-kt-drawer-direction="start"
    data-kt-drawer-toggle="#kt_docs_aside_toggle"
  >
    <!--begin::Brand-->
    <div
      class="docs-aside-logo flex-column-auto h-75px"
      id="kt_docs_aside_logo"
    >
      <!--begin::Logo-->
      <a href="#">
        <img alt="Logo" :src="appLogo" class="max-h-50px" />
      </a>
      <!--end::Logo-->
    </div>
    <!--end::Brand-->

    <!--begin::Aside menu-->
    <div class="docs-aside-menu flex-column-fluid">
      <KTMenu></KTMenu>
    </div>
    <!--end::Aside menu-->
  </div>
  <!--end::Aside-->
</template>

<script lang="ts">
import { defineComponent, onMounted, onUpdated } from "vue";
import { DrawerComponent, ToggleComponent } from "@/assets/ts/components";
import KTMenu from "@/layout/aside/Menu.vue";
import { appLogo } from "@/core/helpers/documentation";

export default defineComponent({
  name: "KTAside",
  components: {
    KTMenu,
  },
  props: {
    lightLogo: String,
    darkLogo: String,
  },
  setup() {
    onMounted(() => {
      DrawerComponent.reinitialization();
      ToggleComponent.reinitialization();
    });

    onUpdated(() => {
      ToggleComponent.bootstrap();
    });

    return {
      appLogo,
    };
  },
});
</script>
