import { Button, Rate } from 'react-vant';
import { useCounterState } from './createState';
import counterStore from '@/store/counter'

export default function Demo() {
  const { counter, double, increaseFn } = useCounterState({ value: 10 });

  return (
    <div>
      <div>{counter} x 2 = {double}</div>
      <button onClick={increaseFn}>Increase</button>
      <Button type='primary'>Primary</Button>
      <Rate value={3} />

      <div>状态管理器测试</div>
      <div>{counterStore.count} {counterStore.text}</div>
      <button onClick={counterStore.inc}>Increase</button>
    </div>
  )
}
