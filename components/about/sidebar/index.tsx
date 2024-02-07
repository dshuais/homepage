/*
 * @Author: dushuai
 * @Date: 2024-02-04 11:43:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-07 23:29:50
 * @description: AboutSidebar
 */
import logoStyles from '@/components/Logo/index.module.css'

export default defineComponent({
  name: 'AboutSidebar',
  setup() {

    type Navigation = {
      _path: string,
      title: string
    }

    const { navigation: nav } = useContent()
    const { config } = useDocus()
    const filtered = computed(() => config.value.header?.exclude || [])
    const navigation = ref<Navigation[]>([])

    navigation.value = deepClone(nav.value) as Navigation[]

    if (navigation.value[0]._path != '/') {
      navigation.value.unshift({
        title: 'Home',
        _path: '/',
      })
    }
    if (navigation.value.at(-1)?.title != 'Blog') {
      navigation.value.push({
        title: 'Blog',
        _path: 'https://blog.dshuais.com/',
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

    const menu = ref<Navigation[]>([
      { title: 'ABOUT', _path: '#about-section' },
      { title: 'SKILLS', _path: '#skills-section' },
      { title: 'EXPERIENCES', _path: '#experiences-section' },
      { title: 'PROJECTS', _path: '#projects-section' },
    ])

    /**
     * 判断是否是http链接
     * @param {Navigation} link
     */
    const isHttp = (link: Navigation) => {
      return link._path.includes('http')
    }

    const colorMode = useColorMode()

    function colorDom(color: string) {
      if (color == 'dark') return <Icon name="uil:moon" />
      else if (color == 'light') return <Icon name="uil:sun" />
      else return <Icon name="uil:desktop" />
    }

    function changeColorMode() {
      const values = ['system', 'light', 'dark']
      const index = values.indexOf(colorMode.preference)
      const next = (index + 1) % values.length

      colorMode.preference = values[next]
    }

    return () => (
      <nav>
        {/* 侧边栏pc端 */}
        <div class="w-[17rem] h-screen bg-[#00C59A] lg:flex flex-col justify-center hidden">
          {/* 头像 */}
          <div class="w-40 rounded-full p-2 bg-[rgba(255,255,255,0.2)] mx-auto mt-auto mb-0">
            <NuxtImg class="rounded-full" src="https://files-ds.netlify.app/images/avatar.png" alt="Avatar Image" />
          </div>

          {/* 页面导航栏 */}
          <div class="mb-auto mt-5">
            {menu.value.map((item: Navigation) => (
              <NuxtLink class="block text-center font-bold text-[rgba(255,255,255,0.55)] hover:text-white py-1" to={item._path}>
                {item.title}
              </NuxtLink>
            ))}
          </div>

          {/* 导航栏 */}
          <div class="flex items-center justify-center mb-2 text-[#8ce4bf] text-base">
            {tree.value.map((item: Navigation, index: number) => (
              <div class="flex items-center justify-center">
                <NuxtLink class="mx-3 hover:text-gray-100" to={item._path} target={isHttp(item) ? '_blank' : '_self'}>
                  {item.title}
                </NuxtLink>

                {index !== tree.value.length - 1 && <div class="w-[1px] h-4 bg-[#8ce4bf]" />}
              </div>
            ))}
          </div>

          {/* 主题切换 */}
          <div class="mb-0 mx-auto">
            <button aria-label="Color Mode" onClick={changeColorMode} class="flex p-3 text-[rgba(255,255,255,0.55)] hover:text-white">
              <ColorScheme placeholder="...">
                {colorDom(colorMode.preference)}
              </ColorScheme>
            </button>
          </div>
        </div>

        {/* 导航栏移动端 */}
        <div class="w-full h-14 bg-[#00C59A] lg:hidden fixed top-0 px-3 grid gap-2 grid-cols-12">
          {/* md展示导航栏 sm时不展示 */}
          {/* <div class="col-span-2 flex items-center ml-3">
            <AppHeaderLogo />
          </div> */}

          {/* 页面导航栏 */}
          <div class="col-span-8 sm:flex items-center hidden">
            {menu.value.map((item: Navigation) => (
              <NuxtLink class="block text-center font-bold text-[rgba(255,255,255,0.55)] hover:text-white py-1 mx-2" to={item._path}>
                {item.title}
              </NuxtLink>
            ))}
          </div>

          <div class="items-center col-span-4 justify-end sm:flex hidden">
            {/* 导航栏 */}
            <div class="flex items-center justify-center text-[#8ce4bf] text-base">
              {tree.value.map((item: Navigation, index: number) => (
                <div class="flex items-center justify-center">
                  <NuxtLink class="mx-4 hover:text-gray-100" to={item._path} target={isHttp(item) ? '_blank' : '_self'}>
                    {item.title}
                  </NuxtLink>

                  <div class="w-[1px] h-4 bg-[#8ce4bf]" />
                </div>
              ))}
            </div>

            {/* 主题切换 */}
            <button aria-label="Color Mode" onClick={changeColorMode} class="flex p-3 text-[rgba(255,255,255,0.55)] hover:text-white">
              <ColorScheme placeholder="...">
                {colorDom(colorMode.preference)}
              </ColorScheme>
            </button>
          </div>

          <div class={['col-span-4 flex items-center sm:hidden text-[#8ce4bf] text-lg select-none cursor-pointer', logoStyles['logo-text']]}>
            dshuais
          </div>
          <div class="col-span-8 flex items-center justify-end sm:hidden text-[#8ce4bf] text-3xl cursor-pointer">
            <Icon name="material-symbols:menu" />
          </div>
        </div>

      </nav>
    )
  }
})
