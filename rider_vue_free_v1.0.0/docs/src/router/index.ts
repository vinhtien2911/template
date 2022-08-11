import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/doc-overview",
    component: () => import("@/layout/Layout.vue"),
    children: [
      {
        path: "build",
        name: "build",
        component: () => import("@/views/documentation/get-started/Build.vue"),
      },
      {
        path: "setup-theme-skeleton",
        name: "setup-theme-skeleton",
        component: () =>
          import("@/views/documentation/get-started/SetupThemeSkeleton.vue"),
      },
      {
        path: "vue-laravel-integration",
        name: "vue-laravel-integration",
        component: () =>
          import("@/views/documentation/get-started/VueLaravelIntegration.vue"),
      },
      {
        path: "internationalization",
        name: "internationalization",
        component: () =>
          import("@/views/documentation/get-started/Internationalization.vue"),
      },
      {
        path: "dark-mode",
        name: "dark-mode",
        component: () =>
          import("@/views/documentation/get-started/DarkMode.vue"),
      },
      {
        path: "rtl",
        name: "rtl",
        component: () => import("@/views/documentation/get-started/RTL.vue"),
      },
      {
        path: "doc-overview",
        name: "doc-overview",
        component: () =>
          import("@/views/documentation/get-started/Overview.vue"),
      },
      {
        path: "updates",
        name: "updates",
        component: () =>
          import("@/views/documentation/get-started/Updates.vue"),
      },
      {
        path: "changelog",
        name: "changelog",
        component: () =>
          import("@/views/documentation/get-started/Changelog.vue"),
      },
      {
        path: "utilities",
        name: "utilities",
        meta: {
          desc: "extended utility classes",
        },
        component: () => import("@/views/documentation/base/Utilities.vue"),
      },
      {
        path: "helpers/flex-layouts",
        name: "flex-layouts",
        meta: {
          desc: "extended flex layout classes",
        },
        component: () =>
          import("@/views/documentation/base/helpers/FlexLayouts.vue"),
      },
      {
        path: "helpers/text",
        name: "text",
        meta: {
          desc: "extended text classes",
        },
        component: () => import("@/views/documentation/base/helpers/Text.vue"),
      },
      {
        path: "helpers/background",
        name: "backkground",
        meta: {
          desc: "extended background classes",
        },
        component: () =>
          import("@/views/documentation/base/helpers/Background.vue"),
      },
      {
        path: "helpers/borders",
        name: "borders",
        meta: {
          desc: "extended borders classes",
        },
        component: () =>
          import("@/views/documentation/base/helpers/Borders.vue"),
      },
      {
        path: "helpers/opacity",
        name: "opacity",
        component: () =>
          import("@/views/documentation/base/helpers/Opacity.vue"),
      },
      {
        path: "forms",
        name: "forms",
        meta: {
          desc: "forms elements",
        },
        component: () => import("@/views/documentation/base/Forms.vue"),
      },
      {
        path: "buttons",
        name: "buttons",
        meta: {
          desc: "buttons elements",
        },
        component: () => import("@/views/documentation/base/Buttons.vue"),
      },
      {
        path: "indicator",
        name: "indicator",
        meta: {
          desc: "indicator element",
        },
        component: () => import("@/views/documentation/base/Indicator.vue"),
      },
      {
        path: "rotate",
        name: "rotate",
        meta: {
          desc: "Rotate element",
        },
        component: () => import("@/views/documentation/base/Rotate.vue"),
      },
      {
        path: "tables",
        name: "tables",
        meta: {
          desc: "extended bootstrap tables",
        },
        component: () => import("@/views/documentation/base/Tables.vue"),
      },
      {
        path: "cards",
        name: "cards",
        meta: {
          desc: "card elements",
        },
        component: () => import("@/views/documentation/base/Cards.vue"),
      },
      {
        path: "symbol",
        name: "symbol",
        meta: {
          desc: "symbol elements",
        },
        component: () => import("@/views/documentation/base/Symbol.vue"),
      },
      {
        path: "badges",
        name: "badges",
        meta: {
          desc: "badge elements",
        },
        component: () => import("@/views/documentation/base/Badges.vue"),
      },
      {
        path: "pulse",
        name: "pulse",
        meta: {
          desc: "pulse elements",
        },
        component: () => import("@/views/documentation/base/Pulse.vue"),
      },
      {
        path: "bullets",
        name: "bullets",
        meta: {
          desc: "bullets elements",
        },
        component: () => import("@/views/documentation/base/Bullets.vue"),
      },
      {
        path: "accordion",
        name: "accordion",
        meta: {
          desc: "accordion elements",
        },
        component: () => import("@/views/documentation/base/Accordion.vue"),
      },
      {
        path: "alerts",
        name: "alerts",
        component: () => import("@/views/documentation/base/Alerts.vue"),
      },
      {
        path: "carousel",
        name: "carousel",
        meta: {
          desc: "carousel elements",
        },
        component: () => import("@/views/documentation/base/Carousel.vue"),
      },
      {
        path: "overlay",
        name: "overlay",
        meta: {
          desc: "overlay elements",
        },
        component: () => import("@/views/documentation/base/Overlay.vue"),
      },
      {
        path: "separator",
        name: "separator",
        meta: {
          desc: "separator elements",
        },
        component: () => import("@/views/documentation/base/Separator.vue"),
      },
      {
        path: "tabs",
        name: "tabs",
        meta: {
          desc: "tabs elements",
        },
        component: () => import("@/views/documentation/base/Tabs.vue"),
      },
      {
        path: "breadcrumb",
        name: "breadcrumb",
        meta: {
          desc: "breadcrumb elements",
        },
        component: () => import("@/views/documentation/base/Breadcrumb.vue"),
      },
      {
        path: "modal",
        name: "modal",
        meta: {
          desc: "modal elements",
        },
        component: () => import("@/views/documentation/base/Modal.vue"),
      },
      {
        path: "pagination",
        name: "pagination",
        meta: {
          desc: "pagination elements",
        },
        component: () => import("@/views/documentation/base/Pagination.vue"),
      },
      {
        path: "vue-select",
        name: "vue-select",
        component: () => import("@/views/documentation/forms/VueSelect.vue"),
      },
      {
        path: "vee-validate",
        name: "vee-validate",
        component: () => import("@/views/documentation/forms/VeeValidate.vue"),
      },
      {
        path: "vue-currency-input",
        name: "vue-currency-input",
        component: () =>
          import("@/views/documentation/forms/VueCurrencyInput.vue"),
      },
      {
        path: "tinymce",
        name: "tinymce",
        component: () => import("@/views/documentation/editors/TinyMCE.vue"),
      },
      {
        path: "fullcalendar",
        name: "fullcalendar",
        component: () =>
          import("@/views/documentation/general/FullCalendar.vue"),
      },
      {
        path: "element-ui",
        name: "element-ui",
        component: () => import("@/views/documentation/general/ElementUI.vue"),
      },
      {
        path: "icons/bootstrap-icons",
        name: "bootstrap-icons",
        meta: {
          desc: "free, high quality, open source icon library",
        },
        component: () =>
          import("@/views/documentation/icons/BootstrapIcons.vue"),
      },
      {
        path: "icons/font-awesome",
        name: "font-awesome",
        meta: {
          desc: "awesome font icons",
        },
        component: () => import("@/views/documentation/icons/FontAwesome.vue"),
      },
      {
        path: "icons/line-awesome",
        name: "line-awesome",
        meta: {
          desc: "line font icons",
        },
        component: () => import("@/views/documentation/icons/LineAwesome.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/doc-overview",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 10,
        behavior: "smooth",
      };
    }
  },
});

router.beforeEach((to) => {
  if (!to.hash) {
    // Scroll page to top on every route change
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }
});

export default router;
