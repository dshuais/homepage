/*
 * @Author: dushuai
 * @Date: 2024-02-04 11:43:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-06 22:00:35
 * @description: AboutSidebar
 */

type Navigation = {
  _path: string,
  title: string
}

export default defineComponent({
  name: 'AboutSidebar',
  setup() {

    const { navigation } = useContent()
    const { config } = useDocus()
    const filtered = computed(() => config.value.header?.exclude || [])

    if (navigation.value[0]._path != '/') {
      navigation.value.unshift({
        title: 'Home',
        _path: '/',
      })
    }

    navigation.value = navigation.value.filter((item: Navigation) => item._path != '/about')

    const tree = computed(() => {
      return (navigation.value || []).filter((item: any) => {
        if (filtered.value.includes(item._path as never)) {
          return false
        }
        return true
      })
    })

    return () => (
      <nav>
        {/* 侧边栏pc端 */}
        <div class="w-[17rem] h-screen bg-[#00C59A] lg:flex flex-col justify-center hidden">
          <div class="w-40 rounded-full p-2 bg-[rgba(255,255,255,0.2)] mx-auto mt-auto mb-0">
            <NuxtImg class="rounded-full" src="https://files-ds.netlify.app/images/avatar.png" alt="Avatar Image" />
          </div>

          <div class="mb-auto mt-5">目录</div>

          <div class="flex items-center justify-center mb-2 text-[#8ce4bf] text-base">
            {tree.value.map((item: Navigation, index: number) => (
              <div class="flex items-center justify-center">
                <NuxtLink class="mx-3 hover:text-gray-100" to={item._path}>
                  {item.title}
                </NuxtLink>

                {index !== tree.value.length - 1 && <div class="w-[1px] h-4 bg-[#8ce4bf]" />}
              </div>
            ))}
          </div>
        </div>
        {/* 导航栏移动端 */}
        <div class="w-full h-14 bg-[#00C59A] black lg:hidden"></div>

      </nav>
    )
  }
})
