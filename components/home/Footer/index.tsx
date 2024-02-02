/*
 * @Author: dushuai
 * @Date: 2024-02-02 17:33:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-02 18:10:29
 * @description: HomeFooter
 */

export default defineComponent({
  name: 'HomeFooter',
  setup() {
    return () => (
      <div class="mx-auto px-6 py-16 lg:flex lg:items-center lg:justify-between lg:px-8 w-[85rem]">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          I hope it can help you!
          <br />
          You can also place your notes or columns here.
        </h2>
        <div class="mt-10 flex items-center gap-x-6 lg:mt-0 lg:flex-shrink-0">
          <a href="mailto:dsshuais2020@163.com"
            target="_blank"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send me an email!
          </a>
          <a href="https://blog.dshuais.com/" target="_blank"
            class="text-sm font-semibold leading-6 text-gray-900 dark:text-white">Visit blog website <span
              aria-hidden="true">→</span></a>
        </div>
      </div>
    )
  }
})