<template>
  <div class="bg-white flex-1">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="quiz in quizzes" :key="quiz.id" class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="quiz.imageSrc" :alt="quiz.imageAlt" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
              <h3 class="text-sm text-gray-700">
                <a :href="quiz.href">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ quiz.title }}
                </a>
              </h3>
            </div>
            <p class="text-sm font-medium text-gray-900">{{ quiz.questions_count }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const quizzes = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    questions_count: '$35',
  },
  {
    id: 2,
    title: 'Nomad Tumbler',
    href: '#',
    questions_count: '$35',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
    imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
  },
  {
    id: 3,
    title: 'Focus Paper Refill',
    href: '#',
    questions_count: '$89',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
    imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
  },
]
export default {
  setup() {
    return {
      quizzes,
    }
  },
}
</script>

<style scoped>

</style>