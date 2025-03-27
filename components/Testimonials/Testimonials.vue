<template>
  <div class="testimonial-wrap">
    <h3 class="text-h3 text-center mb-4">{{ $t("testimonials.title") }}</h3>
    <p class="text-body-1 text-center mb-4">
      {{ $t("testimonials.subtitle") }}
    </p>
    <div class="carousel">
      <splide :options="slickOptions">
        <splide-slide v-for="index in 6" :key="index">
          <div class="item">
            <testi-card
              :text="$t(`testimonials.item${index}.Review`)"
              :name="
                $t(`testimonials.item${index}.Name`) +
                ' - ' +
                $t(`testimonials.item${index}.Company`)
              "
            />
          </div>
        </splide-slide>
      </splide>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "./testimonials-style";
</style>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import imgAPI from "@/assets/images/imgAPI";
import TestiCard from "../Cards/TestiCard";

export default {
  components: {
    Splide,
    SplideSlide,
    TestiCard,
  },
  data() {
    return {
      slickOptions: {
        perPage: 3,
        perMove: 1,
        pagination: false,
        arrows: false,
        breakpoints: {
          600: {
            perPage: 1,
          },
          800: {
            perPage: 3,
          },
        },
        reducedMotion: {
          speed: 500,
          rewindSpeed: 1000,
          autoplay: true,
        },
      },
    };
  },
};
</script>
