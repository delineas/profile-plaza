<template>
  <div class="md:w-1/2 xl:w-1/3">
    <div class="m-2 bg-cobalt-900 rounded-md pt-5 text-center text-gray-200">
      <div class="flex flex-col justify-between items-center">
        <div class="relative">
          <div v-show="profile.premium"
            class="absolute bottom-0 w-full bg-yellow-300 rounded-md font-bold text-black-900"
          >PREMIUM</div>
          <img
            class="m-auto rounded-full w-48 border border-solid border-white"
            src="https://unavatar.now.sh/jeffrey_way"
          />
        </div>
        <div class="mt-4 text-xl font-bold">{{profile.name}}</div>
        <div>
          <span>{{profile.status}}</span>
          <span>{{profile.flag}}</span>
        </div>
        <p class="px-2 max-w-xs">{{profile.headline}}</p>
      </div>

      <div class="bg-blue-500 text-left p-2 mt-5">
        <ul class="list-none">
          <li v-for="skill in profile.skills" :key="skill" class="m-1 mt-2 p-1 border border-solid inline-block">{{skill}}</li>
        </ul>
      </div>

      <div class="flex justify-center flex-wrap p-3">
        <a 
          :href="profile.website"
          class="mx-2 my-1 px-8 py-3 md:px-3 bg-blue-400 rounded-md border border-transparent hover:bg-blue-900 hover:border-white"
        >Website</a>
        <a :href="profile.twitter" class="mx-2 my-1 px-8 py-3 md:px-3 bg-blue-400 rounded-md">Twitter</a>
        <a :href="profile.github" class="mx-2 my-1 px-8 py-3 md:px-3 bg-blue-400 rounded-md">Github</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ["profile"]
}
</script>