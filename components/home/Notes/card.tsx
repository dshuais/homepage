/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-29 09:56:01
 * @Description: 笔记card
 */
import styles from './index.module.css'

export default defineComponent({
  name: 'HomeNotesCard',
  setup(props, { slots }) {
    return () => (
      <div class={['relative rounded-xl note-card', styles.note]}>
        <div class={['relative z-10 rounded-xl bg-white dark:bg-pickled-bluewood-800', styles.mask]}>
          {slots.default?.()}
        </div>
      </div>
    )
  }
})
