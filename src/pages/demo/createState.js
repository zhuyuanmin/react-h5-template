import { createSetup, ref, computed, onUnmounted } from 'reactivue'

export const useCounterState = createSetup(props => {
  const counter = ref(props.value)
  const double = computed(() => counter.value * 2)
  const increaseFn = () => counter.value += 1

  onUnmounted(() => console.log('Goodbye World'))
  return { counter, double, increaseFn }
})
