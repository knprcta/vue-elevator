<script setup>
import { reactive } from 'vue';
import TheElevator from './components/TheElevator.vue';
import TheLevel from './components/TheLevel.vue';

const state = reactive({
  elevatorsTotal: 1,
  levelsTotal: 5,
});
</script>

<template>
  <div
    class="flex flex-col w-full h-[85vh] px-3 md:pb-8 md:px-8 xl:px-20 xl:pb-20 xl:pt-5 md:h-screen"
  >
    <div class="flex flex-row h-full">
      <TheElevator
        v-for="item in state.elevatorsTotal"
        ref="elevatorList"
        :key="item"
        :number="item"
        :levelsTotal="state.levelsTotal"
      />
      <div class="flex flex-col-reverse flex-grow">
        <TheLevel
          v-for="item in state.levelsTotal"
          ref="levelList"
          :key="item"
          :number="item"
        />
      </div>
    </div>
  </div>
</template>
