<template>
    <a :href="href"  @click="handleClick" target="_blank"
        class="bg-shade-5 flex  items-center  text-shade1 max-w-fit-content p-2  h-10 border  border-shade-3 border-solid border-t-1 hover:bg-shade-4/90 font-bold text-base cursor-pointer  transition-all duration-300 ease-in-out rounded-lg">
        <slot></slot>
    </a>
</template>
  
<script setup>

// Props
const props = defineProps({
    href: String 
});



</script>
  
<style scoped>
/* Define button styles here or use Tailwind CSS classes */
</style>
  