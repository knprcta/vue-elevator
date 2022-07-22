<script setup>
import { defineProps, defineExpose, reactive, toRefs } from 'vue';

const props = defineProps({
  number: Number,
});

const state = reactive({
  isRequested: false,
});

defineExpose({
  ...toRefs(props),
  ...toRefs(state),
});
</script>

<template>
  <div
    class="flex flex-col items-start justify-center flex-grow px-3 bg-gray-300 border-2 border-white md:px-6 flex-2"
  >
    <div class="flex items-center gap-4">
      <button
        @click="$emit('call', number)"
        :class="[
          {
            'text-blue-500 border-blue-500 ring-blue-500/50 animate-push scale-90 cursor-wait hover:bg-transparent':
              state.isRequested,
          },
          'flex p-2.5 border-2 border-black rounded-full hover:bg-gray-400 ring-black/50',
        ]"
      >
        <span class="w-3 h-3 bg-current rounded-full"></span>
      </button>
      <span class="text-lg font-semibold">{{ number }}</span>
    </div>
  </div>
</template>
