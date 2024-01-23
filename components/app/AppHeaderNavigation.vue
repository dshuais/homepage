<script setup lang="ts">
const route = useRoute()
const { navBottomLink } = useContentHelpers()
const { navigation } = useContent()
const { config } = useDocus()

const hasNavigation = computed(() => !!config.value.aside?.level)

const filtered = computed(() => config.value.header?.exclude || [])

if (navigation.value[0]._path != '/') {
  // 向tree列表填入默认首页
  navigation.value.unshift({
    title: '首页',
    _path: '/',
  })
}

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path as never)) {
      return false
    }
    return true
  })
})

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 24 24"
              class="collapse-icon"
              data-v-91fe948a=""
            >
              <path
                d="M12,16c-0.3,0-0.5-0.1-0.7-0.3l-6-6c-0.4-0.4-0.4-1,0-1.4s1-0.4,1.4,0l5.3,5.3l5.3-5.3c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-6,6C12.5,15.9,12.3,16,12,16z"
              />
            </svg>
          </div>
          <div class="collapse-content rounded-2xl border shadow-xl">
            <div
              v-for="(item, i) in link.collapseList"
              :key="i"
              class="menu-link rounded-lg"
            >
              <NuxtLink
                class="menu-nuxt-link"
                :target="isHttp(item) ? '_blank' : '_self'"
                :to="item.redirect ? item.redirect : navBottomLink(item)"
                :class="{ active: isActive(item) }"
              >
                {{ item.title }}
                <svg
                  v-if="isHttp(item)"
                  class="menu-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z" />
                </svg>
              </NuxtLink>
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
        color: '{color.gray.600}',
        '@dark': {
          color: '{color.gray.400}',
        },

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
          '@dark': {
            color: '{color.primary.500}',
            // backgroundColor: '{color.gray.900}',
          },
        },
        // '&.active': {
        //   boxShadow: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        //   fontWeight: '{fontWeight.semibold}'
        // }
      },

      '.collapse-link': {
        cursor: 'pointer',
        '.collapse-icon': {
          marginLeft: '-6px',
          width: '14px',
          height: '14px',
          fill: 'currentColor',
        },
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
          color: '{color.gray.600}',
          '@dark': {
            color: '{color.gray.400}',
          },
          '&:last-child': {
            marginBottom: '0px',
          },
          '&:hover': {
            color: '{color.primary.500}',
            backgroundColor: '{color.gray.100}',
            '@dark': {
              color: '{color.primary.500}',
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
          '.menu-nuxt-link': {
            display: 'flex',
            alignItems: 'center',
            minWidth: '128px',
          }
        }
      },
    }
  }
})
</style>
