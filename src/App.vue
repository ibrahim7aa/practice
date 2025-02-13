<!-- <script setup>
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLightbulb, faMoon, faSearch, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { ref, onMounted, onUnmounted } from "vue";
library.add(faLightbulb, faMoon, faSearch, faGlobe, faGithub);
const isDark = ref(localStorage.getItem("theme") === "dark");
const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
  document.documentElement.classList.toggle("dark", isDark.value);
};
const searchQuery = ref("");
const languages = ref([]);
const selectedLanguage = ref("en");

const fetchLanguages = async () => {
  try {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const uniqueLanguages = new Set();

    response.data.forEach((country) => {
      if (country.languages) {
        Object.values(country.languages).forEach((lang) => {
          uniqueLanguages.add(lang);
        });
      }
    });

    languages.value = Array.from(uniqueLanguages).sort();
  } catch (error) {
    console.error("Error fetching languages:", error);
  }
};
onMounted(() => {
  fetchLanguages(); // Ye line add karein
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.addEventListener("scroll", handleScroll);
  }
});


onUnmounted(() => {
  const mainContent = document.getElementById("main-content");
  if (mainContent) {
    mainContent.removeEventListener("scroll", handleScroll);
  }
});

const headings = ref([
  { id: "intro", title: "Introduction", content: "This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section." },
  { id: "features", title: "Features", content: "FastAP   This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.           yuuu b              bbbhbyubniuhbghyjngyujnbgjhyunhuikjuikjioI features section. " },
  { id: "installation", title: "Installation", content: "To inThis istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.stall FastAPI, run: pip install fastapi." },
  { id: "usage", title: "Usage", content: "You can start This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.building APIs quickly with FastAPI." },
  { id: "deployment", title: "Deployment", content: "FastAPIThis istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section.This istyewvbhdjwnshyubj dwjqudvgasjkwuhyehbasjjjjjjjjjjjjjjjjjjjjjjjjjj                                 nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn the introduction section. can be deployed using various methods." }
]);

const activeSection = ref("");

const handleScroll = () => {
  let closestSection = null;
  let minDistance = Number.MAX_VALUE;

  const mainContent = document.getElementById("main-content"); // Get main div
  if (!mainContent) return;

  headings.value.forEach((heading) => {
    const section = document.getElementById(heading.id);
    if (section) {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top - mainContent.getBoundingClientRect().top);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = heading.id;
      }
    }
  });

  if (closestSection && activeSection.value !== closestSection) {
    activeSection.value = closestSection;
    updateURL(closestSection);
  }
};

const updateURL = (id) => {
  history.replaceState(null, "", `#${id}`);
};

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    updateURL(id);
    activeSection.value = id;
  }
};
</script>
<template>
  <nav class="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
 
    <div class="flex items-center space-x-2">
      <img src="@/assets/logo.png" alt="Logo" class="h-10" />
      <span class="text-lg font-semibold">FastAPI</span>
    </div>
>
    <div class="flex items-center space-x-4">
      <button @click="toggleDarkMode">
        <FontAwesomeIcon :icon="isDark ? 'moon' : 'lightbulb'" class="text-xl" />
      </button>

      <div class="relative">
        <FontAwesomeIcon icon="globe" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <select v-model="selectedLanguage" class="pl-10 pr-4 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none">
          <option value="en">English</option>
          <option v-for="(lang, index) in languages" :key="index" :value="lang">
            {{ lang }}
          </option>
        </select>
      </div>

      <div class="relative">
        <FontAwesomeIcon icon="search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          class="pl-10 pr-4 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <a href="https://github.com/fastapi/fastapi" target="_blank">
        <FontAwesomeIcon icon="github" class="text-xl" />
      </a>
    </div>
  </nav>
  <div class="flex h-screen">
    <aside class="w-1/5 bg-gray-200 dark:bg-gray-800 p-4">
      <h2 class="text-center text-xl font-bold mb-4">FastAPI</h2>
    </aside>
<main id="main-content" class="w-3/5 p-6 dark:bg-gray-800 overflow-y-auto h-screen">
  <section v-for="heading in headings" :id="heading.id" :key="heading.id" class="mb-6">
    <h1 class="text-2xl font-bold mb-2">{{ heading.title }}</h1>

    <p v-if="heading.content" class="text-gray-700 dark:text-gray-300">{{ heading.content }}</p>

    <div v-if="heading.images" class="grid grid-cols-2 gap-4 mt-4">
      <img v-for="(image, index) in heading.images" :key="index" :src="image" class="w-full h-auto rounded-lg shadow-md" />
    </div>
  </section>
</main>
    <aside class="w-1/5 bg-gray-200 dark:bg-gray-800 p-4">
  <h2 class="text-center text-xl font-bold mb-4">Sections</h2>
  <ul>
    <li v-for="heading in headings" :key="heading.id" class="mb-2">
      <button 
        @click="scrollToSection(heading.id)" 
        class="w-full text-left px-4 py-2 rounded-lg transition duration-200"
        :class="{ 
          'active': activeSection === heading.id,
          'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600': activeSection !== heading.id 
        }"
      >
        {{ heading.title }}
      </button>
    </li>
  </ul>
</aside>

  </div>
</template>

<style>
/* Dark Mode Styles */
html.dark {
  background-color: #1a202c;
  color: white;
}
.active {
  background-color: #3b82f6; /* Blue color */
  color: white;
}
</style> -->
<template>
 <FoodItems />
</template>
<script >
import FoodItems from "./components/FoodItems.vue";

export default {
  components: {
FoodItems 
}
};
</script>