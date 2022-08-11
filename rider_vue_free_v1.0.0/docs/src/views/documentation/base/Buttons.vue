<template>
  <!--begin::Card-->
  <div class="card">
    <!--begin::Card Body-->
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <Overview></Overview>

      <BaseButtons></BaseButtons>

      <HoverEffect></HoverEffect>

      <LightStyle></LightStyle>

      <BackgroundStyle></BackgroundStyle>

      <OutlineDashedStyle></OutlineDashedStyle>

      <ColorStyle></ColorStyle>

      <IconAndTextStyles></IconAndTextStyles>

      <ActiveStyle></ActiveStyle>

      <ActiveLightStyle></ActiveLightStyle>

      <ActiveColorStyle></ActiveColorStyle>

      <ActiveIconAndTextColorStyles></ActiveIconAndTextColorStyles>

      <Icons></Icons>

      <SocialButtons></SocialButtons>

      <LinkOptions></LinkOptions>

      <UtilityClasses></UtilityClasses>
    </div>
    <!--end::Card Body-->
  </div>
  <!--end::Card-->
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import Overview from "@/views/documentation/base/buttons/Overview.vue";
import BaseButtons from "@/views/documentation/base/buttons/BaseButtons.vue";
import HoverEffect from "@/views/documentation/base/buttons/HoverEffect.vue";
import LightStyle from "@/views/documentation/base/buttons/LightStyle.vue";
import BackgroundStyle from "@/views/documentation/base/buttons/BackgroundStyle.vue";
import OutlineDashedStyle from "@/views/documentation/base/buttons/OutlineDashedStyle.vue";
import ColorStyle from "@/views/documentation/base/buttons/ColorStyle.vue";
import IconAndTextStyles from "@/views/documentation/base/buttons/IconAndTextStyles.vue";
import ActiveStyle from "@/views/documentation/base/buttons/ActiveStyle.vue";
import ActiveLightStyle from "@/views/documentation/base/buttons/ActiveLightStyle.vue";
import ActiveColorStyle from "@/views/documentation/base/buttons/ActiveColorStyle.vue";
import ActiveIconAndTextColorStyles from "@/views/documentation/base/buttons/ActiveIconAndTextColorStyles.vue";
import Icons from "@/views/documentation/base/buttons/Icons.vue";
import SocialButtons from "@/views/documentation/base/buttons/SocialButtons.vue";
import LinkOptions from "@/views/documentation/base/buttons/LinkOptions.vue";
import UtilityClasses from "@/views/documentation/base/buttons/UtilityClasses.vue";

export default defineComponent({
  name: "buttons",
  components: {
    Overview,
    BaseButtons,
    HoverEffect,
    LightStyle,
    BackgroundStyle,
    OutlineDashedStyle,
    ColorStyle,
    IconAndTextStyles,
    ActiveStyle,
    ActiveLightStyle,
    ActiveColorStyle,
    ActiveIconAndTextColorStyles,
    Icons,
    SocialButtons,
    LinkOptions,
    UtilityClasses,
  },
  setup() {
    onMounted(() => {
      setCurrentPageBreadcrumbs("Buttons", ["Base"]);
    });
  },
});
</script>
