<script setup lang="ts">
const { element } = useDocSearch()

const onClick = () => element.value.querySelector('button').click()
</script>

<template>
  <button type="button" aria-label="Search" @click="onClick">
    <span class="content">
      <Icon name="heroicons-outline:search" />
      <span>Search</span>
      <span class="ctrl">
        <kbd>Ctrl</kbd>
        <kbd>K</kbd>
      </span>
    </span>
  </button>
</template>

<style scoped lang="ts">
css({
  button: {
    padding: '{space.2} {space.2}',
    '.content': {
      borderRadius: '{radii.md}',
      display: 'flex',
      alignItems: 'center',
      color: '{color.gray.600}',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderColor: '{color.gray.100}',
      fontSize: '{fontSize.sm}',
      gap: '{space.2}',
      padding: '{space.1} {space.2}',
      background: '{color.gray.100}',
      opacity: '0.6',
      '@dark': {
        color: '{color.gray.400}',
        borderColor: '{color.gray.800}',
        background: '{color-gray-800}'
      },
      '&:hover': {
        color: '{color.gray.700}',
        borderColor: '{color-primary-500}',
        '@dark': {
          color: '{color.gray.200}',
          borderColor: '{color.gray.700}',
        }
      },
      span: {
        flex: 'none',
        display: 'none',
        fontSize: '{fontSize.xs}',
        '@lg': {
          display: 'block'
        }
      },
      '.ctrl': {
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: '{color.gray.200}',
        padding: '{space.1} {space.2}',
        borderRadius: '{radii.xs}',
        '@dark': {
          borderColor: '{color.gray.700}',
        }
      }
    }
  },
})
</style>
