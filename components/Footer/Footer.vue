<template>
  <v-footer color="primary" class="mt-10">
    <v-container>
      <v-row>
        <!-- Info Column -->
        <v-col cols="12" md="6" class="text-white">
          <h3 class="text-h5 font-weight-bold mb-4">Bright & Fresh</h3>
          <p class="mb-2">
            <v-icon icon="mdi-email" class="mr-2"></v-icon>
            <a
              href="mailto:brightfresh08@gmail.com"
              style="text-decoration: none; color: white"
            >
              brightfresh08@gmail.com</a
            >
          </p>
          <p class="mb-2">
            <v-icon icon="mdi-phone" class="mr-2"></v-icon>
            <a
              href="tel:+31684646764"
              style="text-decoration: none; color: white"
            >
              +31684646764
            </a>
          </p>
          <p class="mb-4">
            <v-icon icon="mdi-clock" class="mr-2"></v-icon>
            Ma-Vr: 8:00 - 18:00
          </p>

          <div class="social-icons">
            <!-- <v-btn
              icon="mdi-facebook"
              variant="text"
              color="white"
              href="https://facebook.com/bright&fresh"
              target="_blank"
            ></v-btn> -->
            <v-btn
              icon="mdi-instagram"
              variant="text"
              color="white"
              href="https://instagram.com/brighfresh_cleaning"
              target="_blank"
            ></v-btn>
            <v-btn
              icon="mdi-whatsapp"
              variant="text"
              color="white"
              href="https://wa.me/+31684646764"
              target="_blank"
            ></v-btn>
          </div>
        </v-col>

        <!-- Map Location Column -->
        <v-col cols="12" md="6">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79002.74622582295!2d4.8073511!3d51.77260855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c682dc4d49ddab%3A0x4ed1f840c89b7bf1!2z2YjYsdqp2YbigIzYr9in2YXYjCDZh9mE2YbYrw!5e0!3m2!1sfa!2sfr!4v1746151894098!5m2!1sfa!2sfr"
              width="600"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
            <div class="mt-4 text-white">
              <v-icon icon="mdi-map-marker" class="mr-2"></v-icon>
              <span>Shans 24 a, 4151 PW Werkendam</span>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Copyright -->
      <v-divider class="my-4" color="white"></v-divider>
      <div class="text-center text-white">
        &copy; {{ new Date().getFullYear() }}
        {{ brand.starter.footerText }}
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped lang="scss">
@import "./footer";
</style>

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import { useSwitchLocalePath } from "vue-i18n-routing";
import { setRtl } from "@/composables/uiTheme";
import brand from "@/assets/text/brand";
import { navigateTo } from "#app";
import Logo from "../Logo";

export default {
  components: {
    Logo,
  },
  setup() {
    const switchLocalePath = useSwitchLocalePath();

    const i18n = useI18n();
    const curLang = i18n.locale.value;
    const lang = ref(curLang);

    function switchLang(locale) {
      navigateTo(switchLocalePath(locale));
      //i18n.setLocale(locale);
      console.log(switchLocalePath(locale));
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
      curLang,
      lang,
      switchLang,
    };
  },
  data() {
    return {
      brand,
      footers: [
        {
          title: "company",
          description: ["Team", "History", "Contact us", "Locations"],
          link: ["#", "#", "#", "#"],
        },
        {
          title: "resources",
          description: [
            "Resource",
            "Resource name",
            "Another resource",
            "Final resource",
          ],
          link: ["#", "#", "#", "#"],
        },
        {
          title: "legal",
          description: ["Privacy policy", "Terms of use"],
          link: ["#", "#"],
        },
      ],
    };
  },
  computed: {
    langList() {
      const list = [];
      const i18n = this.$i18n.locales;

      i18n.map((locale) => {
        list.push({
          title: this.$t("common." + locale.code),
          value: locale.code,
        });
        return false;
      });
      return list;
    },
    isMobile() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
    isDesktop() {
      const mdUp = this.$vuetify.display.mdAndUp;
      return mdUp;
    },
  },
};
</script>
