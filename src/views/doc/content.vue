<template>
  <doc-content>
    <div id="document-content" v-html="document.content">
    </div>
  </doc-content>
</template>

<script>
    export default {
        name: "content.vue",
        props: ['document'],
        data() {
          return {}
        },
      methods: {
       }
    }
</script>

<style scoped>

</style>
