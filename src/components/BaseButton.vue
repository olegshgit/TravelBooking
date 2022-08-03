<template>
  <a-button htmlType="button" type="primary" :class="type"> <slot /></a-button>
</template>

<script lang="ts" setup>
  import { PropType } from 'vue';

  const { type = 'primary' } = defineProps({
    type: {
      type: String as PropType<'primary'>,
      default: 'primary',
    },
  });
</script>

<style lang="less" scoped>
  .primary {
    @apply py-4 px-8 h-auto bg-gradient-to-r from-pink to-purple border-0 hover:bg-gradient-to-r active:bg-gradient-to-r focus:bg-gradient-to-r;
  }
</style>
