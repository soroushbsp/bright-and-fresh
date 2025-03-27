<template>
  <div class="feature-more">
    <v-container>
      <v-row id="feature1">
        <v-col md="6" class="px-6" cols="12">
          <div class="feature-item">
            <div data-aos="fade-left" data-aos-duration="600">
              <h3 class="text-h3 mb-6">
                {{ $t("features.item4_title") }}
              </h3>
            </div>
            <div
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <p class="text">
                {{ $t("features.item4_desc") }}
              </p>
            </div>
          </div>
        </v-col>
        <v-col md="6" class="px-6" cols="12">
          <div class="feature-item">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div class="deco1">
                <v-icon  class="icon" size="120">
                  mdi-cash-multiple
                </v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col
          :order="isTablet ? 'last' : 'first'"
          md="6"
          class="px-6"
          cols="12"
        >
          <div class="feature-item">
            <div
              data-aos="zoom-in"
              data-aos-delay="300"
              data-aos-duration="600"
            >
              <div class="deco1">
                <v-icon  class="icon" size="120">
                  mdi-clock-fast
                </v-icon>
              </div>
            </div>
          </div>
        </v-col>
        <v-col
          :order="isTablet ? 'first' : 'last'"
          md="6"
          class="px-6"
          cols="12"
        >
          <div class="feature-item">
            <div data-aos="fade-left" data-aos-duration="600">
              <h3 class="text-h3 mb-6 display-2">
                {{ $t("features.item5_title") }}
              </h3>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="600"
            >
              <p class="text">
                {{ $t("features.item5_desc") }}
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="12" class="px-6" cols="12">
          <div class="feature-item last text-center">
            <div data-aos="fade-up" data-aos-duration="600">
              <h3 class="text-h3 mb-6 display-2">
                {{ $t("features.item6_title") }}
              </h3>
            </div>
            <div data-aos="fade-up" duration="0.6s" delay="0.3s">
              <p class="text">
                {{ $t("features.item6_desc") }}
              </p>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="300"
            >
              <div class="deco2">
                <v-icon  class="icon" size="120">
                  mdi-spray-bottle
                </v-icon>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
@import "./feature-styles";
</style>

<script>
import AOS from "aos";
import imgAPI from "@/assets/images/imgAPI";

export default {
  data() {
    return {
      imgAPI,
    };
  },
  computed: {
    isTablet() {
      const mdDown = this.$vuetify.display.mdAndDown;
      return mdDown;
    },
  },
  mounted() {
    AOS.init({
      once: true,
    });
  },
};
</script>
