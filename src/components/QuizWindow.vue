<template>

  <div class="bg-white flex-1">
    <div v-if="quizzes.length">
      <div class="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div v-for="quiz in quizzes" :key="quiz.id" class="group relative">
            <router-link :to="{name: 'Home', param: {id: quiz.id}}">
              <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
              </div>
              <div class="mt-4 flex justify-between">
                <div>
                  <h3 class="text-sm text-gray-700">
                    <a href="#">
                      <span aria-hidden="true" class="absolute inset-0" />
                      {{ quiz.title }}
                    </a>
                  </h3>
                </div>
                <p class="text-sm font-medium text-gray-900">{{ quiz.questions_count }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading quizzes...</p>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      quizzes:[]
    }
  },
  mounted() {
    fetch('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes', {
      headers: {'X-Access-Token': '266e46777f10157b3a8d16fc3a096eb5a30d9a3e85e1c0e875f80b4b3b413dc5'}
    })
      .then(response => response.json())
      .then(data => this.quizzes = data)
      .then(data => console.log(data))
      .catch(error => console.log(error.message))
  },
  // setup() {
  //   return {
  //     quizzes,
  //   }
  // },
}
</script>

<style scoped>

</style>