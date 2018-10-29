<template>
    <div id="EditPage">
      <write-post-page id="WritePostPage" v-bind:document="document" v-bind:config="config"></write-post-page>
    </div>
</template>

<script>
    import WritePostPage from "../WritePostPage.vue"

    export default {
      name: "edit",
      props: {
          config: Object,
          document: Object
      },
      data() {
          history.replaceState( {} , '', '/edit/'+this.config.originTitle );
          return {
            unavailableStr: "<unavailable>"
          }
      },
      watch: {
        document(documentObject) {
          this.document = documentObject;
        }
,      },
      components: {
        WritePostPage: WritePostPage
      }
    }
</script>

<style>

  #EditPage {
    position: relative;
  }

  #EditPage .edit-container {
    margin-left: 0;
    width:100%;
    position: relative;
  }

</style>
