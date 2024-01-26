/*
 * @Author: dushuai
 * @Date: 2024-01-26 15:51:21
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-26 16:37:38
 * @description: HomeTitle
 */
import styles from './title.module.css'

export type Props = {
  title: string;
}

export default defineComponent({
  name: 'HomeTitle',
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props: Props) {
    return () => (
      <h1 class={['text-6xl lg:text-7xl font-bold tracking-tighter', styles.text]}>{props.title}</h1>
    )
  }
})
