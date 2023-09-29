<template>
    <div v-if="showArrow" class="fixed bottom-4 right-4 z-10">
      <button @click="scrollToTop" class="hover:bg-accent-1-darker p-2 cursor-pointer bg-accent-1 text-white font-bold rounded-full flex items-center transition-all duration-300 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const showArrow = ref(false);
  
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Add smooth scrolling behavior
    });
  };
  
  // Function to check scroll position and show/hide the arrow
  const checkScrollPosition = () => {
    if (window.scrollY > 200) {
      showArrow.value = true;
    } else {
      showArrow.value = false;
    }
  };
  
  // Listen for scroll events
  onMounted(() => {
    window.addEventListener('scroll', checkScrollPosition);
  });
  
  // Remove the event listener when the component is unmounted
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', checkScrollPosition);
  });
  </script>
  
  <style scoped>
 
  .hover\:bg-accent-1-darker:hover {
    background-color: #7f4aff; /* You can adjust the color value as needed */
  }
  </style>
  