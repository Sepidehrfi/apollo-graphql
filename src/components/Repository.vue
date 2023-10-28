<template>
  <a
    class="relative flex  min-w-0 break-words bg-white w-full px-8 py-4 shadow-lg rounded-xl mx-auto border-green-500 transform transition-transform hover:-translate-y-2 focus:translate-y-2 overflow-hidden h-40 repository justify-between"
    href="#"
    target="_blank"
  >
    <div class="absolute w-68 h-full right-0 top-0 text-green-500">
      <div class="v-full h-full opacity-50 dots-pattern">
        <svg width="100%" height="100%">
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle fill="currentcolor" cx="2" cy="2" r="1"></circle>
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)"></rect>
        </svg>
      </div>
    </div>
    <!-- <div class="min-w-0 relative flex-auto sm:pr-20 lg:pr-0 xl:pr-20"> -->
    <div class="flex">
      <img
        class="shadow-2xl ... h-30 w-30 inline-block mr-2"
        :src="repository.screenshot"
      />
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-gray-900 "
      >
        {{ repository.page.title }}
      </h5>
    </div>
    <div>
      <p class="mb-3 font-normal text-gray-700">
        {{ repository.page.asnname }}
      </p>
      <p class="mb-2 w-10/12 truncate">
        {{ repository.page.ip }}
      </p>
      <p class="mb-2 w-10/12 truncate">
        {{ repository.page.country }}
      </p>
      <p class="mb-2 w-10/12 truncate">
        {{ repository.task.time }}
      </p>
      <p class="mb-2 w-10/12 truncate">
        {{ repository.task.domain }}
      </p>
    </div>

    <!-- </div> -->
  </a>
</template>
<script lang="ts" setup>
import { defineProps, toRefs } from "vue";


const props = defineProps({
  repository: {
    type: Object,
    required: true
  },
  searchOptions: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.repository {
  border-left-width: 0.75rem;
}

.metadata:not(:first-child)::before {
  content: "∙";
  margin: 0 0.375rem;
}

.dots-pattern::after {
  content: "";
  position: absolute;
  z-index: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(
    to top left,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 50%
  );
}

.stargazers-count::before {
  content: "";
  height: 2rem;
  width: calc(100% + 2rem);
  position: absolute;
  bottom: -0.75rem;
  right: 0;
  background-color: rgba(16, 185, 129, 0.5);
}
</style>
