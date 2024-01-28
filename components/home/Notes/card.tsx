/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-28 21:08:25
 * @Description: 笔记card
 */
import styles from './index.module.css'

export default defineComponent({
  name: 'HomeNotesCard',
  setup() {
    return () => (
      <div class={['relative bg-red-600 py-16 note-card rounded-xl', styles.note]}>
        <div class={['bg-red-600 rounded-xl', styles.mask]}>
          123
        </div>
      </div>
    )
  }
})