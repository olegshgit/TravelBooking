<template>
  <a-input-number
    :class="[
      'type-' + type,
      {
        'input-number-center': center,
      },
    ]"
  ></a-input-number>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';

  const { type = 1, center = false } = defineProps({
    type: {
      type: Number as PropType<1>,
      default: 1,
    },
    center: {
      type: Boolean,
    },
  });
</script>

<style lang="less">
  .type-1 {
    &.ant-input-number {
      @apply py-0 border-unamed-grey;
      height: 3.5rem !important;
      width: 100%;

      input {
        height: 3.5rem;
      }
    }
  }

  .input-number-center {
    input {
      text-align: center;
    }
  }
</style>
