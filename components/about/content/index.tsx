/*
 * @Author: dushuai
 * @Date: 2024-02-18 10:29:49
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-18 10:58:43
 * @description: about content
 */
export default defineComponent({
  name: 'AboutContent',
  setup() {

    return () => (
      <div class="w-full h-full">
        <AboutIntroduce />
      </div>
    )
  }
})
