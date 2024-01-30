/*
 * @Author: dushuai
 * @Date: 2024-01-30 12:12:36
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-30 17:27:55
 * @description: 专栏card
 */
export default defineComponent({
  name: 'HomeColumnsCard',
  setup(props, { slots }) {
    return () => (
      <div data-aos="fade-up" class="relative rounded-xl  p-5 mb-7 shadow-[0_2px_4px_0px_rgba(0,0,0,0.2)] dark:shadow-[0_0px_5px_2px_rgba(255,255,255,0.2)] cursor-pointer">
        {slots.default?.()}
      </div>
    )
  }
})
