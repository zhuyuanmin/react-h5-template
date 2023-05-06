import { createSetup, ref, computed, onUnmounted, watch } from 'reactivue'

export const useCounterState = createSetup(props => {
  const counter = ref(props.value)
  const double = computed(() => counter.value * 2)
  const operateFn = cb => counter.value = cb(counter.value)

  watch(counter, (newVal, oldVal) => {
    console.log(newVal, oldVal)
  })

  onUnmounted(() => console.log('Goodbye World'))
  return { counter, double, operateFn }
})
