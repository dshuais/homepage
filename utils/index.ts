/*
 * @Author: dushuai
 * @Date: 2024-01-24 16:04:59
 * @LastEditors: dushuai
 * @LastEditTime: 2024-02-06 22:58:52
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

/** 
 * 生成uuid
 */
export function uuid() {
  const s: string[] = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++)
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)

  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  // @ts-expect-error
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1)
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  return s.join('')
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone<T>(source: T & Object): Object {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments deepClone')
  }

  const targetObj = source!.constructor === Array ? [] : {}
  Object.keys(source).forEach((keys) => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
