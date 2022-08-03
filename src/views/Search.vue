<template>
  <!-- Header -->
  <div
    class="flex items-center justify-between fixed top-0 left-0 z-50 w-full py-2 px-8 bg-white border-b"
  >
    <img src="@/assets/logo.png" />
    <div>
      <a-dropdown>
        <a-button type="text" class="text-green-vogue font-medium">
          $
          <Icon>
            <template #component>
              <img src="@/assets/icons/down-icon.png" class="mb-1" />
            </template>
          </Icon>
        </a-button>
      </a-dropdown>
      <a-dropdown>
        <a-button type="text" class="text-green-vogue font-medium">
          <img
            src="@/assets/flags/english.png"
            class="mr-1 inline-block align-middle"
          />
          ENG
          <Icon>
            <template #component>
              <img src="@/assets/icons/down-icon.png" class="mb-1" />
            </template>
          </Icon>
        </a-button>
      </a-dropdown>
      <a-button type="text" class="text-green-vogue font-medium">
        Sign in / Create an Account
      </a-button>
    </div>
  </div>
  <!-- ./Header -->

  <!-- Main -->
  <a-row align="top" :gutter="0" class="pt-[88px] h-screen z-10">
    <a-col
      class="hidden xl:flex flex-col justify-between border-r p-8 w-[420px] panel"
    >
      <div>
        <div class="-mx-3 flex">
          <a-select value="1" class="text-base" :bordered="false">
            <a-select-option key="1" value="1">Round Trip</a-select-option>
            <a-select-option key="1" value="2">One Way</a-select-option>
            <a-select-option key="1" value="3">Multi-city </a-select-option>

            <template #suffixIcon>
              <img src="@/assets/icons/arrow-down.png" />
            </template>
          </a-select>
          <a-select value="1" class="ml-2 text-base" :bordered="false">
            <a-select-option key="1" value="1">Economy</a-select-option>
            <a-select-option key="1" value="2">Premium Economy</a-select-option>
            <a-select-option key="1" value="3">Business</a-select-option>
            <a-select-option key="1" value="4">First</a-select-option>

            <template #suffixIcon>
              <img src="@/assets/icons/arrow-down.png" />
            </template>
          </a-select>

          <PassengerInput />
        </div>

        <div class="mt-8">
          <!-- <h4 class="font-medium mb-2">Outbound</h4> -->
          <a-radio-group class="block">
            <a-radio value="1" class="custom-radio"> Peru </a-radio>
            <a-radio value="2" class="custom-radio">
              California, United States
            </a-radio>
          </a-radio-group>

          <div
            class="flex items-center justify-between rounded-md mt-2 border-unamed-grey border px-4 py-3"
          >
            <div class="flex items-center">
              <img
                src="@/assets/icons/flight-right.png"
                class="inline-block mr-1"
              />
              <span class="text-base"> Mon, Jan31 </span>
              <span class="inline-flex ml-2">
                <LeftOutlined class="cursor-pointer text-[12px] mr-1" />
                <RightOutlined class="cursor-pointer text-[12px]" />
              </span>
            </div>

            <a-divider type="vertical" class="h-6 border-[#e5e7eb]" />

            <div class="flex items-center">
              <img
                src="@/assets/icons/flight-left.png"
                class="inline-block mr-1"
              />
              <span class="text-base"> Optional </span>
              <span class="inline-flex ml-2">
                <LeftOutlined class="cursor-pointer text-[12px] mr-1" />
                <RightOutlined class="cursor-pointer text-[12px]" />
              </span>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <span
            class="inline-block bg-white shadow-md text-[#15A1F8] rounded-md px-3 py-2 cursor-pointer"
            @click="toggleAddPetPopupVisible"
          >
            Duke
          </span>
          <span
            class="inline-block bg-white shadow-md text-[#15A1F8] rounded-md px-3 py-2 ml-4 cursor-pointer"
            @click="toggleAddPetPopupVisible"
          >
            Louis
          </span>
          <span
            class="inline-flex items-center font-medium text-base px-3 py-2 cursor-pointer ml-2"
            @click="toggleAddPetPopupVisible"
          >
            <PlusCircleOutlined class="mr-2 text-blue" />
            Add pet
          </span>
        </div>
      </div>
      <div class="mt-16">
        <span class="text-storm-grey text-sm">
          Price includes taxes and may change depending on availability. Any
          additional fees can be reviewed before payment. The total price will
          be finalized once the purchase is complete.
        </span>

        <div class="mt-3">
          <a
            href="https://www.avvinue.com/terms-of-service"
            class="text-green-vogue text-base mr-2"
            >Terms of use</a
          >
          <a
            href="https://www.avvinue.com/privacy-policy"
            class="text-green-vogue text-base"
            >Privacy Policy</a
          >
        </div>

        <div class="mt-7">
          <p class="text-storm-grey text-base mb-3">Download on App Store</p>
          <a href="#">
            <img
              src="@/assets/download-googleplay.png"
              class="inline-block mr-3"
            />
          </a>
          <a href="#"
            ><img
              src="@/assets/download-appstore.png"
              class="inline-block mr-3"
          /></a>
        </div>
      </div>
    </a-col>

    <a-col class="p-6 flex-1 flex flex-col panel">
      <h1 class="text-xl font-medium">Flight Selection</h1>

      <div class="flex flex-col flex-1">
        <div class="flex justify-between items-center mb-3">
          <div>
            <span
              class="pb-1 border-b-2 border-pink font-medium text-xs cursor-pointer text-green-vogue"
              >Outbound</span
            >
            <span
              class="pb-1 border-b-2 border-unamed-grey font-medium text-xs cursor-pointer text-storm-grey ml-3"
              >Return</span
            >
          </div>

          <BaseSortButton> Departure time</BaseSortButton>
        </div>

        <div>
          <a-alert
            message="Click here for the latest COVID-19 travel info"
            type="info"
            class="border-pink bg-pink-20 rounded-md text-sm"
            showIcon
          >
            <template #icon>
              <Icon class="text-pink">
                <template #component> <Info /></template>
              </Icon>
            </template>
          </a-alert>

          <a-alert
            message="The Avvinue team will verify and confirm with airline before booking your pets."
            type="info"
            class="border-dark-blue bg-dark-blue-10 rounded-md mt-2 text-sm"
            showIcon
          >
            <template #icon>
              <Logo />
            </template>
          </a-alert>
        </div>

        <div class="mt-4 flex flex-wrap justify-center">
          <Travels />
          <a-button
            class="leading-[0] rounded-full shadow-md border-0 p-4 w-auto h-auto"
          >
            <template #icon>
              <Icon class="text-pink">
                <template #component>
                  <ArrowCircle />
                </template>
              </Icon>
            </template>
          </a-button>
        </div>
      </div>
    </a-col>
  </a-row>
  <!-- ./Main -->

  <AddPetPopup
    :visible="addPetPopupVisible"
    @close="toggleAddPetPopupVisible"
  />
</template>

<script setup lang="ts">
  import Icon, {
    LeftOutlined,
    RightOutlined,
    PlusCircleOutlined,
  } from '@ant-design/icons-vue';
  import Info from '@/assets/icons/info.svg?component';
  import Logo from '@/assets/icons/Logo.svg?component';
  import ArrowCircle from '@/assets/icons/arrow-circle.svg?component';
  import Travels from '@/components/Travels.vue';
  import BaseSortButton from '@/components/BaseSortButton.vue';
  import AddPetPopup from '@/components/popups/AddPetPopup.vue';
  import { ref } from 'vue';
  import PassengerInput from '@/components/search-page/PassengerInput.vue';

  defineProps<{}>();

  const addPetPopupVisible = ref(false);

  const toggleAddPetPopupVisible = () => {
    addPetPopupVisible.value = addPetPopupVisible.value ? false : true;
  };
</script>

<style lang="less" scoped>
  .panel {
    min-height: calc(100vh - 88px);
  }

  .custom-radio {
    @apply block border border-unamed-grey rounded-md p-3 mr-0;

    + .custom-radio {
      @apply mt-2;
    }

    &:not(.ant-radio-wrapper-checked) {
      :deep(.ant-radio-inner) {
        @apply border-storm-grey;
      }
    }
    :deep(.ant-radio-inner) {
      @apply border-2;
      width: 14px;
      height: 14px;
    }

    &.ant-radio-wrapper-checked {
      :deep(.ant-radio-inner) {
        &::after {
          width: 6px;
          height: 6px;
          top: 2px;
          left: 2px;
        }
      }
    }
  }
</style>
