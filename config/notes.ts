/*
 * @Author: dushuai
 * @Date: 2024-01-29 10:28:14
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-29 10:46:12
 * @description: 笔记精选列表 降序
 */
export type Note = {
  id: string;
  title: string;
  link: string,
  avatar: string;
  userName: string;
  description?: string;
  github: string;
  createTime: string;
}

export const notes: Note[] = [
  {
    id: '1',
    title: '如何实现Nuxt官网卡片悬浮高亮效果',
    link: 'https://blog.dshuais.com/u=xxx',
    avatar: 'https://files.dshuais.com/images/avatar.png',
    userName: 'dshuais',
    github: 'https://github.com/dshuais',
    createTime: '2024-01-29 10:42'
  }
]
