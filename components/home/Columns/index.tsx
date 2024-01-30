/*
 * @Author: dushuai
 * @Date: 2024-01-30 12:09:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-30 18:12:59
 * @description: 专栏
 */
import { type Column, type Columns, columns } from '@/config'

export default defineComponent({
  name: 'HomeColumns',
  setup() {

    return () => (
      <div class="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {columns.map((column: Columns) =>
          <div>
            {column.map((item: Column) =>
              <HomeColumnsCard>
                <div class="text-sm font-bold tracking-wide">{item.title}</div>
                <div class="text-xs mt-3 text-gray-500">{item.content}</div>
              </HomeColumnsCard>
            )}
          </div>
        )}
      </div>
    )
  }
})
