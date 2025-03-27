import { defineNuxtPlugin } from '#app';
export default defineNuxtPlugin(() => {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
