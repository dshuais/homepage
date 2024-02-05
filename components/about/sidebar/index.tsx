/*
 * @Author: dushuai
 * @Date: 2024-02-04 11:43:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-05 23:17:49
 * @description: AboutSidebar
 */
export default defineComponent({
  name: 'AboutSidebar',
  setup() {

    return () => (
      <nav>
        {/* 侧边栏pc端 */}
        <div class="w-[17rem] h-screen bg-[#00C59A] lg:flex flex-col justify-center hidden">
          <div class="w-40 mx-auto rounded-full p-2 bg-[rgba(255,255,255,0.2)]">
            <NuxtImg class="rounded-full" src="https://files-ds.netlify.app/images/avatar.png" alt="Avatar Image" />
          </div>
        </div>
        {/* 导航栏移动端 */}
        <div class="w-full h-14 bg-[#00C59A] black lg:hidden"></div>

      </nav>
    )
  }
})
