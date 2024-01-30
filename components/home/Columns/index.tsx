/*
 * @Author: dushuai
 * @Date: 2024-01-30 12:09:23
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-30 17:32:00
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
                <div>{item.title}</div>
              </HomeColumnsCard>
            )}
          </div>
        )}
      </div>
    )
  }
})
