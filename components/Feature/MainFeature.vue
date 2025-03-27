<template>
  <div class="page-section">
    <v-row>
      <v-col class="px-6" sm="4" cols="12">
        <div class="feature-list">
          <v-icon color="primary" class="icon"> mdi-recycle </v-icon>
          <h5 class="text-h5">{{ $t("features.item1_title") }}</h5>
          <p class="text-body-1">
            {{ $t("features.item1_desc") }}
          </p>
        </div>
      </v-col>
      <v-col class="px-6" sm="4" cols="12">
        <div class="feature-list">
          <v-icon color="primary" class="icon"> mdi-tune </v-icon>
          <h5 class="text-h5">{{ $t("features.item2_title") }}</h5>
          <p class="text-body-1">
            {{ $t("features.item2_desc") }}
          </p>
        </div>
      </v-col>
      <v-col class="px-6" sm="4" cols="12">
        <div class="feature-list">
          <v-icon color="primary" class="icon"> mdi-account-hard-hat </v-icon>
          <h5 class="text-h5">{{ $t("features.item3_title") }}</h5>
          <p class="text-body-1">
            {{ $t("features.item3_desc") }}
          </p>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped lang="scss">
@import "./feature-styles";
</style>
