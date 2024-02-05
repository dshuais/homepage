/*
 * @Author: dushuai
 * @Date: 2024-02-04 10:42:33
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-05 22:51:09
 * @description: 关于我
 */
export default defineComponent({
  name: 'About',
  setup() {
    return () => (
      // <div class="mx-auto py-16 lg:w-[85rem] px-3 lg:px-0">
      //   <NuxtImg class="mx-auto" src="https://svg-banners.vercel.app/api?type=origin&text1=Welcome&text2=dshuais%27%20homepage&width=800&height=300" alt="Name Image" />
      // </div>
      <div>
        <AboutSidebar />
      </div>
    )
  }
})
