/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-28 22:25:17
 * @Description: 笔记card
 */
import styles from './index.module.css'

export default defineComponent({
  name: 'HomeNotesCard',
  setup() {
    return () => (
      <div class={['relative  note-card rounded-xl', styles.note]}>
        <div class={['relative z-10 rounded-xl bg-white dark:bg-pickled-bluewood-800 p-3', styles.mask]}>
          <div class="py-16">
            123
          </div>
        </div>
      </div>
    )
  }
})
