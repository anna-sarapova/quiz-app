<template>
  <div class="relative flex min-h-screen">
    <!--Sidebar-->
    <div
        class="
        bg-indigo-800
        text-purple-100
        w-64
        space-y-6
        px-2
        absolute
        inset-y-0
        left-0
        md:relative
        md:-translate-x-0
        transform
        -translate-x-full
        transition
        duration-200
        ease-in-out"
        :class="{ 'relative -translate-x-0': showSidebar }"
    >
      <a href="" class="flex items-center space-x-2 px-4 py-4">
        <svg xmlns="http://www.w3.org/2000/svg"
             class="h-10 w-10"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor"
             stroke-width="2">
          <path stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-xl font-extrabold text-white">Quiz Planet</span>
      </a>
      <nav>
        <div class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded hover:text-indigo-200 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/>
          </svg>
          <router-link :to="{name: 'HomePage'}">
            <span class="text-white px-1">Home</span>
          </router-link>
        </div>
        <div class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded hover:text-indigo-200 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"/>
          </svg>
          <router-link :to="{name: 'all_quizzes'}">
          <span class="text-white px-1" @click="getQuizzes">Quizzes</span>
          </router-link>
        </div>
         <div class="flex items-center py-3 px-4 hover:bg-indigo-700 rounded hover:text-indigo-200 transition duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <router-link :to="{name: 'Register'}">
            <span class="text-white px-1">Register</span>
          </router-link>
         </div>
      </nav>
    </div>

    <!--Main Content-->
    <div class="flex-1">

      <!--Header-->
      <div class="
           bg-indigo-900
           text-purple-100 shadow px-2 py-4">
        <button
            @click="showSidebar = !showSidebar"
            class="text-indigo-100 font-extrabold md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
        <h2 class="text-2xl font-extrabold tracking-tight text-center">Welcome to the Quiz Planet</h2>
      </div>
      <!--Content-->
      <router-view />
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import QuizWindow from "./QuizWindow.vue";
export default {
  components: {
    QuizWindow
  },
  setup() {
    const showSidebar = ref(false);
    return {
     showSidebar,
    };
  },
  methods: {
    async getQuizzes() {
    }
  }
};
</script>

<style scoped>

</style>