/*
 * @Author: dushuai
 * @Date: 2024-01-26 16:01:52
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-26 16:38:46
 * @description: HomeBanner
 */
import { NuxtLink } from "#components"

type Props = {
  badgeText?: string,
  text: string,
  link?: string,
  linkText?: string,
}

export default defineComponent({
  name: 'HomeBanner',
  props: {
    badgeText: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      default: undefined,
    },
    linkText: {
      type: String,
      default: 'Check it out!',
    }
  },
  setup(props: Props) {
    return () => (
      <div
        class="relative bg-gray-200/70 dark:bg-pickled-bluewood-800 items-center justify-center pt-3 pb-3 text-[1rem] flex flex-wrap lg:flex-nowrap">
        <div class="flex items-center">
          <span class="mr-5 rounded-lg bg-blue-600 px-4 py-1 text-sm text-white">
            {props.badgeText}
          </span>
          <span class="dark:text-gray-200">
            {props.text}
          </span>
        </div>
        <NuxtLink href={props.link} target="_blank" class="text-blue ml-4 underline">
          {props.linkText}
        </NuxtLink>
      </div>
    )
  }
})