/*
 * @Author: dushuai
 * @Date: 2024-01-29 10:28:14
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-02 16:07:16
 * @description: 专栏推荐列表 降序
 */
export type Column = {
  id: string;
  title: string;
  content: string;
  link: string,
  avatar?: string;
  userName?: string;
  description?: string;
  github?: string;
  updateTime: string;
}

export type Columns = Column[];

export const columns: Columns[] = [
  [
    {
      id: '1',
      title: '手把手教你开发自己的Vue 3组件库',
      content: '手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库，手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库，手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库',
      link: 'https://blog.dshuais.com/u=xxx',
      avatar: 'https://files.dshuais.com/images/avatar.png',
      userName: 'dshuais',
      github: 'https://github.com/dshuais',
      updateTime: '2024-01-29 10:47'
    },
    {
      id: '2',
      title: '手把手教你开发自己的Vue 3组件库',
      content: '手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库，手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库，手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库',
      link: 'https://blog.dshuais.com/u=xxx',
      avatar: 'https://files.dshuais.com/images/avatar.png',
      userName: 'dshuais',
      github: 'https://github.com/dshuais',
      updateTime: '2024-01-29 10:47'
    }
  ],
  [
    {
      id: '1',
      title: '手把手教你开发自己的Vue 3组件库',
      content: '手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库',
      link: 'https://blog.dshuais.com/u=xxx',
      avatar: 'https://files.dshuais.com/images/avatar.png',
      userName: 'dshuais',
      github: 'https://github.com/dshuais',
      updateTime: '2024-01-29 10:47'
    },
    {
      id: '2',
      title: '手把手教你开发自己的Vue 3组件库',
      content: '手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库',
      link: 'https://blog.dshuais.com/u=xxx',
      avatar: 'https://files.dshuais.com/images/avatar.png',
      userName: 'dshuais',
      github: 'https://github.com/dshuais',
      updateTime: '2024-01-29 10:47'
    }
  ],
  [
    {
      id: '1',
      title: '手把手教你开发自己的Vue 3组件库',
      content: '手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库，手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库，手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库',
      link: 'https://blog.dshuais.com/u=xxx',
      avatar: 'https://files.dshuais.com/images/avatar.png',
      userName: 'dshuais',
      github: 'https://github.com/dshuais',
      updateTime: '2024-01-29 10:47'
    },
    {
      id: '2',
      title: '手把手教你开发自己的Vue 3组件库',
      content: '手把手教你开发自己的Vue 3组件库手把手教你开发自己的Vue 3组件库',
      link: 'https://blog.dshuais.com/u=xxx',
      avatar: 'https://files.dshuais.com/images/avatar.png',
      userName: 'dshuais',
      github: 'https://github.com/dshuais',
      updateTime: '2024-01-29 10:47'
    }
  ]
]
