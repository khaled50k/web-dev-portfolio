<template>
    <a :href="href" target="_blank" :class="buttonClass" @click="handleClick" class="px-6 py-3 max-w-fit font-bold text-base cursor-pointer  transition-all duration-300 ease-in-out rounded-lg text-center">
        <slot></slot>
    </a>
</template>
  
<script setup>
import { ref, computed } from 'vue';

// Props
const props = defineProps({
    primary: Boolean, // Example prop: Indicates if it's a primary button
    disabled: Boolean,
    href:String // Example prop: Indicates if the button is disabled
});

// Computed property for dynamic button class
const buttonClass = computed(() => ({
    'border border-solid border-t-1 text-shade1 border-shade-3  bg-transparent hover:border-transparent hover:bg-shade1 hover:text-shade-5 ': props.primary,
    'bg-gray-300 text-gray-700': !props.primary,
    'pointer-events-none opacity-50': props.disabled,
}));

// Click handler
const handleClick = () => {
    if (!props.disabled) {
        emit('click');
    }
};
</script>
  
<style scoped>
/* Define button styles here or use Tailwind CSS classes */
</style>
  