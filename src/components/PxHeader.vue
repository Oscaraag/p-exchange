<template>
  <header class="shadow w-screen">
    <nav>
      <nav class="flex items-center justify-between flex-wrap bg-green-400 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <px-icon class="mr-3" />
          <router-link
            :to="{ name: 'home' }"
            class="font-semibold text-xl tracking-tight"
            >PlatziExchange</router-link
          >
        </div>
        <div
          class="sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm text-white lg:flex-grow">
            <router-link
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
              :to="{ name: 'home' }"
              >Home</router-link
            >
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from "@/components/PxIcon";

export default {
  name: "PxHeader",
  components: { PxIcon },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
};
</script>
