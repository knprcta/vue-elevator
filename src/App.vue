<script setup>
import { ref, reactive, watchEffect } from 'vue';
import TheElevator from './components/TheElevator.vue';
import TheLevel from './components/TheLevel.vue';

const elevatorList = ref([]);
const levelList = ref([]);

const state = reactive({
  elevatorsTotal: 3,
  levelsTotal: 7,
  queue: [],
});

function call(level) {
  if (
    !elevatorList.value.some(
      (item) => item.currentLevel === level && item.isIdle
    ) &&
    !elevatorList.value.some((item) => item.nextLevel === level) &&
    !state.queue.includes(level)
  ) {
    const i = levelList.value.findIndex((item) => item.number === level);
    levelList.value[i].isRequested = true;
    state.queue.push(level);
  }
}

function stop(level) {
  const i = levelList.value.findIndex((item) => item.number === level);
  levelList.value[i].isRequested = false;
}

function run() {
  const freeElevatorsArr = elevatorList.value.filter((item) => item.isIdle);
  const levelsOfFreeElevsArr = freeElevatorsArr
    .map((item) => (item = item.currentLevel))
    .sort((a, b) => b - a);
  const closestLevel = levelsOfFreeElevsArr.reduce((a, b) => {
    return Math.abs(b - state.queue[0]) < Math.abs(a - state.queue[0]) ? b : a;
  });
  const i = elevatorList.value.findIndex(
    (item) => item.currentLevel === closestLevel && item.isIdle
  );
  elevatorList.value[i].nextLevel = state.queue.shift();
}

watchEffect(() => {
  if (state.queue.length && elevatorList.value.some((item) => item.isIdle)) {
    run();
  }
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
        @stop="stop"
      />
      <div class="flex flex-col-reverse flex-grow">
        <TheLevel
          v-for="item in state.levelsTotal"
          ref="levelList"
          :key="item"
          :number="item"
          @call="call"
        />
      </div>
    </div>
  </div>
</template>
