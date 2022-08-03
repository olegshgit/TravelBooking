<template>
  <span
    class="py-2 px-3 inline-flex items-center cursor-pointer font-medium text-xs"
    @click="toggleDirection"
  >
    <span class="inline-flex flex-col text-[9px] font-medium mr-2">
      <Icon :class="{ 'text-unamed-grey': direction === 'asc' }">
        <template #component> <Up /></template>
      </Icon>
      <Icon :class="['mt-1', { 'text-unamed-grey': direction === 'desc' }]">
        <template #component> <Down /></template>
      </Icon>
    </span>
    <slot />
  </span>
</template>

<script setup lang="ts">
  import Down from '@/assets/icons/down.svg?component';
  import Up from '@/assets/icons/up.svg?component';
  import Icon from '@ant-design/icons-vue';
  import { ref } from 'vue';

  const direction = ref<'asc' | 'desc'>('desc');

  const toggleDirection = () => {
    direction.value = direction.value === 'asc' ? 'desc' : 'asc';
  };
</script>

<style scoped lang="less"></style>
