<template>
  <v-menu
    v-model="open"
    :close-on-content-click="false"
    location="bottom"
    class="ma-0"
  >
    <template #activator="{ props }">
      <div class="setting">
        <v-btn
          :class="{ invert: invert, active: open }"
          v-bind="props"
          icon="mdi-cog"
        />
      </div>
    </template>
    <v-list class="popover ocean-var" style="margin-top: 25px">
      <div class="mode-menu">
        <v-list-subheader>{{ $t("common.header_theme") }}</v-list-subheader>
        <v-list-item>
          <div class="flex-menu">
            <span>
              {{ $t("common.header_light") }}
            </span>
            <v-switch
              :model-value="isDark"
              class="switch-toggle"
              hide-details
              color="secondary"
              @change="switchDark()"
            />
            <span>
              {{ $t("common.header_dark") }}
            </span>
          </div>
        </v-list-item>
      </div>
      <v-divider />
      <div class="lang-menu">
        <v-list-subheader>{{ $t("common.header_language") }}</v-list-subheader>
        <v-list-item
          v-for="(lang, index) in langList"
          :key="index"
          @click="switchLang(lang.code)"
          nuxt
        >
          <template #prepend>
            <v-avatar class="flag">
              <img :src="`/${lang.code}.png`" width="40" height="40" />
            </v-avatar>
          </template>
          <v-list-item-title class="lang-opt">
            {{ $t("common." + lang.code) }}
          </v-list-item-title>
          <template #append>
            <v-icon v-if="lang.code === i18n.locale.value" color="primary">
              mdi-check
            </v-icon>
          </template>
        </v-list-item>
      </div>
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped>
@import "./header-style.scss";
</style>

<script>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { useSwitchLocalePath } from "vue-i18n-routing";
import { toggleDark, setRtl } from "@/composables/uiTheme";
import i18n from "~/config/i18n";

export default {
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const isDark = ref(false);
    const i18n = useI18n();
    const isLoaded = ref(false);

    const switchLocalePath = useSwitchLocalePath();

    onMounted(() => {
      isLoaded.value = true;
      isDark.value = localStorage.getItem("luxiDarkMode") === "dark";
    });

    function switchDark() {
      isDark.value = !isDark.value;
      toggleDark();
    }

    function switchLang(locale) {
      i18n.setLocale(locale)
      i18n.setLocaleCookie(locale)
      // This will also update the cookie
      // i18n.setLocale(locale);
      // Set RTL and Document attr
      document.documentElement.setAttribute("lang", locale);

      if (locale === "ar") {
        setRtl(true);
        document.documentElement.setAttribute("dir", "rtl");
      } else {
        setRtl(false);
        document.documentElement.setAttribute("dir", "ltr");
      }
    }

    return {
      isLoaded,
      isDark,
      switchDark,
      switchLang,
      i18n,
      switchLocalePath,
    };
  },
  data: () => ({
    open: false,
  }),
  computed: {
    langList() {
      return this.$i18n.locales;
    },
  },
};
</script>
