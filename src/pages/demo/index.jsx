import { Button } from 'react-vant';
import { useCounterState } from './createState';
import counterStore from '@/store/counter'

export default function Demo() {
  const { counter, double, operateFn } = useCounterState({ value: 10 });

  const tripClick = () => {
    operateFn(count => count * 3)
  }

  return (
    <div>
      <div>{counter} x 2 = {double}</div>
      <button onClick={() => operateFn(v => v + 1)}>Increase</button>
      <Button type='primary' onClick={tripClick}>Primary</Button>

      <div>状态管理器测试</div>
      <div>{counterStore.count} {counterStore.text}</div>
      <button onClick={counterStore.inc}>Increase</button>
    </div>
  )
}
