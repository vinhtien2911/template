<template>
  <div class="py-4 d-flex flex-lg-column py-6" id="kt_footer">
    <div
      class="
        container-xxl
        d-flex
        flex-column flex-md-row
        align-items-center
        justify-content-between
      "
    >
      <div class="text-dark order-2 order-md-1">
        <span class="text-muted fw-bold me-1">2021©</span>
        <a
          href="https://keenthemes.com"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >Keenthemes</a
        >
      </div>

      <ul
        class="
          menu menu-gray-600 menu-hover-primary
          fw-bold
          order-1
          align-items-center
          mb-3 mb-md-0
        "
      >
        <li class="menu-item">
          <a :href="youtubeLink" target="_blank" class="menu-link px-3">
            <img
              alt="Keenthemes Youtube"
              src="media/svg/social-logos/youtube.svg"
              class="h-20px"
            />
          </a>
        </li>

        <li class="menu-item">
          <a :href="githubLink" target="_blank" class="menu-link px-3">
            <img
              alt="Keenthemes Github"
              src="media/svg/social-logos/github.svg"
              class="h-20px"
            />
          </a>
        </li>

        <li class="menu-item">
          <a :href="twitterLink" target="_blank" class="menu-link px-3">
            <img
              alt="Keenthemes Twitter"
              src="media/svg/social-logos/twitter.svg"
              class="h-20px"
            />
          </a>
        </li>

        <li class="menu-item">
          <a :href="instagramLink" target="_blank" class="menu-link px-3">
            <img
              alt="Keenthemes Instagram"
              src="media/svg/social-logos/instagram.svg"
              class="h-20px"
            />
          </a>
        </li>

        <li class="menu-item">
          <a :href="facebookLink" target="_blank" class="menu-link px-3">
            <img
              alt="Keenthemes Facebook"
              src="media/svg/social-logos/facebook.svg"
              class="h-20px"
            />
          </a>
        </li>

        <li class="menu-item">
          <a :href="dribbleLink" target="_blank" class="menu-link px-3">
            <img
              alt="Keenthemes Dribbble"
              src="media/svg/social-logos/dribbble.svg"
              class="h-20px"
            />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  youtubeLink,
  githubLink,
  twitterLink,
  instagramLink,
  facebookLink,
  dribbleLink,
} from "@/core/helpers/documentation";

export default defineComponent({
  name: "KTFooter",
  components: {},
  setup() {
    return {
      youtubeLink,
      githubLink,
      twitterLink,
      instagramLink,
      facebookLink,
      dribbleLink,
    };
  },
});
</script>
