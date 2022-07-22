<script setup>
import { reactive, computed, watchEffect } from 'vue';

const props = defineProps({
  elevatorsTotal: Number,
  levelsTotal: Number,
});

const emit = defineEmits(['submit']);

const state = reactive({
  isOpen: false,
  elevatorsInput: '',
  levelsInput: '',
});

const submitEnabled = computed(() => {
  return state.elevatorsInput !== props.elevatorsTotal ||
    state.levelsInput !== props.levelsTotal
    ? true
    : false;
});

function open() {
  state.isOpen = true;
}

function close() {
  state.isOpen = false;
}

function closeOnEsc(event) {
  if (event.keyCode === 27) {
    close();
  }
}

function submit() {
  emit('submit', state.levelsInput, state.elevatorsInput);
  close();
}

watchEffect(() => {
  if (state.isOpen) {
    document.addEventListener('keydown', closeOnEsc);
    state.elevatorsInput = props.elevatorsTotal;
    state.levelsInput = props.levelsTotal;
  } else {
    document.removeEventListener('keydown', closeOnEsc);
  }
});
</script>

<template>
  <button
    @click="open"
    class="px-3 py-2 mx-auto my-5 bg-blue-500 border-current rounded hover:bg-blue-600 !ring-blue-500/50"
  >
    <span class="text-lg font-semibold text-white">Настройки</span>
  </button>

  <Teleport to="#app">
    <Transition name="modal">
      <div
        v-if="state.isOpen"
        @click.self="close"
        class="fixed inset-0 z-50 transition-opacity ease-linear bg-black/50"
      >
        <div
          class="w-auto m-4 transition-transform duration-300 bg-white rounded-md ease-out-default modal-container sm:max-w-lg sm:mx-auto sm:my-10"
        >
          <div class="flex flex-col">
            <div class="flex items-start justify-between p-4 border-b">
              <h5 class="text-xl font-medium">Настройки</h5>
              <button
                @click="close"
                class="p-4 -m-4 border-0 group hover:ring-0"
              >
                <span
                  class="text-2xl leading-none text-gray-400 transition-colors group-hover:text-black"
                  >×</span
                >
              </button>
            </div>
            <div class="flex flex-col items-center gap-2 p-4">
              <div class="flex flex-col items-center gap-1">
                <label for="levels">Количество этажей</label>
                <div class="flex">
                  <button
                    @click="state.levelsInput--"
                    :disabled="state.levelsInput <= 2"
                    class="z-50 w-10 py-2 border rounded-l"
                  >
                    <span class="text-2xl font-bold leading-none">-</span>
                  </button>
                  <input
                    id="levels"
                    class="w-20 -mx-px text-lg font-semibold text-center border rounded-none"
                    type="number"
                    required
                    v-model.number="state.levelsInput"
                    disabled
                  />
                  <button
                    @click="state.levelsInput++"
                    :disabled="state.levelsInput >= 10"
                    class="w-10 py-2 border rounded-r"
                  >
                    <span class="text-2xl font-bold leading-none">+</span>
                  </button>
                </div>
              </div>
              <div class="flex flex-col items-center gap-1">
                <label for="elevators">Количество лифтов</label>
                <div class="flex">
                  <button
                    @click="state.elevatorsInput--"
                    :disabled="state.elevatorsInput <= 1"
                    class="z-50 w-10 py-2 border rounded-l"
                  >
                    <span class="text-2xl font-bold leading-none">-</span>
                  </button>
                  <input
                    id="elevators"
                    class="w-20 -mx-px text-lg font-semibold text-center border rounded-none"
                    type="number"
                    required
                    v-model.number="state.elevatorsInput"
                    disabled
                  />
                  <button
                    @click="state.elevatorsInput++"
                    :disabled="state.elevatorsInput >= 10"
                    class="w-10 py-2 border rounded-r"
                  >
                    <span class="text-2xl font-bold leading-none">+</span>
                  </button>
                </div>
              </div>
              <p
                v-if="submitEnabled"
                class="p-1 text-sm text-center text-red-500"
              >
                После принятия изменений состояния лифтов будут сброшены,
                очередь очищена, а страница перезагружена!
              </p>
            </div>
            <div class="flex justify-end gap-3 p-4 border-t">
              <button
                @click="close"
                class="px-3 py-2 bg-gray-500 rounded hover:bg-gray-600 !ring-gray-500/50"
              >
                <span class="font-medium text-white">Отмена</span>
              </button>
              <button
                :disabled="!submitEnabled"
                @click="submit"
                class="px-3 py-2 bg-blue-500 rounded hover:bg-blue-600 !ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span class="font-medium text-white">Принять</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: translateY(-25%);
}
</style>
