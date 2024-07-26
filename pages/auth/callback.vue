<template>
  <div>
    <h1>Processing...</h1>
  </div>
</template>

<script>
import { handleOAuthCallback } from '~/services/oauth'

export default {
  async mounted() {
    handleOAuthCallback(window.location.href)
    // Redirect to home or another page
    await setTimeout(() => {
      this.$router.push('/')
    }, 1000)
  },
}
</script>
