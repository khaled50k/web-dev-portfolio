<template>
    <section data-aos="fade-up" about-me class="relative  flex flex-col items-start justify-center px-[20px] md:px-[80px] py-[90px]">
        <div class="header">
            <h2 class="text-shade1 text-1xl lg:text-13xl">My Skills</h2>

        </div>
        <div class=" flex flex-col gap-10 md:gap-7 w-full ">
            <div class="flex   group lg:flex-row py-3 md:py-10 gap-5 flex-wrap flex-row justify-between">
                <skill-icon image-name="git"></skill-icon>
                <skill-icon image-name="github"></skill-icon>
                <skill-icon image-name="js"></skill-icon>
                <skill-icon image-name="jquery"></skill-icon>
                <skill-icon image-name="nuxt"></skill-icon>
                <skill-icon image-name="nextjs"></skill-icon>
                <skill-icon image-name="vue"></skill-icon>
                <skill-icon image-name="react"></skill-icon>
                <skill-icon image-name="html"></skill-icon>
                <skill-icon image-name="css"></skill-icon>
                <skill-icon image-name="nodejs"></skill-icon>
                <skill-icon image-name="laravel"></skill-icon>
                <skill-icon image-name="express"></skill-icon>
                <skill-icon image-name="java"></skill-icon>
                <skill-icon image-name="python"></skill-icon>
                <skill-icon image-name="php"></skill-icon>
                <skill-icon image-name="mongo"></skill-icon>
                <skill-icon image-name="mysql"></skill-icon>
                <skill-icon image-name="postgres"></skill-icon>
                <skill-icon image-name="linux"></skill-icon>
                <skill-icon image-name="vscode"></skill-icon>
                <skill-icon image-name="tailwind"></skill-icon>
                <skill-icon image-name="vite"></skill-icon>
                <skill-icon image-name="figma"></skill-icon>
                <skill-icon image-name="heroku"></skill-icon>
                <skill-icon image-name="sequelize"></skill-icon>



            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const initializeAOS = () => {
  AOS.init({
    // Specify your AOS configuration options here
  });
};

onMounted(() => {
  initializeAOS(); // Initialize AOS when the component is mounted
});


</script>

<style></style>