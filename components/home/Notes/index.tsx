/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-29 15:18:27
 * @Description: 笔记列表
 */
// import { HomeNotesCard } from '#components' // 阻止使用时报错 报错也不影响
import { type Note, notes } from '@/config'

export default defineComponent({
  name: 'HomeNotes',
  setup() {

    const elements = ref()

    onMounted(() => {
      elements.value = document.querySelectorAll('.note-card')

      document.addEventListener('mousemove', move)
    })

    // onBeforeUnmount(() => {
    //   document.removeEventListener('mousemove', move)
    // })

    /**
     * 监听mousemove的回调
     * @param {MouseEvent} event 
     */
    function move(event: MouseEvent) {
      const x = event.pageX
      const y = event.pageY

      for (let i = 0; i < elements.value.length; i++) {
        const item = elements.value[i],
          rect = item.getBoundingClientRect(),
          itemX = rect.left + window.scrollX,
          itemY = rect.top + window.scrollY,
          distanceX = x - itemX,
          distanceY = y - itemY

        item.style.setProperty('--x', `${distanceX}px`)
        item.style.setProperty('--y', `${distanceY}px`)
      }
    }

    return () => (
      <div class="notes grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
        {notes.slice(0, 7).map((item: Note) =>
          <HomeNotesCard>
            <div class="py-16 p-3 cursor-pointer">
              123
            </div>
          </HomeNotesCard>
        )}
        {/* <HomeNotesCard>
          <div class="py-16 p-3 cursor-pointer flex flex-col items-end">
            View More <IconArrowsR class="w-8 h-4 mt-[1px] fill-gray-600 dark:fill-gray-200" />
          </div>
        </HomeNotesCard> */}
      </div>
    )
  }
})
