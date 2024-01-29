/*
 * @Author: dushuai
 * @Date: 2024-01-29 10:28:14
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-29 10:50:16
 * @description: 专栏推荐列表 降序
 */
export type Column = {
  id: string;
  title: string;
  link: string,
  avatar: string;
  userName: string;
  description?: string;
  github: string;
  createTime: string;
}

export const columns: Column[] = [
  {
    id: '1',
    title: '手把手教你开发自己的Vue 3组件库',
    link: 'https://blog.dshuais.com/u=xxx',
    avatar: 'https://files.dshuais.com/images/avatar.png',
    userName: 'dshuais',
    github: 'https://github.com/dshuais',
    createTime: '2024-01-29 10:47'
  }
]
