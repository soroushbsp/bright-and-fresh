<template>
  <v-container>
    <h3 class="text-h3 text-center mb-4">{{ $t("prices.title") }}</h3>
    <div class="pricing-wrap">
      <v-row align="center">
        <v-col
          v-for="index in 4"
          :key="index"
          md="3"
          sm="6"
          cols="12"
          class="px-5"
        >
          <pricing-card
            :title="$t(`prices.item${index}.Service`)"
            :subheader="$t(`prices.item${index}.Frequency`)"
            :price="$t(`prices.item${index}.Price`)"
            :description="$t(`prices.item${index}.Includes`)"
          />
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<style scoped lang="scss">
@import "./pricing-style";
</style>

<script>
import PricingCard from "../Cards/PricingCard";

export default {
  components: {
    PricingCard,
  },
};
</script>
