<template>
    <section data-aos="fade-up" about-me class="relative  flex flex-col items-start justify-center px-[20px] md:px-[80px] py-[90px]">

        <div class=" flex flex-col gap-10 md:gap-7 w-full bg-shade-4 p-8 rounded-2xl overflow-hidden relative">
            <div
                class="absolute -top-[200px]  -left-[200px] md:-top-[170px]  md:-left-[170px] lg:-top-[130px]  lg:-left-[130px] border-[19px] rounded-full border-accent-3 w-[277px] h-[277px] border-solid ">
            </div>
            <div
                class="-bottom-[200px] -right-[200px] md:-bottom-[170px] md:-right-[170px] lg:-bottom-[130px] absolute lg:-right-[130px] border-[19px] rounded-full border-accent-1 w-[277px] h-[277px] border-solid ">
            </div>
            <di class="flex  flex-col group  md:py-10   rounded-lg  transition-all duration-300 ease-in-out">
                <div class=" flex flex-col  justify-center items-center gap-10 ">
                    <div class="flex flex-col items-center text-center  lg:mx-[84px] gap-5">
                        <h2 class="text-shade1 text-13xl lg:text-29xl">Let's Talk!</h2>
                        <p class=" text-base md:text-lg text-shade-2 mx-2 md:mx-20 leading-normal">If you'd like to collaborate on a project or have any questions related to web development, feel free to reach out. I'm here to discuss ideas, share insights, and help bring your digital projects to life. Looking forward to hearing from you soon!</p>


                    </div>
                    <div class="flex  items-center text-center  gap-2 flex-wrap justify-center">
                        <social-icon :href="'mailto:khaled.abo.oriban@gmail.com'" class="gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                viewBox="0 0 25 25" fill="none">
                                <path
                                    d="M20.5 4.02637H4.5C3.4 4.02637 2.51 4.92637 2.51 6.02637L2.5 18.0264C2.5 19.1264 3.4 20.0264 4.5 20.0264H20.5C21.6 20.0264 22.5 19.1264 22.5 18.0264V6.02637C22.5 4.92637 21.6 4.02637 20.5 4.02637ZM20.5 8.02637L12.5 13.0264L4.5 8.02637V6.02637L12.5 11.0264L20.5 6.02637V8.02637Z"
                                    fill="white" />
                            </svg> <span>khaled.walead@gmail.com</span> </social-icon>
                        <social-icon :href="'https://www.instagram.com/kh.w.e/'"><svg xmlns="http://www.w3.org/2000/svg" width="21" height="18" viewBox="0 0 21 18"
                                fill="none">
                                <path
                                    d="M20.96 2.02637C20.19 2.37637 19.36 2.60637 18.5 2.71637C19.38 2.18637 20.06 1.34637 20.38 0.336367C19.55 0.836367 18.63 1.18637 17.66 1.38637C16.87 0.526367 15.76 0.0263672 14.5 0.0263672C12.15 0.0263672 10.23 1.94637 10.23 4.31637C10.23 4.65637 10.27 4.98637 10.34 5.29637C6.78004 5.11637 3.61004 3.40637 1.50004 0.816367C1.13004 1.44637 0.920039 2.18637 0.920039 2.96637C0.920039 4.45637 1.67004 5.77637 2.83004 6.52637C2.12004 6.52637 1.46004 6.32637 0.880039 6.02637V6.05637C0.880039 8.13637 2.36004 9.87637 4.32004 10.2664C3.69077 10.4386 3.03013 10.4625 2.39004 10.3364C2.66165 11.1888 3.19358 11.9348 3.91106 12.4693C4.62854 13.0038 5.49549 13.3001 6.39004 13.3164C4.87367 14.5168 2.99404 15.1657 1.06004 15.1564C0.720039 15.1564 0.380039 15.1364 0.0400391 15.0964C1.94004 16.3164 4.20004 17.0264 6.62004 17.0264C14.5 17.0264 18.83 10.4864 18.83 4.81637C18.83 4.62637 18.83 4.44637 18.82 4.25637C19.66 3.65637 20.38 2.89637 20.96 2.02637Z"
                                    fill="white" />
                            </svg></social-icon>
                        <social-icon :href="'https://www.instagram.com/kh.w.e/'"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none">
                                <path
                                    d="M13.528 2.0276C14.2577 2.0248 14.9874 2.03213 15.717 2.0496L15.911 2.0566C16.135 2.0646 16.356 2.0746 16.623 2.0866C17.687 2.1366 18.413 2.3046 19.05 2.5516C19.71 2.8056 20.266 3.1496 20.822 3.7056C21.3303 4.2052 21.7238 4.80954 21.975 5.4766C22.222 6.1136 22.39 6.8406 22.44 7.9046C22.452 8.1706 22.462 8.3926 22.47 8.6166L22.476 8.8106C22.4937 9.53979 22.5014 10.2692 22.499 10.9986L22.5 11.7446V13.0546C22.5024 13.7843 22.4948 14.5141 22.477 15.2436L22.471 15.4376C22.463 15.6616 22.453 15.8826 22.441 16.1496C22.391 17.2136 22.221 17.9396 21.975 18.5766C21.7246 19.2444 21.3311 19.8492 20.822 20.3486C20.3219 20.8569 19.7173 21.2504 19.05 21.5016C18.413 21.7486 17.687 21.9166 16.623 21.9666C16.356 21.9786 16.135 21.9886 15.911 21.9966L15.717 22.0026C14.9874 22.0204 14.2577 22.028 13.528 22.0256L12.782 22.0266H11.473C10.7432 22.0291 10.0135 22.0214 9.28397 22.0036L9.08997 21.9976C8.85258 21.989 8.61524 21.979 8.37797 21.9676C7.31397 21.9176 6.58797 21.7476 5.94997 21.5016C5.28265 21.2509 4.6782 20.8574 4.17897 20.3486C3.67001 19.8489 3.27619 19.2442 3.02497 18.5766C2.77797 17.9396 2.60997 17.2136 2.55997 16.1496C2.54883 15.9123 2.53883 15.675 2.52997 15.4376L2.52497 15.2436C2.50653 14.5141 2.4982 13.7843 2.49997 13.0546V10.9986C2.49718 10.2692 2.50451 9.53979 2.52197 8.8106L2.52897 8.6166C2.53697 8.3926 2.54697 8.1706 2.55897 7.9046C2.60897 6.8396 2.77697 6.1146 3.02397 5.4766C3.27534 4.80922 3.66993 4.20504 4.17997 3.7066C4.67886 3.19735 5.28293 2.80317 5.94997 2.5516C6.58797 2.3046 7.31297 2.1366 8.37797 2.0866L9.08997 2.0566L9.28397 2.0516C10.0132 2.03317 10.7426 2.02484 11.472 2.0266L13.528 2.0276ZM12.5 7.0276C11.8375 7.01823 11.1797 7.14062 10.5649 7.38767C9.95016 7.63471 9.39061 8.00148 8.91881 8.46665C8.44701 8.93183 8.07237 9.48614 7.81665 10.0974C7.56094 10.7086 7.42926 11.3645 7.42926 12.0271C7.42926 12.6897 7.56094 13.3456 7.81665 13.9568C8.07237 14.5681 8.44701 15.1224 8.91881 15.5875C9.39061 16.0527 9.95016 16.4195 10.5649 16.6665C11.1797 16.9136 11.8375 17.036 12.5 17.0266C13.826 17.0266 15.0978 16.4998 16.0355 15.5621C16.9732 14.6244 17.5 13.3527 17.5 12.0266C17.5 10.7005 16.9732 9.42875 16.0355 8.49106C15.0978 7.55338 13.826 7.0276 12.5 7.0276ZM12.5 9.0276C12.8985 9.02026 13.2944 9.09239 13.6648 9.2398C14.0351 9.38721 14.3723 9.60694 14.6567 9.88614C14.9412 10.1653 15.1671 10.4984 15.3214 10.8659C15.4757 11.2334 15.5552 11.628 15.5552 12.0266C15.5553 12.4252 15.4759 12.8198 15.3218 13.1873C15.1677 13.5549 14.9418 13.888 14.6575 14.1673C14.3731 14.4466 14.036 14.6665 13.6657 14.814C13.2954 14.9615 12.8995 15.0338 12.501 15.0266C11.7053 15.0266 10.9423 14.7105 10.3796 14.1479C9.81704 13.5853 9.50097 12.8222 9.50097 12.0266C9.50097 11.2309 9.81704 10.4679 10.3796 9.90528C10.9423 9.34267 11.7053 9.0266 12.501 9.0266L12.5 9.0276ZM17.75 5.5276C17.4274 5.54051 17.1223 5.67775 16.8986 5.91057C16.6749 6.14339 16.55 6.45373 16.55 6.7766C16.55 7.09946 16.6749 7.40981 16.8986 7.64263C17.1223 7.87545 17.4274 8.01269 17.75 8.0256C18.0815 8.0256 18.3994 7.8939 18.6339 7.65948C18.8683 7.42506 19 7.10712 19 6.7756C19 6.44408 18.8683 6.12613 18.6339 5.89171C18.3994 5.65729 18.0815 5.5256 17.75 5.5256V5.5276Z"
                                    fill="white" />
                            </svg></social-icon>
                        <social-icon :href="'https://www.linkedin.com/in/khaled-abu-eriban-0b8548254/'"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25"
                                fill="none">
                                <path
                                    d="M7.43994 5.02639C7.43968 5.55682 7.22871 6.06543 6.85345 6.44031C6.47819 6.8152 5.96937 7.02566 5.43894 7.02539C4.90851 7.02513 4.39991 6.81416 4.02502 6.4389C3.65014 6.06364 3.43968 5.55482 3.43994 5.02439C3.44021 4.49396 3.65117 3.98536 4.02644 3.61047C4.4017 3.23558 4.91051 3.02513 5.44094 3.02539C5.97137 3.02566 6.47998 3.23662 6.85486 3.61188C7.22975 3.98714 7.44021 4.49596 7.43994 5.02639ZM7.49994 8.50639H3.49994V21.0264H7.49994V8.50639ZM13.8199 8.50639H9.83994V21.0264H13.7799V14.4564C13.7799 10.7964 18.5499 10.4564 18.5499 14.4564V21.0264H22.4999V13.0964C22.4999 6.92639 15.4399 7.15639 13.7799 10.1864L13.8199 8.50639Z"
                                    fill="white" />
                            </svg></social-icon>
                    </div>
                </div>

            </di>


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