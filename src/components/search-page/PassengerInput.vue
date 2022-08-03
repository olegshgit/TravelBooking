<template>
  <a-popover
    :visible="popupVisible"
    title=""
    placement="bottomLeft"
    trigger="click"
  >
    <span
      value="1"
      class="ml-1 pl-3 text-base cursor-pointer flex items-center"
      :bordered="false"
      @click="togglePopup"
    >
      <img src="@/assets/icons/person.png" class="inline-block mr-2" />
      {{ totalHumans }}
      <img src="@/assets/icons/pet.png" class="inline-block ml-3 mr-2" />
      {{ pets }}
      <Icon class="ml-3">
        <template #component>
          <img src="@/assets/icons/arrow-down.png" />
        </template>
      </Icon>
    </span>

    <template #content>
      <PassengerInputPopover
        v-model:adults="adults"
        v-model:children="children"
        v-model:infants="infants"
        v-model:pets="pets"
        @save="togglePopup"
      />
    </template>
  </a-popover>
</template>

<script setup lang="ts">
  import Icon from '@ant-design/icons-vue';
  import { computed, ref } from 'vue';
  import PassengerInputPopover from './PassengerInputPopover.vue';

  //   Handle popup visible
  const popupVisible = ref(false);

  const togglePopup = () => {
    popupVisible.value = !popupVisible.value;
  };

  // Handle values
  const adults = ref(1);
  const children = ref(0);
  const infants = ref(0);
  const pets = ref(0);

  const totalHumans = computed(
    () => adults.value + children.value + infants.value
  );
</script>
