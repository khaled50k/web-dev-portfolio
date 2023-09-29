<template>
    <!-- <div class="bg-gradient-to-b bg-accent-3  from-accent-3 to-[#282828] w-[60px] h-[60px] rounded-2xl"></div> -->
    <div class="bg-gradient-to-b  from-opacity-20 via-opacity-20 to-opacity-100 bg-no-repeat bg-cover bg-center bg-lightGray-500 w-[80px] h-[80px] rounded-2xl flex items-center flex-c justify-center "
        style="background-image: linear-gradient(180deg, rgba(117, 117, 117, 0.2) 38.52%, #3b3b3b5f 100%)">
        <img  class="w-[50px] h-[50px]" :src="`https://skillicons.dev/icons?i=${imageName}`" :alt="imageName" tool>
  </div>
</template>

<script setup>
// Props
const props = defineProps({
    imageName: String,
});

</script>

<style></style>