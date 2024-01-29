/*
 * @Author: dushuai
 * @Date: 2024-01-28 17:37:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-29 18:43:56
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
        {notes.slice(0, 8).map((item: Note) =>
          <HomeNotesCard>
            <div class="cursor-pointer p-5 dark:text-gray-300">
              <div class="text-xl">{item.icon}</div>
              <div class="text-sm mt-2 tracking-wide">{item.title}</div>
              <div class="flex items-center mt-4">
                <NuxtImg class="w-12 h-12 rounded-full p-1 border-2 border-[#00c16a]" src={item.avatar} alt="Avatar Image" />
                <div class="ml-4">
                  <div class="text-xs text-gray-600">{item.userName}</div>
                  <NuxtLink href={item.github} target="_blank"                  >
                    <Icon name="akar-icons:github-fill" class="text-gray-600 hover:text-gray-950 hover:scale-150 transition" />
                  </NuxtLink>
                </div>
              </div>
            </div>
          </HomeNotesCard>
        )}
      </div>
    )
  }
})
