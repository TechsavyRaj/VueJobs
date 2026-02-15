<script setup>
defineProps({
  title : {
    default: 'Become a Vue Developer',
    type: String
  },
  sub_title:{
    default: 'Find the Vue job that fits your skills and needs',
    type: String
  }
});
</script>

<template>
  <section class="bg-green-700 py-20 mb-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      <div class="text-center">
        <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
          {{ title }}
        </h1>
        <p class="my-4 text-xl text-white">
          {{ sub_title }}
        </p>
      </div>
    </div>
  </section>
</template>