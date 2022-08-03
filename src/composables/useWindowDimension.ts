import { onMounted, onUnmounted, ref } from 'vue';

export default function useWindowDimension() {
  const width = ref(window.innerWidth);
  const height = ref(window.innerHeight);

  const getDimension = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    window.addEventListener('resize', getDimension);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', getDimension);
  });

  return { width, height };
}
