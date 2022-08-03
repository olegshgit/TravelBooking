<template>
  <a-input :class="'type-' + type"></a-input>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';

  const { type = 1 } = defineProps({
    type: {
      type: Number as PropType<1>,
      default: 1,
    },
  });
</script>

<style lang="less">
  .type-1 {
    &.ant-input {
      @apply py-0 border-unamed-grey;
      height: 3.5rem !important;
    }
  }
</style>
