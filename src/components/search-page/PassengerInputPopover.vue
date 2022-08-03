<template>
  <div class="w-[375px]">
    <div class="passenger-item">
      <div class="flex-1 flex flex-col">
        <span class="font-medium">Adults</span>
        <span class="text-xs text-storm-grey">over 15 years.</span>
      </div>
      <BaseStepper v-model:value="cAdults" :min="1" />
    </div>
    <div class="passenger-item">
      <div class="flex-1 flex flex-col">
        <span class="font-medium">Children</span>
        <span class="text-xs text-storm-grey">2-11 years.</span>
      </div>
      <BaseStepper v-model:value="cChildren" :min="0" />
    </div>
    <div class="passenger-item">
      <div class="flex-1 flex flex-col">
        <span class="font-medium">Infants</span>
        <span class="text-xs text-storm-grey">0-24 months.</span>
      </div>
      <BaseStepper v-model:value="cInfants" :min="0" />
    </div>
    <div class="passenger-item h-[60px]">
      <div class="flex-1 flex flex-col">
        <span class="font-medium">Pets</span>
      </div>
      <BaseStepper v-model:value="cPets" :min="0" />
    </div>

    <BaseButton class="mt-4" @click="save" block> Save </BaseButton>
    <div class="text-center text-storm-grey text-sm mt-3">
      Add pet details on following screen.
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import BaseStepper from '../BaseStepper.vue';
  import BaseButton from '../BaseButton.vue';

  const { adults, children, infants, pets } = defineProps<{
    adults: number;
    children: number;
    infants: number;
    pets: number;
  }>();
  const emit = defineEmits<{
    (event: 'update:adults', value: number): void;
    (event: 'update:children', value: number): void;
    (event: 'update:infants', value: number): void;
    (event: 'update:pets', value: number): void;
    (event: 'save'): void;
  }>();

  const cAdults = ref(adults);
  const cChildren = ref(children);
  const cInfants = ref(infants);
  const cPets = ref(pets);

  const save = () => {
    emit('update:adults', cAdults.value);
    emit('update:children', cChildren.value);
    emit('update:infants', cInfants.value);
    emit('update:pets', cPets.value);
    emit('save');
  };
</script>

<style lang="less" scoped>
  .passenger-item {
    @apply border rounded-md flex items-center justify-between px-4 py-2 !important;

    + .passenger-item {
      @apply mt-2;
    }
  }
</style>
