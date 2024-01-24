/*
 * @Author: dushuai
 * @Date: 2024-01-24 16:04:59
 * @LastEditors: dushuai
 * @LastEditTime: 2024-01-24 16:07:16
 * @description: utils
 */
/**
 * 我的打印
 * @returns log
 */
export const ThisLog = () => (
  console.log(
    `%c
         ________                     ____________
          / ____ / /               ● / ______    
         / /    / /_        ____  __/ /
        / /___ / __ \\/ / / / _  \\/ / /_____
        \\ __  / / / / / / / / / / / \\ __  /
       ____/ / / / / /_/ / /_/ / /  ___/ /
  __________/_/ /_/______\\_____\\/_______/ 
  `,
    "color:skyblue"
  ),
  console.group(
    "%c[WelCome]",
    `padding: 4px 6px;
  font-weight: 600;
  border-radius: 4px;
  color:#fff;
  background-color:skyblue;`
  ),
  console.log("注意看 这个男孩叫小帅"),
  console.log("This is dshuais' homepage"),
  console.log("此主页and博客正在持续building..."),
  console.log("不定时更新"),
  console.log("博主正在社畜坐牢"),
  console.log("%cLove your life, Love programming.", "color:skyblue;"),
  console.groupEnd(),
  new Date().getDay() === 4 && console.log("疯狂星期四，v我50🐶"),
  console.log(
    "%c dshuais %c V0.0.1 ",
    "padding: 2px 1px; border-radius: 3px 0 0 3px; color: #fff; background: #606060; font-weight: bold;",
    "padding: 2px 1px; border-radius: 0 3px 3px 0; color: #fff; background: skyblue; font-weight: bold;"
  )
);
