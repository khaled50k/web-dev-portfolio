<template>
    <nav
        class="fixed left-0 top-0 w-full z-10 bg-shade-5/70 h-max max-w-full rounded-none py-4 px-4 md:px-12 bg-opacity-70 backdrop-blur-lg backdrop-saturate-100">
        <div class="flex items-center justify-between w-full">
            <div class="flex justify-center items-center">
                <a href="#">
                    <h1 class="text-bold font-bold text-shade1 text-base">
                        Dev

                        <span class="text-accent-1">
                            {{ " Khaled" }}
                        </span>

                    </h1>

                </a>
            </div>

            <div class=" md:hidden ">
                <div
                    class="rounded-md  inline-flex items-end justify-end text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset ">
                    <button
                        class="cursor-pointer rounded-lg text-center font-sans text-xs font-medium uppercase transition-all bg-transparent text-shade1 lg:hidden  inline-flex items-end justify-end"
                        @click="toggleMobileMenu">
                        <span class=" inset-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" stroke="currentColor"
                                :stroke-width="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>


            <ul class="hidden md:flex items-center justify-center gap-2">
                <li v-for="(item, index) in navLinks" :key="item.name">
                    <nav-item :href="item.href" :primary="shouldAddPrimary(index)">
                        {{ item.name }}
                    </nav-item>
                </li>
            </ul>

        </div>
        <!-- mobile menu -->
        <div class="transition-max-height transition-all duration-700 overflow-hidden md:hidden"
            :class="{ 'max-h-screen': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen }">
            <ul class="flex flex-col gap-4 p-4">
                <li v-for="item in navLinks" :key="item.name">
                    <nav-item :href="item.href" mobile>
                        {{ item.name }}
                    </nav-item>
                </li>
            </ul>
        </div>
    </nav>
</template>
  
<script setup>
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
const shouldAddPrimary = (index) => {
    return index !== navLinks.length - 1;
};
const navLinks = [
    {
        name: "My work",
        href: "#myWork",

    },
    {
        name: "About me",
        href: "#aboutMe",

    },
    {
        name: "My Skills",
        href: "#mySkills",

    },
    {
        name: "Contact",
        href: "#contact",
    },
];


</script>
  
<style>
/* Your styles (unchanged) */
</style>
  