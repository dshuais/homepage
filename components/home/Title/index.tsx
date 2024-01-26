import styles from './title.module.css'

export type Props = {
  title: string;
}

export default defineComponent({
  name: 'Title',
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
