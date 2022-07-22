<script setup>
import { reactive, computed, watch, toRefs, onBeforeMount } from 'vue';

const props = defineProps({
  number: Number,
  levelsTotal: Number,
});

const emit = defineEmits(['stop']);

const state = reactive({
  currentLevel: 1,
  nextLevel: 1,
  timer: 3,
  isIdle: true,
  isMoving: false,
  isMovingUp: false,
  isOpen: false,
  isLocal: false,
});

watch(
  () => state.nextLevel,
  () => {
    if (state.nextLevel !== state.currentLevel) {
      run();
    }
  }
);

function start() {
  state.isIdle = false;
  state.isMovingUp = state.currentLevel < state.nextLevel;
  state.isMoving = true;
}

async function stop() {
  emit('stop', state.currentLevel);
  state.isMoving = false;
  state.isOpen = true;
  while (state.timer > 0) {
    state.timer--;
    await delay(1000);
  }
  state.isOpen = false;
  state.isIdle = true;
  state.timer = 3;
  state.isLocal = false;
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  start();
  if (state.isLocal) {
    await delay(1000);
  }
  if (state.isMovingUp) {
    while (state.currentLevel < state.nextLevel) {
      state.currentLevel++;
      await delay(1000);
    }
  }
  if (!state.isMovingUp) {
    while (state.currentLevel > state.nextLevel) {
      state.currentLevel--;
      await delay(1000);
    }
  }
  stop();
}

const elevatorStyle = computed(() => {
  return {
    height: `${(1 / props.levelsTotal) * 100}%`,
    transform: `translateY(-${(state.currentLevel - 1) * 100}%)`,
  };
});

watch(state, () => {
  localStorage.setItem(`elevator-${props.number}`, JSON.stringify(state));
});

onBeforeMount(() => {
  if (localStorage[`elevator-${props.number}`]) {
    const newState = JSON.parse(
      localStorage.getItem(`elevator-${props.number}`)
    );
    state.currentLevel = newState.currentLevel;
    state.timer = newState.timer;
    state.isMoving = newState.isMoving;
    state.isMovingUp = newState.isMovingUp;
    state.isIdle = newState.isIdle;
    state.isOpen = newState.isOpen;
    state.nextLevel = newState.nextLevel;
    if (state.nextLevel === 1 && state.isMoving) {
      run();
    }
    if (state.isMoving) {
      state.isLocal = true;
    }
    if (
      (state.currentLevel === state.nextLevel && !state.isIdle) ||
      state.isOpen
    ) {
      setTimeout(() => {
        stop();
      }, 100);
    }
  }
});

defineExpose({
  ...toRefs(props),
  ...toRefs(state),
});
</script>

<template>
  <div class="relative flex flex-col h-full bg-gray-200 max-w-[8rem] w-full">
    <div
      :style="elevatorStyle"
      :class="[
        { 'animate-push': state.isOpen },
        { 'flex-col-reverse': !state.isMovingUp },
        'absolute bottom-0 flex flex-col items-center justify-center w-full text-white transition-transform duration-1000 ease-linear bg-black border-2 border-white will-change-transform',
      ]"
    >
      <span
        v-if="state.isMoving"
        :class="[{ 'rotate-180': !state.isMovingUp }, 'text-xl md:text-3xl']"
      >
        ↑
      </span>
      <span class="text-lg font-semibold">{{ state.nextLevel }}</span>
    </div>
    <div
      v-for="item in levelsTotal"
      :key="item"
      class="flex-grow w-full border-2 border-white"
    ></div>
  </div>
</template>
