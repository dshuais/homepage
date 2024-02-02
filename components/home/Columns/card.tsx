/*
 * @Author: dushuai
 * @Date: 2024-01-30 12:12:36
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-02 15:51:20
 * @description: 专栏card
 */
export default defineComponent({
  name: 'HomeColumnsCard',
  setup(props, { slots }) {

    const dom = ref<HTMLElement>()

    onMounted(() => {
      dom.value?.addEventListener('mouseenter', handleMouseEnter)
      dom.value?.addEventListener('mouseleave', handleMouseLeave)
    })

    onUnmounted(() => {
      dom.value?.removeEventListener('mouseenter', handleMouseEnter)
      dom.value?.removeEventListener('mouseleave', handleMouseLeave)
      dom.value?.removeEventListener('mousemove', move)
      if (updateCall) {
        window.cancelAnimationFrame(updateCall.value)
      }
    })

    const updateCall = ref<number>(0)

    /**
     * 监听mousemove的回调
     * @param {MouseEvent} event 
     */
    function move(event: MouseEvent) {
      if (updateCall) {
        window.cancelAnimationFrame(updateCall.value)
      }

      updateCall.value = window.requestAnimationFrame(() => update(event))
    }

    const max = ref<number>(40)
    function update(event: MouseEvent) {
      const rect = dom.value!.getBoundingClientRect()
      const width = rect.width,
        height = rect.height,
        left = rect.left,
        top = rect.top
      const x = (event.clientX - left) / width,
        y = (event.clientY - top) / height
      const _x = Math.min(Math.max(x, 0), 1),
        _y = Math.min(Math.max(y, 0), 1)
      const degX = (max.value / 2 - _x * max.value).toFixed(2),
        degY = (_y * max.value - max.value / 2).toFixed(2)

      dom.value!.style.transform = `perspective(1000px) rotateX(${degY}deg) rotateY(${degX}deg) scale3d(1.08, 1.08, 1.08)`
    }

    function handleMouseEnter(event: MouseEvent) {
      dom.value?.addEventListener('mousemove', move)
    }

    function handleMouseLeave() {
      if (updateCall) {
        window.cancelAnimationFrame(updateCall.value)
      }
      dom.value!.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
    }

    return () => (
      <div ref={dom} class="transition-transform" style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);">
        <div data-aos="fade-up" class="relative rounded-xl p-5 mb-8 shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[0_0px_5px_2px_rgba(255,255,255,0.2)] cursor-pointer">
          {slots.default?.()}
        </div>
      </div>
    )
  }
})
