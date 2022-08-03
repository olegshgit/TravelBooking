<template>
  <a-collapse class="travels w-full" expand-icon-position="right" accordion>
    <template #expandIcon>
      <Icon class="text-sm">
        <template #component>
          <Down />
        </template>
      </Icon>
    </template>
    <a-collapse-panel class="travel-item shadow-sm" key="1">
      <template #header>
        <a-row align="middle" class="text-green-vogue">
          <a-col :xs="{ order: 4, span: 8 }" :xl="{ order: 1, span: 5 }">
            <img src="@/assets/american-airlines.png" />
          </a-col>
          <a-col :xs="16" :xl="{ order: 2, span: 10 }">
            <p class="font-medium text-base">2:35 PM - 7:25 PM</p>
            <span class="text-storm-grey text-sm">
              Lyon art Dieu - Barcelona Sants
            </span>
          </a-col>

          <!-- <a-col :span="24">
            <a-divider dashed></a-divider>
          </a-col> -->

          <a-col :xs="{ order: 3, span: 16 }" :xl="{ order: 3, span: 4 }">
            <p class="font-medium text-base">4h53m</p>
            <span class="text-storm-grey text-sm"> Non Stop </span>
            <span class="inline xl:hidden text-storm-grey text-sm">
              • Round Trip
            </span>
          </a-col>
          <a-col :xs="{ order: 2, span: 8 }" :xl="{ order: 4, span: 5 }">
            <p class="font-medium text-base">$186.00</p>
            <span class="hidden xl:inline text-storm-grey text-sm">
              Round Trip
            </span>
          </a-col>
        </a-row>
      </template>

      <div class="flex items-end">
        <div class="flex-1">
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 02:35 PM </span>
            <span class="inline-block mr-5"> Lyon Part Dieu </span>
          </p>
          <div class="flex my-5">
            <div class="flex flex-col items-center w-[4.5rem] mr-7">
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
              <a-divider
                type="vertical"
                class="h-6 border-0 vertical-divider border-unamed-grey flex-1"
                dashed
              />
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
            </div>
            <div class="w-[266px] text-sm">
              Economy Class<br />
              1 checked bag up to 23 kg included<br />
              No refunds for cancellations<br />
              Free change, possible fare difference
            </div>
          </div>
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 07:25 PM </span>
            <span class="inline-block mr-5"> Barcelona Sants </span>
          </p>
        </div>
        <div>
          <a-button
            class="text-psychedelic-purple border-psychedelic-purple hover:text-psychedelic-purple hover:border-psychedelic-purple font-semibold rounded-md px-4 py-2 h-auto"
            >Select</a-button
          >
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel class="travel-item shadow-sm" key="2">
      <template #header>
        <a-row align="middle" class="text-green-vogue">
          <a-col :xs="{ order: 4, span: 8 }" :xl="{ order: 1, span: 5 }">
            <img src="@/assets/american-airlines.png" />
          </a-col>
          <a-col :xs="16" :xl="{ order: 2, span: 10 }">
            <p class="font-medium text-sm">2:35 PM - 7:25 PM</p>
            <span class="text-storm-grey text-sm">
              Lyon art Dieu - Barcelona Sants
            </span>
          </a-col>

          <!-- <a-col :span="24">
            <a-divider dashed></a-divider>
          </a-col> -->

          <a-col :xs="{ order: 3, span: 16 }" :xl="{ order: 3, span: 4 }">
            <p class="font-medium text-sm">4h53m</p>
            <span class="text-storm-grey text-sm"> Non Stop </span>
            <span class="inline xl:hidden text-storm-grey text-sm">
              • Round Trip
            </span>
          </a-col>
          <a-col :xs="{ order: 2, span: 8 }" :xl="{ order: 4, span: 5 }">
            <p class="font-medium text-sm">$186.00</p>
            <span class="hidden xl:inline text-storm-grey text-sm">
              Round Trip
            </span>
          </a-col>
        </a-row>
      </template>

      <div class="flex items-end">
        <div class="flex-1">
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 02:35 PM </span>
            <span class="inline-block mr-5"> Lyon Part Dieu </span>
          </p>
          <div class="flex my-5">
            <div class="flex flex-col items-center w-[4.5rem] mr-7">
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
              <a-divider
                type="vertical"
                class="h-6 border-0 vertical-divider border-unamed-grey flex-1"
                dashed
              />
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
            </div>
            <div class="w-[266px] text-sm">
              Economy Class<br />
              1 checked bag up to 23 kg included<br />
              No refunds for cancellations<br />
              Free change, possible fare difference
            </div>
          </div>
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 07:25 PM </span>
            <span class="inline-block mr-5"> Barcelona Sants </span>
          </p>
        </div>
        <div>
          <a-button
            class="text-psychedelic-purple border-psychedelic-purple hover:text-psychedelic-purple hover:border-psychedelic-purple font-semibold rounded-md px-4 py-2 h-auto"
            >Select</a-button
          >
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel class="travel-item shadow-sm" key="3">
      <template #header>
        <a-row align="middle" class="text-green-vogue">
          <a-col :xs="{ order: 4, span: 8 }" :xl="{ order: 1, span: 5 }">
            <img src="@/assets/american-airlines.png" />
          </a-col>
          <a-col :xs="16" :xl="{ order: 2, span: 10 }">
            <p class="font-medium text-sm">2:35 PM - 7:25 PM</p>
            <span class="text-storm-grey text-sm">
              Lyon art Dieu - Barcelona Sants
            </span>
          </a-col>

          <!-- <a-col :span="24">
            <a-divider dashed></a-divider>
          </a-col> -->

          <a-col :xs="{ order: 3, span: 16 }" :xl="{ order: 3, span: 4 }">
            <p class="font-medium text-sm">4h53m</p>
            <span class="text-storm-grey text-sm"> Non Stop </span>
            <span class="inline xl:hidden text-storm-grey text-sm">
              • Round Trip
            </span>
          </a-col>
          <a-col :xs="{ order: 2, span: 8 }" :xl="{ order: 4, span: 5 }">
            <p class="font-medium text-base">$186.00</p>
            <span class="hidden xl:inline text-storm-grey text-sm">
              Round Trip
            </span>
          </a-col>
        </a-row>
      </template>

      <div class="flex items-end">
        <div class="flex-1">
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 02:35 PM </span>
            <span class="inline-block mr-5"> Lyon Part Dieu </span>
          </p>
          <div class="flex my-5">
            <div class="flex flex-col items-center w-[4.5rem] mr-7">
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
              <a-divider
                type="vertical"
                class="h-6 border-0 vertical-divider border-unamed-grey flex-1"
                dashed
              />
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
            </div>
            <div class="w-[266px] text-sm">
              Economy Class<br />
              1 checked bag up to 23 kg included<br />
              No refunds for cancellations<br />
              Free change, possible fare difference
            </div>
          </div>
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 07:25 PM </span>
            <span class="inline-block mr-5"> Barcelona Sants </span>
          </p>
        </div>
        <div>
          <a-button
            class="text-psychedelic-purple border-psychedelic-purple hover:text-psychedelic-purple hover:border-psychedelic-purple font-semibold rounded-md px-4 py-2 h-auto"
            >Select</a-button
          >
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel class="travel-item shadow-sm" key="4">
      <template #header>
        <a-row align="middle" class="text-green-vogue">
          <a-col :xs="{ order: 4, span: 8 }" :xl="{ order: 1, span: 5 }">
            <img src="@/assets/american-airlines.png" />
          </a-col>
          <a-col :xs="16" :xl="{ order: 2, span: 10 }">
            <p class="font-medium text-base">2:35 PM - 7:25 PM</p>
            <span class="text-storm-grey text-sm">
              Lyon art Dieu - Barcelona Sants
            </span>
          </a-col>

          <!-- <a-col :span="24">
            <a-divider dashed></a-divider>
          </a-col> -->

          <a-col :xs="{ order: 3, span: 16 }" :xl="{ order: 3, span: 4 }">
            <p class="font-medium text-base">4h53m</p>
            <span class="text-storm-grey text-sm"> Non Stop </span>
            <span class="inline xl:hidden text-storm-grey text-sm">
              • Round Trip
            </span>
          </a-col>
          <a-col :xs="{ order: 2, span: 8 }" :xl="{ order: 4, span: 5 }">
            <p class="font-medium text-base">$186.00</p>
            <span class="hidden xl:inline text-storm-grey text-sm">
              Round Trip
            </span>
          </a-col>
        </a-row>
      </template>

      <div class="flex items-end">
        <div class="flex-1">
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 02:35 PM </span>
            <span class="inline-block mr-5"> Lyon Part Dieu </span>
          </p>
          <div class="flex my-5">
            <div class="flex flex-col items-center w-[4.5rem] mr-7">
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
              <a-divider
                type="vertical"
                class="h-6 border-0 vertical-divider border-unamed-grey flex-1"
                dashed
              />
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
            </div>
            <div class="w-[266px] text-sm">
              Economy Class<br />
              1 checked bag up to 23 kg included<br />
              No refunds for cancellations<br />
              Free change, possible fare difference
            </div>
          </div>
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 07:25 PM </span>
            <span class="inline-block mr-5"> Barcelona Sants </span>
          </p>
        </div>
        <div>
          <a-button
            class="text-psychedelic-purple border-psychedelic-purple hover:text-psychedelic-purple hover:border-psychedelic-purple font-semibold rounded-md px-4 py-2 h-auto"
            >Select</a-button
          >
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel class="travel-item shadow-sm" key="5">
      <template #header>
        <a-row align="middle" class="text-green-vogue">
          <a-col :xs="{ order: 4, span: 8 }" :xl="{ order: 1, span: 5 }">
            <img src="@/assets/american-airlines.png" />
          </a-col>
          <a-col :xs="16" :xl="{ order: 2, span: 10 }">
            <p class="font-medium text-base">2:35 PM - 7:25 PM</p>
            <span class="text-storm-grey text-sm">
              Lyon art Dieu - Barcelona Sants
            </span>
          </a-col>

          <!-- <a-col :span="24">
            <a-divider dashed></a-divider>
          </a-col> -->

          <a-col :xs="{ order: 3, span: 16 }" :xl="{ order: 3, span: 4 }">
            <p class="font-medium text-base">4h53m</p>
            <span class="text-storm-grey text-sm"> Non Stop </span>
            <span class="inline xl:hidden text-storm-grey text-sm">
              • Round Trip
            </span>
          </a-col>
          <a-col :xs="{ order: 2, span: 8 }" :xl="{ order: 4, span: 5 }">
            <p class="font-medium text-base">$186.00</p>
            <span class="hidden xl:inline text-storm-grey text-sm">
              Round Trip
            </span>
          </a-col>
        </a-row>
      </template>

      <div class="flex items-end">
        <div class="flex-1">
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 02:35 PM </span>
            <span class="inline-block mr-5"> Lyon Part Dieu </span>
          </p>
          <div class="flex my-5">
            <div class="flex flex-col items-center w-[4.5rem] mr-7">
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
              <a-divider
                type="vertical"
                class="h-6 border-0 vertical-divider border-unamed-grey flex-1"
                dashed
              />
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
            </div>
            <div class="w-[266px] text-sm">
              Economy Class<br />
              1 checked bag up to 23 kg included<br />
              No refunds for cancellations<br />
              Free change, possible fare difference
            </div>
          </div>
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 07:25 PM </span>
            <span class="inline-block mr-5"> Barcelona Sants </span>
          </p>
        </div>
        <div>
          <a-button
            class="text-psychedelic-purple border-psychedelic-purple hover:text-psychedelic-purple hover:border-psychedelic-purple font-semibold rounded-md px-4 py-2 h-auto"
            >Select</a-button
          >
        </div>
      </div>
    </a-collapse-panel>

    <a-collapse-panel class="travel-item shadow-sm" key="6">
      <template #header>
        <a-row align="middle" class="text-green-vogue">
          <a-col :xs="{ order: 4, span: 8 }" :xl="{ order: 1, span: 5 }">
            <img src="@/assets/american-airlines.png" />
          </a-col>
          <a-col :xs="16" :xl="{ order: 2, span: 10 }">
            <p class="font-medium text-base">2:35 PM - 7:25 PM</p>
            <span class="text-storm-grey text-sm">
              Lyon art Dieu - Barcelona Sants
            </span>
          </a-col>

          <!-- <a-col :span="24">
            <a-divider dashed></a-divider>
          </a-col> -->

          <a-col :xs="{ order: 3, span: 16 }" :xl="{ order: 3, span: 4 }">
            <p class="font-medium text-base">4h53m</p>
            <span class="text-storm-grey text-sm"> Non Stop </span>
            <span class="inline xl:hidden text-storm-grey text-sm">
              • Round Trip
            </span>
          </a-col>
          <a-col :xs="{ order: 2, span: 8 }" :xl="{ order: 4, span: 5 }">
            <p class="font-medium text-base">$186.00</p>
            <span class="hidden xl:inline text-storm-grey text-sm">
              Round Trip
            </span>
          </a-col>
        </a-row>
      </template>

      <div class="flex items-end">
        <div class="flex-1">
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 02:35 PM </span>
            <span class="inline-block mr-5"> Lyon Part Dieu </span>
          </p>
          <div class="flex my-5">
            <div class="flex flex-col items-center w-[4.5rem] mr-7">
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
              <a-divider
                type="vertical"
                class="h-6 border-0 vertical-divider border-unamed-grey flex-1"
                dashed
              />
              <img src="@/assets/icons/dot-outline.png" class="inline-block" />
            </div>
            <div class="w-[266px] text-sm">
              Economy Class<br />
              1 checked bag up to 23 kg included<br />
              No refunds for cancellations<br />
              Free change, possible fare difference
            </div>
          </div>
          <p class="font-medium text-sm">
            <span class="inline-block mr-7 w-[4.5rem]"> 07:25 PM </span>
            <span class="inline-block mr-5"> Barcelona Sants </span>
          </p>
        </div>
        <div>
          <a-button
            class="text-psychedelic-purple border-psychedelic-purple hover:text-psychedelic-purple hover:border-psychedelic-purple font-semibold rounded-md px-4 py-2 h-auto"
            >Select</a-button
          >
        </div>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script setup lang="ts">
  import Down from '@/assets/icons/down.svg?component';
  import Icon from '@ant-design/icons-vue';
</script>

<style lang="less" scoped>
  .vertical-divider {
    border-left-width: 2px !important;
  }
  .travels {
    background-color: transparent;
    border-width: 0;
  }
  .travel-item {
    background-color: white;
    padding: 1rem;
    margin-bottom: 1rem;
    border-bottom-width: 0px !important;
    box-shadow: 0px 1px 5px rgba(119, 130, 222, 0.2);
    :deep(.ant-collapse-header) {
      padding-top: 0 !important;
      padding-bottom: 0 !important;
    }
    :deep(.ant-collapse-content-box) {
      padding: 0 !important;
      padding-top: 1rem !important;
    }

    &.ant-collapse-item-active {
      :deep(.ant-collapse-header) {
        padding-bottom: 12px !important;
      }
    }
  }
</style>
