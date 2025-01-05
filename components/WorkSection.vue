<template>
    <section books class="relative  flex flex-col items-start justify-center px-[20px] md:px-[80px] pt-[80px] pb-[90px] ">
      <div class="header" data-aos="fade-right">
        <h2 class="text-shade1 text-13xl lg:text-29xl">My work</h2>
        <p class="mt-4 text-base lg:text-lg  text-shade-2 md:max-w-[750px]">Here's a glimpse of some of my recent and
          exciting full-stack projects. Each of them demonstrates my expertise in both front-end and back-end development,
          showcasing my dedication to creating seamless user experiences and robust web applications.</p>
  
      </div>
      <div class="projects flex flex-col gap-7 md:gap-10 w-full my-11 lg:my-14">
        <project v-for="repo in githubRepos" :key="repo.id" :title="repo.name" :date="repo.created_at"  :src="repo.imageSrc"
          :language="repo.language" :href="repo.url" :description="repo.description" :buttonText="repo.name === 'Ibdaatec' ? 'Visit Website' : 'Explore on GitHub'">
          {{ repo.name === 'Ibdaatec' ? 'Visit Website' : 'Explore on GitHub' }}
         >
        </project>
 
  
  
      </div>
    </section>
  </template>
  
  <script setup>
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
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
  // const githubRepos = ref([]);
  const githubRepos = ref([
    
  {
  "id": 889256192,
  "name": "Ibdaatec",
  "description": "Ibdaatec is an innovative digital solutions company I founded, dedicated to creating modern websites, online stores, and custom web applications. The company focuses on delivering seamless user experiences and reliable functionality tailored to client needs.",
  "imageSrc": "https://media.graphassets.com/aYT9j70WT0iCWHo0lbEc",
  "url": "https://ibdaatec.com",
  "created_at": "2024-12-19T00:00:00Z",
  "language": "Full-Stack Development",
  
}
  
  ,{
    "id": 689256191,
    "name": " Anon Chat Hub API",
    "description": "AnonChatHub is a secure and anonymous chat application that allows users to communicate privately. It employs encryption to ensure message privacy and offers real-time notifications when new messages arrive.",
    "imageSrc": "https://media.graphassets.com/haRfWCPITdaeMPL00hdK",
    "url": "https://github.com/khaled50k/AnonChatHub",
    "created_at": "2023-09-09T08:37:42Z",
    "language": "JavaScript",
  
  }, {
    "id": 673958086,
    "name": "Blog Platform API",
    "description": "The Blog Platform API simplifies blog content management. It provides a user-friendly interface for creating, editing, and publishing articles, ensuring a seamless blogging experience with secure authentication and efficient data handling.",
    "imageSrc": "https://media.graphassets.com/obzyvwtXTbyHp9XY61rt",
    "url": "https://github.com/khaled50k/BlogPlatform",
    "created_at": "2023-08-02T20:13:45Z",
    "language": "JavaScript",
  }
    , {
    "id": 675072503,
    "name": "Blog Platform",
    "description": "The Blog Platform project is a feature-rich web application for creating and managing blog content. It offers a user-friendly interface for bloggers to write, edit, and publish articles.",
    "imageSrc": "https://media.graphassets.com/E0dx5VLBTuK32HtpZ54p",
    "url": "https://github.com/khaled50k/blog-platform-vue",
    "created_at": "2023-08-05T17:19:31Z",
    "language": "Vue",
  }
    , {
    "id": 687099817,
    "name": "Dental Clinic API",
    "description": "The Dental Clinic API project provides backend support for a dental clinic management system. It includes features for appointment scheduling, patient records, and billing.",
    "imageSrc": "https://media.graphassets.com/kKMo2cHR5qSmCunSrVb4",
    "url": "https://github.com/khaled50k/Dental-Clinic-API",
    "created_at": "2023-09-04T15:57:20Z",
    "language": "JavaScript",
  }
    , {
    "id": 659828327,
    "name": "Movie API",
  
    "description": "The Movie API project offers a comprehensive database of movies, including details like titles, genres, and release dates. It provides RESTful endpoints for retrieving movie information.",
    "imageSrc": "https://media.graphassets.com/nAbbCLlmRk2bHnIESDIj",
    "url": "https://github.com/khaled50k/Movie-API-NODE-JS",
    "created_at": "2023-06-28T16:40:56Z",
    "language": "JavaScript",
  }
    , {
    "id": 624802156,
    "name": "Online Store API",
    "description": "The Online Store API project serves as the backend for an e-commerce platform. It includes features for managing products, processing orders, and handling customer data securely.",
    "imageSrc": "https://media.graphassets.com/pwrJIcgQ1mnrS3ad8B8K",
    "url": "https://github.com/khaled50k/OnlineStoreApi",
    "created_at": "2023-04-07T09:41:13Z",
    "language": "JavaScript",
  }
    , {
    "id": 624802156,
    "name": "Online Store API",
    "description": "This version of the Online Store API project is built using PHP. It offers the same e-commerce functionalities as the JavaScript version, with PHP as the backend scripting language.",
    "imageSrc": "https://media.graphassets.com/yp2vMKrXQnKBhHP1oX0i",
    "url": "https://github.com/khaled50k/OnlineStoreApiPhp",
    "created_at": "2023-04-07T09:41:13Z",
    "language": "PHP",
  }
  
  
  ]);
  
  
  // onMounted(async () => {
  //   try {
  //     // Make an API request to fetch your GitHub repositories
  //     const response = await axios.get('https://api.github.com/users/khaled50k/repos');
  
  //     // Store the repository data in githubRepos
  //     githubRepos.value = response.data;
  //   } catch (error) {
  //     console.error('Error fetching GitHub repositories:', error);
  //   }
  // });
  </script>
  
  <style></style>