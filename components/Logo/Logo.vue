<template>
  <span :class="type" class="logo">
    <img
      :src="logo"
      alt="logo"
      width="300"
      height="300"
      style="border-radius: 50%"
    />
    {{ type !== "only" ? brand.name : "" }}
  </span>
</template>

<style scoped lang="scss">
@import "./logo-style.scss";
</style>

<script>
import logo from "@/public/new-logo.png";
import brand from "@/assets/text/brand";

export default {
  props: {
    type: {
      type: String,
      default: "only",
    },
  },
  data() {
    return {
      brand,
      logo,
    };
  },
};
</script>
