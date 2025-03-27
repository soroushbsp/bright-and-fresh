<template>
  <v-card class="center-box price-card">
    <v-card-title class="price-header justify-center">
      <h5 class="text-xs-center text-h5">
        {{ title }}
      </h5>
      <div class="small-title text-xs-center text-body-1">
        {{ subheader }}
      </div>
      <v-icon v-if="title === 'Pro'" class="icon"> mdi-star-outline </v-icon>
    </v-card-title>
    <v-card-text class="pa-4">
      <div class="card-pricing">
        <h2 class="price text-xs-center text-h4">
          {{ price }}
        </h2>
      </div>
      <ul>
        {{
          description
        }}
      </ul>
    </v-card-text>
    <!-- <div class="text-center pa-4">
      <v-btn
        :outlined="buttonVariant === 'outlined'"
        block
        color="primary"
      >
        {{ buttonText }}
      </v-btn>
    </div> -->
  </v-card>
</template>

<style scoped lang="scss">
@import "./pricing-card";
</style>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    subheader: {
      type: String,
      default: "",
    },
    price: {
      type: String,
    },
    description: {
      type: Array,
    },
    buttonText: {
      type: String,
    },
    buttonVariant: {
      type: String,
      default: "outlined",
    },
  },
};
</script>
