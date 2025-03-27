<template>
  <v-card class="card">
    <p class="body1">
      {{ text }}
    </p>
    <div class="name">
      <v-avatar :size="30" class="avatar">
        <v-icon icon="mdi-account"></v-icon>
      </v-avatar>
      <span class="caption">
        {{ name }}
      </span>
    </div>
  </v-card>
</template>

<style scoped lang="scss">
@import "./testi-card";
</style>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
