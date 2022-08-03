<template>
  <div class="inline-flex items-center">
    <a-button class="button" @click="decrease">
      <MinusOutlined />
    </a-button>
    <span class="inline-block mx-5">{{ componentValue }}</span>
    <a-button class="button" @click="increase">
      <PlusOutlined />
    </a-button>
  </div>
</template>

<script setup lang="ts">
  import { MinusOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { ref, watch } from 'vue';
  const {
    value,
    defaultValue = 0,
    min = Number.MIN_SAFE_INTEGER,
    max = Number.MAX_SAFE_INTEGER,
    step = 1,
  } = defineProps<{
    value?: number;
    defaultValue?: number;
    min?: number;
    max?: number;
    step?: number;
  }>();
  const emit = defineEmits<{ (event: 'update:value', value: number): void }>();

  const getValue = (input: number) =>
    input < min ? min : input > max ? max : input;

  const componentValue = ref<number>(getValue(value || defaultValue));

  watch([value], () => {
    componentValue.value = getValue(value || 0);
  });

  const decrease = () => {
    const newValue = getValue(componentValue.value - step);
    emit('update:value', newValue);
    componentValue.value = newValue;
  };

  const increase = () => {
    const newValue = getValue(componentValue.value + step);
    if (newValue <= max) {
      emit('update:value', newValue);
      componentValue.value = newValue;
    }
  };
</script>

<style lang="less" scoped>
  .button {
    @apply text-purple bg-light-pink rounded h-6 w-6 inline-flex items-center justify-center p-0 border-transparent hover:border-pink focus:border-pink active:border-pink !important;
  }
</style>
