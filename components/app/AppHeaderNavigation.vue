<script setup lang="ts">
const route = useRoute()
const { navBottomLink } = useContentHelpers()
const { navigation } = useContent()
const { config } = useDocus()

const hasNavigation = computed(() => !!config.value.aside?.level)

const filtered = computed(() => config.value.header?.exclude || [])

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path as never)) {
      return false
    }
    return true
  })
})
// 向tree列表填入默认首页
tree.value.unshift({
  title: '首页',
  _path: '/',
})

console.log('tree', tree.value, navigation.value, route.fullPath)

const isActive = (link: any) => {
  if (link._path === '/') return route.fullPath === '/'
  else
    return link.exact
      ? route.fullPath === link._path
      : route.fullPath.startsWith(link._path)
}

/**
 * 判断是否是http链接
 * @param link
 */
const isHttp = (link: any) => {
  return link._path.includes('http')
}
</script>

<template>
  <nav v-if="hasNavigation">
    <div class="line bg-gray-200 dark:bg-gray-700" />
    <ul>
      <li v-for="link in tree" :key="link._path">
        <template v-if="link.collapse">
          <div class="link collapse-link" :class="{ active: isActive(link) }">
            {{ link.title }}
          </div>
          <div class="collapse-content rounded-2xl border shadow-xl">
            <div
              v-for="(item, i) in link.collapseList"
              :key="i"
              class="menu-link rounded-lg"
            >
              <NuxtLink
                :to="item.redirect ? item.redirect : navBottomLink(item)"
                :class="{ active: isActive(item) }"
              >
                {{ item.title }}
              </NuxtLink>
              <svg
                v-if="isHttp(link)"
                class="menu-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
              </svg>
            </div>
          </div>
        </template>

        <NuxtLink
          v-else
          class="link"
          :to="link.redirect ? link.redirect : navBottomLink(link)"
          :class="{ active: isActive(link) }"
        >
          <Icon
            v-if="link.icon && config?.header?.showLinkIcon"
            :name="link.icon"
          />
          {{ link.title }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="ts">
css({
  nav: {
    display: 'none',
    position: 'relative',

    '.line': {
      content: "''",
      position: 'absolute',
      width: '1px',
      // height: '65%',
      height: '25px',
      right: 0,
      top: '50%',
      transform: 'translateY(-50%)',
    },

    '@lg': {
      display: 'block'
    },
    ul: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1',
      maxWidth: '100%',
      truncate: true,
      overflow: 'visible',

      '& > * + *': {
        marginLeft: '{space.2}'
      },

      li: {
        display: 'inline-flex',
        gap: '{space.1}',
        position: 'relative',
        '&:hover': {
          '.collapse-content': {
            opacity: '1',
            pointerEvents: 'auto', // Enable pointer events to allow interaction
            visibility: 'visible',
          },
        }
      },

      '.link': {
        display: 'flex',
        alignItems: 'center',
        gap: '{space.2}',
        padding: '{space.2} {space.4}',
        fontSize: '{fontSize.sm}',
        borderRadius: '{radii.md}',
        outline: 'none',
        transition: 'background 200ms ease',
        fontWeight: '{fontWeight.semibold}',

        svg: {
          display: 'inline-block'
        },

        '.icon': {
          display: 'inline-flex !important',
          alignItems: 'center',
          justifyContent: 'center',
          width: '{docus.app.navigation.link.icon.size} !important',
          height: '{docus.app.navigation.link.icon.size} !important',
        },

        '&:active,&.active,&:hover': {
          color: '{color.primary.500}',
          // backgroundColor: '{color.gray.100}',
          // '@dark': {
          // backgroundColor: '{color.gray.900}',
          // },
        },

        // '&.active': {
        //   boxShadow: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        //   fontWeight: '{fontWeight.semibold}'
        // }
      },

      '.collapse-link': {
        cursor: 'pointer'
      },
      '.collapse-content': {
          position: 'absolute',
          top: '100%',
          right: 0,
          background: '{elements-backdrop-background}',
          borderColor: '{color.gray.300}',
          opacity: '0',
          pointerEvents: 'none', // Disable pointer events to prevent interaction
          transition: 'all 0.3s',
          visibility: 'hidden',
          padding: '12px',
          '@dark': {
            borderColor: '{color.gray.700}',
          },
          '.menu-link': {
            padding: '0 12px',
            lineHeight: '32px',
            whiteSpace: 'nowrap',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            marginBottom: '2px',
            display: 'flex',
            alignItems: 'center',
            minWidth: '128px',
            '&:last-child': {
              marginBottom: '0px',
            },
            '&:hover': {
              color: '{color.primary.500}',
              backgroundColor: '{color.gray.100}',
              '@dark': {
                backgroundColor: '{color.gray.800}',
              },
            },
            '.menu-icon': {
              width: '11px',
              height: '11px',
              marginLeft: '4px',
              flexShrink: '0',
              // marginRight: '12px',
              fill: '{color.gray.500}',
            },
            '.active': {
              color: '{color.primary.500}',
            },
          }
        },
    }
  }
})
</style>
