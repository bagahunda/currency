<template>
  <footer class="bg-blue-500 text-white px-4 py-2">
    © Copyright {{ year }}
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>
