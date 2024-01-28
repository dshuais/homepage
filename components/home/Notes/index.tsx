/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-28 19:22:02
 * @Description: 笔记列表
 */
// import HomeNotesCard from './card'

export default defineComponent({
  name: 'HomeNotes',
  setup() {
    return () => (
      <div class="notes bg-orange-200">
        notes
        <HomeNotesCard />
      </div>
    )
  }
})