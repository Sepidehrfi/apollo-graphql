<template>
  <div
    @click="toggleDetails()"
    class=" cursor-pointer relative flex  min-w-0 break-words bg-white w-full px-8 py-4 shadow-lg rounded-xl mx-auto border-green-500 transform transition-transform hover:-translate-y-2 focus:translate-y-2 overflow-hidden h-40 Domains justify-between"
  >
    <div
      v-if="loading"
      id="loading-overlay"
      class="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-60"
    >
      <svg
        class="animate-spin h-8 w-8 text-white mr-3"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>

      <span class="text-white text-3xl font-bold">Loading...</span>
    </div>
    <div
      class="absolute w-68 bg-green-500 h-full left-0 top-0 details"
      :style="`width: ${detailsWidth}`"
    >
      <div v-if="detailsDomain" class="flex justify-around">
        <div class="my-3 ">
          <p class="mb-1 truncate">
            <span class="font-bold"> ip :</span> {{ detailsDomain.ip }}
          </p>
          <p class="mb-1  truncate">
            <span class="font-bold"> country :</span>
            {{ detailsDomain.country_name }}
          </p>
          <p class="mb-1  truncate">
            <span class="font-bold"> region : </span>
            {{ detailsDomain.region_name }}
          </p>
          <p class="mb-1 truncate">
            <span class="font-bold"> city : </span>
            {{ detailsDomain.city }}
          </p>
          <p class="mb-1 truncate">
            <span class="font-bold"> continent : </span>
            {{ detailsDomain.continent_name }}
          </p>
        </div>
        <iframe
          v-if="detailsDomain"
          width="500"
          height="170"
          :src="
            `https://maps.google.com/maps?q=${detailsDomain.latitude}, ${detailsDomain.longitude}&z=15&output=embed`
          "
          frameborder="0"
          style="border:0"
        ></iframe>
        <!-- <img
          class="shadow-2xl ... h-30 w-30 inline-block mr-2"
          :src="detailsDomain.location.flag"
        /> -->
      </div>
    </div>

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

    <img
      class="shadow-2xl ... h-30 w-30 inline-block mr-2"
      :src="Domains.screenshot"
    />

    <p class="mb-2 text-center text-2xl font-bold text-gray-900">
      {{ Domains.page.title }}
    </p>

    <div>
      <p class="mb-1 w-10/12 truncate">
        <span class="font-bold"> country :</span> {{ Domains.page.country }}
      </p>
      <p class="mb-1 w-10/12 truncate">
        <span class="font-bold"> time :</span> {{ Domains.task.time }}
      </p>
      <p class="mb-1 w-10/12 truncate">
        <span class="font-bold"> domain : </span>
        {{ Domains.task.domain }}
      </p>
      <p class="mb-1 w-10/12 truncate">
        <span class="font-bold"> asnname : </span>
        {{ Domains.page.asnname }}
      </p>
      <p class="mb-1 w-10/12 truncate">
        <span class="font-bold"> ip : </span>
        {{ Domains.page.ip }}
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, ref } from "vue";
import axios from "axios";

const props = defineProps({
  Domains: {
    type: Object,
    required: true
  },
  searchOptions: {
    type: Object,
    required: true
  }
});

const loading = ref(false);
const detailsWidth = ref("1%");
const detailsDomain = ref(null);

const toggleDetails = () => {
  if (detailsDomain.value) {
    detailsWidth.value = "1%";
    detailsDomain.value = null;
  } else {
    loading.value = true;
    axios
      .get(`https://api.apilayer.com/ip_to_location/${props.Domains.page.ip}`, {
        headers: {
          apikey: "Wpt5YuhCWDY723hVIZD8dOb4SqYzkP8q"
        }
      })
      .then(response => {
        loading.value = false;
        detailsDomain.value = response.data;
        detailsWidth.value = "75%";
      });
  }
};
</script>

<style scoped>
.metadata:not(:first-child)::before {
  content: "∙";
  margin: 0 0.375rem;
}
.details {
  transition: all 0.3s;
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
