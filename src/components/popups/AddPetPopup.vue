<template>
  <a-modal
    :width="942"
    :visible="visible"
    :footer="null"
    :closable="false"
    @cancel="$emit('close', $event)"
    wrapClassName="full-modal-to-xl"
  >
    <img src="@/assets/pet-popup-bg.png" class="xl:hidden w-full block" />
    <a-carousel
      ref="carousel"
      :infinite="false"
      class="relative z-10 -mt-6 xl:mt-0 bg-white rounded-t-3xl carousel-custom-dots"
      dots
    >
      <div class="p-6 xl:p-0">
        <h3 class="font-medium text-xl">Please enter your pet details</h3>
        <a-form layout="vertical">
          <a-row class="xl:-mt-7">
            <a-col
              :xs="{ span: 24, order: 3 }"
              :xl="{ span: 24, order: 1 }"
              class="flex items-center justify-between xl:justify-end"
            >
              <div class="xl:hidden mb-4">
                <h4 class="font-medium">Pet Measurements</h4>
                <a
                  href="https://www.iata.org/en/programs/cargo/live-animals/pets/"
                  class="text-xs text-storm-grey underline inline-block"
                  >Pet measurement guide</a
                >
              </div>
              <div>
                <a-radio-group
                  defaultValue="2"
                  class="custom-radio-button-group"
                  buttonStyle="solid"
                >
                  <a-radio-button value="1">cm • kg</a-radio-button>
                  <a-radio-button value="2">in • lb</a-radio-button>
                </a-radio-group>
              </div>
            </a-col>
            <a-col :span="24" :order="2" class="hidden xl:block">
              <a
                href="https://www.iata.org/en/programs/cargo/live-animals/pets/"
                class="text-xs text-storm-grey underline inline-block mt-3 mb-2"
                >Pet measurement guide</a
              >
            </a-col>
            <a-col :span="24" :order="2" class="mt-3">
              <a-row align="bottom" :gutter="16">
                <a-col :xs="24" :xl="10">
                  <a-form-item
                    class="font-medium"
                    label="Pet Details"
                    :labelCol="{ span: 12 }"
                  >
                    <BaseInput placeholder="Pet name" />
                  </a-form-item>
                </a-col>
                <a-col class="flex-1">
                  <a-row :gutter="16">
                    <a-col :xs="24" :xl="6">
                      <a-form-item :labelCol="{ span: 0 }">
                        <BaseSelect placeholder="Species" :type="1">
                          <a-select-option key="1" value="1"
                            >Test</a-select-option
                          >
                        </BaseSelect>
                      </a-form-item>
                    </a-col>
                    <a-col :xs="24" :xl="6">
                      <a-form-item :labelCol="{ span: 0 }">
                        <BaseSelect placeholder="Breed" :type="1">
                          <a-select-option key="1" value="1"
                            >Test</a-select-option
                          >
                        </BaseSelect>
                      </a-form-item>
                    </a-col>
                    <a-col :xs="24" :xl="6">
                      <a-form-item :labelCol="{ span: 0 }">
                        <BaseSelect placeholder="Gender" :type="1">
                          <a-select-option key="1" value="1"
                            >Test</a-select-option
                          >
                        </BaseSelect>
                      </a-form-item>
                    </a-col>
                    <a-col :xs="24" :xl="6">
                      <a-form-item :labelCol="{ span: 0 }">
                        <BaseSelect placeholder="Age" :type="1">
                          <a-select-option key="1" value="1"
                            >Test</a-select-option
                          >
                        </BaseSelect>
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-col>
              </a-row>
            </a-col>

            <a-col
              :span="24"
              :xs="{ order: 4 }"
              :xl="{ order: 2 }"
              class="mb-7 xl:mb-0"
            >
              <a-row :gutter="16" align="middle">
                <a-col :xs="24" class="xl:max-w-[531px]">
                  <a-row align="bottom" :gutter="16">
                    <a-col :span="6">
                      <a-form-item class="mb-0" :labelCol="{ span: 0 }">
                        <template #extra>
                          <span
                            class="block text-center text-sm text-green-vogue mt-2"
                            >Length</span
                          >
                        </template>
                        <BaseInputNumber :min="0" :center="true" :step="0.1" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="6">
                      <a-form-item class="mb-0" :labelCol="{ span: 0 }">
                        <template #extra>
                          <span
                            class="block text-center text-sm text-green-vogue mt-2"
                            >Width</span
                          >
                        </template>
                        <BaseInputNumber :min="0" :center="true" :step="0.1" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="6">
                      <a-form-item class="mb-0" :labelCol="{ span: 0 }">
                        <template #extra>
                          <span
                            class="block text-center text-sm text-green-vogue mt-2"
                            >Height</span
                          >
                        </template>
                        <BaseInputNumber :min="0" :center="true" :step="0.1" />
                      </a-form-item>
                    </a-col>
                    <a-col :span="6">
                      <a-form-item class="mb-0" :labelCol="{ span: 0 }">
                        <template #extra>
                          <span
                            class="block text-center text-sm text-green-vogue mt-2"
                            >Weight</span
                          >
                        </template>
                        <BaseInputNumber :min="0" :center="true" :step="0.1" />
                      </a-form-item>
                    </a-col>
                  </a-row>
                </a-col>
                <a-col v-if="!isMobile" class="flex-1">
                  <a-checkbox-group class="text-sm">
                    <a-checkbox value="1">Service animal</a-checkbox>
                    <a-checkbox value="2">Emotional support animal </a-checkbox>
                  </a-checkbox-group>
                </a-col>
              </a-row>
            </a-col>
          </a-row>
          <BaseButton
            v-if="isMobile"
            htmlType="button"
            class="py-[18px] px-5"
            @click="carousel.next()"
            block
          >
            Next
          </BaseButton>

          <div v-else>
            <a-divider class="border-unamed-grey"></a-divider>
            <a-row :gutter="16" align="middle">
              <a-col>
                <span class="flex-grow">
                  <a-switch
                    class="custom-switch"
                    v-model:checked="save"
                    size="small"
                  ></a-switch>
                  Save pet profiles for future searches
                </span>
              </a-col>

              <a-col class="flex-1 flex">
                <BaseInput placeholder="Email address" />
                <BaseButton class="ml-4"> Search </BaseButton>
              </a-col>
            </a-row>
          </div>
        </a-form>
      </div>

      <div v-if="isMobile" class="p-6">
        <a-col class="flex-1">
          <a-checkbox-group class="text-sm">
            <a-checkbox value="1">Service animal</a-checkbox>
            <a-checkbox value="2">Emotional support animal </a-checkbox>
          </a-checkbox-group>
        </a-col>
      </div>
    </a-carousel>
  </a-modal>
</template>

<script setup lang="ts">
  import BaseSelect from '../BaseSelect.vue';
  import BaseInput from '../BaseInput.vue';
  import BaseInputNumber from '../BaseInputNumber.vue';
  import useIsMobile from '@/composables/useIsMobile';
  import { ref } from 'vue';
  import BaseButton from '../BaseButton.vue';
  defineProps<{ visible: boolean }>();
  defineEmits<{ close: () => void }>();

  const isMobile = useIsMobile();

  const save = ref(true);

  const carousel = ref();
</script>

<style lang="less" scoped>
  .custom-radio-button-group {
    @apply shadow-sm shadow-gray-400 rounded-md;
    :deep(.ant-radio-button-wrapper) {
      border-top-width: 0;
      border-bottom-width: 0;
      border-left: 0 solid;
      border-right: 0 solid;
      border: 0 solid;

      &::before {
        display: none;
      }
    }
  }

  :deep(.ant-checkbox-wrapper) {
    @apply text-sm !important;
  }

  .custom-switch {
    &.ant-switch {
      @apply border-2 border-storm-grey;

      &.ant-switch-checked {
        @apply border-pink;

        &::after {
          @apply bg-pink;
          margin-left: -2px;
          left: 100%;
        }
      }

      &::after {
        @apply bg-storm-grey;
        width: 8px;
        height: 8px;
        top: 2px;
        left: 2px;
      }
    }
  }

  .carousel-custom-dots {
    @apply pb-8 xl:pb-1;

    :deep(.slick-dots) {
      @apply bottom-0;

      li button {
        @apply bg-unamed-grey rounded-full overflow-hidden;

        width: 8px;
        height: 8px;
      }
      li.slick-active button {
        @apply bg-green-vogue rounded-full overflow-hidden;

        width: 8px;
        height: 8px;
      }
    }
  }
</style>

<style lang="less">
  @media screen and (max-width: 1199px) {
    .full-modal-to-xl {
      .ant-modal {
        max-width: 100%;
        width: 100% !important;
        top: 0;
        padding-bottom: 0;
        margin: 0;
      }
      .ant-modal-content {
        display: flex;
        flex-direction: column;
        height: calc(100vh);
      }
      .ant-modal-body {
        flex: 1;
        overflow: auto;
        padding: 0;
      }
    }
  }
</style>
