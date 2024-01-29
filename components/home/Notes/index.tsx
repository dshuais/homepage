/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-29 09:55:33
 * @Description: 笔记列表
 */
// import HomeNotesCard from './card'

export default defineComponent({
  name: 'HomeNotes',
  setup() {

    const notes = ref([1, 2, 3, 4, 5, 6, 7, 8])

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
        {notes.value.map((item: any) =>
          <HomeNotesCard>
            <div class="py-16 p-3">
              123
            </div>
          </HomeNotesCard>
        )}
      </div>
    )
  }
})
