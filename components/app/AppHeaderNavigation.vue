<script setup lang="ts">
const route = useRoute();
const { navBottomLink } = useContentHelpers();
const { navigation } = useContent();
const { config } = useDocus();

const hasNavigation = computed(() => !!config.value.aside?.level);

const filtered = computed(() => config.value.header?.exclude || []);

const tree = computed(() => {
  return (navigation.value || []).filter((item: any) => {
    if (filtered.value.includes(item._path as never)) {
      return false;
    }
    return true;
  });
});

console.log("tree", tree.value, navigation.value);

const isActive = (link: any) =>
  link.exact
    ? route.fullPath === link._path
    : route.fullPath.startsWith(link._path);
</script>

<template>
  <nav v-if="hasNavigation">
    <div class="line bg-gray-200 dark:bg-gray-700" />
    <ul>
      <li v-for="link in tree" :key="link._path">
        <NuxtLink
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

      '& > * + *': {
        marginLeft: '{space.2}'
      },

      li: {
        display: 'inline-flex',
        gap: '{space.1}',
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
      }
    }
  }
})
</style>
