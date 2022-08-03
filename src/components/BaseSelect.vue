<template>
  <a-select
    :value="value"
    :class="'type-' + type"
    @select="$emit('update:value', $event)"
  >
    <slot />
    <template #suffixIcon>
      <Icon class="text-sm text-green-vogue">
        <template #component>
          <Down />
        </template>
      </Icon>
    </template>
  </a-select>
</template>

<script setup lang="ts">
  import { PropType } from 'vue';
  import Down from '@/assets/icons/chev-down.svg?component';
  import Icon from '@ant-design/icons-vue';

  defineProps({
    value: {},
    type: {
      type: Number as PropType<1>,
      default: 1,
    },
  });
  defineEmits(['update:value']);
</script>

<style lang="less">
  .type-1 {
    .ant-select-selector {
      @apply border-green-vogue p-3 h-auto !important;

      .ant-select-selection-placeholder {
        @apply text-green-vogue;
      }
    }
  }
</style>
