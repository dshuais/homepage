/*
 * @Author: dushuai
 * @Date: 2024-02-04 11:43:37
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-12 12:15:13
 * @description: AboutSidebar
 */
import { ColorScheme, Icon, NuxtImg, NuxtLink } from '#components'
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

    const show = ref<boolean>(false)

    function close() {
      show.value = false
    }

    /**
     * 监听弹窗打开关闭 对body设置属性 避免弹窗时滚动条滚动的问题
     */
    watchEffect(() => {
      if (process.client) {
        const html = document.documentElement
        if (show.value) {
          html.style.overflow = 'hidden'
        } else {
          setTimeout(() => {
            html.style.overflow = ''
          }, 100);
        }
      }
    })

    return () => (
      <nav>
        {/* 侧边栏pc端 */}
        <div class="w-[17rem] h-screen bg-[#00C59A] lg:flex flex-col justify-center hidden fixed">
          {/* 头像 */}
          <div class="w-40 rounded-full p-2 bg-[rgba(255,255,255,0.2)] mx-auto mt-auto mb-0">
            <NuxtImg class="rounded-full" src={'https://files-ds.netlify.app/images/avatar.png'} alt="Avatar Image" />
          </div>

          {/* 页面导航栏 */}
          <div class="mt-5">
            {menu.value.map((item: Navigation) => (
              <NuxtLink class="block text-center font-bold text-[rgba(255,255,255,0.55)] hover:text-white py-1" to={item._path}>
                {item.title}
              </NuxtLink>
            ))}
          </div>

          {/* github */}
          <NuxtLink class="mb-auto mt-3 mx-auto" to="https://github.com/dshuais" target='_blank'>
            <Icon name="mdi:github" class="text-2xl text-[#8ce4bf] hover:text-white" />
          </NuxtLink>


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

                  <div class="w-[1px] h-4 bg-[#8ce4bf] flex-shrink-0" />
                </div>
              ))}
            </div>

            {/* 主题切换 */}
            <button aria-label="Color Mode" onClick={changeColorMode} class="flex p-4 text-[rgba(255,255,255,0.55)] hover:text-white">
              <ColorScheme placeholder="...">
                {colorDom(colorMode.preference)}
              </ColorScheme>
            </button>

            <div class="w-[1px] h-4 bg-[#8ce4bf] flex-shrink-0" />

            {/* github */}
            <NuxtLink class="p-4 mt-[-2px] flex" to="https://github.com/dshuais" target='_blank'>
              <Icon name="mdi:github" class="text-lg text-[#8ce4bf] hover:text-white" />
            </NuxtLink>
          </div>

          <div class={['col-span-4 flex items-center sm:hidden text-[#8ce4bf] text-lg select-none cursor-pointer', logoStyles['logo-text']]}>
            dshuais
          </div>
          <div class="col-span-8 flex items-center justify-end sm:hidden text-[#8ce4bf] text-3xl cursor-pointer"
            onClick={() => (show.value = true)}>
            <Icon name="material-symbols:menu" />
          </div>
        </div>

        {/* 移动端弹窗 */}
        <div class={['w-full bg-[rgba(255,255,255,0.5)] dark:bg-[rgba(0,0,0,0.5)] backdrop-saturate-[200%] backdrop-blur-[20px] fixed z-10 top-0 transition-all h-screen pt-20 select-none',
          show.value ? 'opacity-100' : 'opacity-0 pointer-events-none']}>
          <div class="max-w-72 mx-auto">
            <Icon name="material-symbols:close" class="text-2xl absolute top-5 right-5 cursor-pointer"
              onClick={close} />

            <div class="text-lg border-b border-gray-300 pb-2">
              Page
            </div>

            {/* 页面导航栏 */}
            <div class="mt-2 pl-3">
              {menu.value.map((item: Navigation) => (
                <NuxtLink class="block mb-1 text-gray-500 hover:text-gray-900 dark:text-[rgba(255,255,255,0.8)] dark:hover:text-white" to={item._path}>
                  {item.title}
                </NuxtLink>
              ))}
            </div>

            <div class="mt-6 text-lg border-b border-gray-300 pb-2">
              Menu
            </div>

            {/* 导航栏 */}
            <div class="flex flex-col mt-2 text-gray-500 dark:text-[rgba(255,255,255,0.8)] text-base">
              {tree.value.map((item: Navigation, index: number) => (
                <NuxtLink class="pl-3 mb-1 hover:text-gray-900 dark:hover:text-white" to={item._path} target={isHttp(item) ? '_blank' : '_self'}>
                  {item.title}
                </NuxtLink>
              ))}
            </div>

            {/* 主题切换 */}
            <div class="w-full py-3 px-5 mt-6 bg-[#f6f6f7] dark:bg-[#202127] rounded-lg flex justify-between items-center">
              <div class="text-xs text-gray-500 dark:text-gray-400">Appearance</div>

              <button aria-label="Color Mode" onClick={changeColorMode} class="text-lg text-gray-500 hover:text-gray-900 dark:text-[rgba(255,255,255,0.8)] dark:hover:text-white">
                <ColorScheme placeholder="...">
                  {colorDom(colorMode.preference)}
                </ColorScheme>
              </button>
            </div>

            {/* github */}
            <NuxtLink class="text-center block mt-4" to="https://github.com/dshuais" target='_blank'>
              <Icon name="mdi:github" class="text-2xl text-gray-600 hover:text-gray-900 dark:text-[rgba(255,255,255,0.8)] dark:hover:text-white" />
            </NuxtLink>
          </div>
        </div>

      </nav>
    )
  }
})
