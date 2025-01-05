<template>
    <section data-aos="fade-up" about-me
        class="relative  flex flex-col items-start justify-center px-[20px] md:px-[80px] py-[90px]">
        <div class="header">
            <h2 class="text-shade1 text-13xl lg:text-29xl">About Me</h2>

        </div>
        <div class=" flex flex-col gap-10 md:gap-7 w-full ">
            <div
                class="flex  flex-col group lg:flex-row py-3 md:py-10   rounded-lg  transition-all duration-300 ease-in-out">
                <div class=" flex flex-col justify-between lg:pr-28 mb-12 lg:mb-0 ">
                    <div class="flex flex-col  justify-between">
                        <p class="text-shade1 text-lg lg:text-13xl leading-snug">
                            I'm a full-stack developer passionate about creating user-friendly and high-performance web
                            applications.
                            With over 4 years of experience, I specialize in modern technologies such as Vue.js,
                            Node.js, React.js,
                            Next.js, Laravel, Tailwind CSS, and Vite. I also excel in backend development, database
                            management, and
                            hosting solutions, including deploying scalable applications using MySQL, MongoDB, and cloud
                            services.
                            My dedication to crafting efficient and reliable solutions ensures exceptional user
                            experiences and seamless
                            functionality for every project I undertake.
                        </p>


                    </div>
                </div>
                <div class="flex flex-col w-full items-center  ">
                    <div
                        class="flex flex-col gap-3 items-center justify-center relative h-[200px] w-[200px]  lg:h-[227px] lg:w-[233px] ">

                        <div
                            class="rounded-3xl bg-gray border border-solid border-t-1 absolute -top-6 -right-4 border-shade-3 w-[212px] h-[212px] lg:w-[239px] lg:h-[239px] ">
                        </div>
                        <img class="w-full h-full rounded-3xl  absolute  right-4 max-w-[269px]  lg:max-w-[269px]"
                            src="https://media.graphassets.com/fPSKanARQiaaD09z6WML" alt="">
                    </div>

                </div>
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