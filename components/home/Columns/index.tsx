/*
 * @Author: dushuai
 * @Date: 2024-01-30 12:09:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-02 16:15:05
 * @description: 专栏
 */
import { type Column, type Columns, columns } from '@/config'

export default defineComponent({
  name: 'HomeColumns',
  setup() {

    return () => (
      <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {columns.map((column: Columns, index: number) =>
          <div class='mb-[-2rem]'>
            {column.map((item: Column) =>
              <HomeColumnsCard>
                <div class="text-sm font-bold tracking-wide">{item.title}</div>
                <div class="text-xs mt-3 text-gray-500 dark:text-gray-400">{item.content}</div>
                <div class="text-xs mt-4 text-gray-400 dark:text-gray-500 scale-90 ml-[-14px]">updateTime: {item.updateTime}</div>
              </HomeColumnsCard>
            )}
          </div>
        )}
      </div>
    )
  }
})
