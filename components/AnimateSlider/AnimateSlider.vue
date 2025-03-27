<template>
  <div class="hero-content">
    <div class="slider-wrapper">
      <transition-group :name="transition">
        <div
          v-for="number in [currentImg]"
          :key="number"
          :style="{
            background:
              'url(' +
              content[Math.abs(currentImg) % content.length].image +
              ') no-repeat center center',
          }"
          class="slide slider-content"
        >
          <div class="inner">
            <h1>
              {{
                $t(
                  `slides.item${
                    (Math.abs(currentImg) % content.length) + 1
                  }_title`
                )
              }}
            </h1>
            <p>
              {{
                $t(
                  `slides.item${
                    (Math.abs(currentImg) % content.length) + 1
                  }_desc`
                )
              }}
            </p>
          </div>
        </div>
      </transition-group>
    </div>
    <a href="#" class="prev" @click="prev"> &#10094; </a>
    <a href="#" class="next" @click="next"> &#10095; </a>
  </div>
</template>

<style scoped lang="scss">
@import "./slider-styles";
</style>

<script>
export default {
  data() {
    return {
      show: true,
      transition: "",
      autoplay: null,
      content: [
        {
          image: "/images/item-1.jpg",
        },
        {
          image: "/images/item-2.jpg",
        },
        {
          image: "/images/item-3.jpg",
        },
      ],
      currentImg: 0,
    };
  },
  mounted() {
    this.playSlider();
  },
  beforeUnmount() {
    clearInterval(this.autoplay);
  },
  methods: {
    playSlider() {
      this.autoplay = setInterval(() => {
        this.currentImg += 1;
        this.transition = "slide-right";
      }, 10000);
    },
    manualPlay() {
      clearInterval(this.autoplay);
      setTimeout(() => {
        this.playSlider();
      }, 1);
    },
    next() {
      this.manualPlay();
      this.currentImg += 1;
      this.transition = "slide-right";
    },
    prev() {
      this.manualPlay();
      this.currentImg -= 1;
      this.transition = "slide-left";
    },
  },
};
</script>
