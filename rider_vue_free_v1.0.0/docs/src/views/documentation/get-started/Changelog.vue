<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <!--begin::Accordion-->
      <div
        class="accordion accordion-flush accordion-icon-toggle"
        id="kt_accordion_2"
      >
        <!--begin::Item-->
        <div class="mb-5">
          <!--begin::Header-->
          <div
            class="accordion-header py-3 d-flex collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#kt_accordion_2_item_1"
          >
            <span class="accordion-icon">
              <span class="svg-icon svg-icon-3">
                <inline-svg src="media/icons/duotune/arrows/arr064.svg" />
              </span>
            </span>
            <h3 class="fs-4 text-gray-800 fw-bold mb-0 ms-4">
              {{ appName }} v1.0.0 - 12 October, 2021
            </h3>
          </div>
          <!--end::Header-->

          <!--begin::Body-->
          <div
            id="kt_accordion_2_item_1"
            class="fs-6 collapse ps-10"
            data-bs-parent="#kt_accordion_2"
          >
            <ul class="py-2">
              <li class="py-2">Initial release.</li>
            </ul>
          </div>
          <!--end::Body-->
        </div>
        <!--end::Item-->
      </div>
      <!--end::Accordion-->
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import { appName } from "@/core/helpers/documentation";

export default defineComponent({
  name: "changelog",
  components: {},
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Campaigns", ["Changelog"]);
    });

    return {
      appName,
    };
  },
});
</script>
