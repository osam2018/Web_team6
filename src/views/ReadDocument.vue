<template>

  <div class="readDocument">
    <div is="documentInfoMessage" id="document-info">
      {{documentInfoMessage}}
    </div>
    <div v-if="!config.detectError && !config.hasLoading && !config.detectNotFound" id="showDocument">
      <div id="documentContent">
        <doc-content v-bind:document="document"></doc-content>
      </div>
      <div id="documentInfo">
        <doc-info v-bind:document="document"></doc-info>
      </div>
    </div>
    <div v-else class="ErorSection__container">
      <div v-if="config.detectNotFound" id="ErrorSection">
        <div id="error-not-found">
          <error-not-found v-bind:config="config" v-bind:document="document"></error-not-found>
        </div>
      </div>
      <div v-else>
        <div id="unexpected-exception">
          <unexpected-exception-error></unexpected-exception-error>
        </div>
      </div>
    </div>

  </div>




</template>

<script>
  import content from './doc/content.vue'
  import info from './doc/info.vue'
  import ErrorNotFound from './doc/NotFound.vue'
  import UnexceptedExceptionError from './doc/UnexpectedExceptionError.vue'
  import http from 'axios'
  var loadingDocument = {
    title: "국방위키(가칭): 대문",
    content: "대문 테스트입니다.",
    date: "20180101235959",
    comment: "TEST",
  };


  function loadFunc() {

  }

  export default {
    name: "ReadDocument.vue",
    props: {
      isHideTopNavigator: Boolean,
      config: Object,
      document: Object
    },
    data() {
      if(this.document.title === "<unavailable>") {
        var title = null;
        var path = window.location.pathname;
        var docRegex = /^\/w\/(.*)/i;
        var docMatch = docRegex.exec(path);
        var that = this;
        var hideTopNavigator = false;
        if(docMatch && docMatch.length > 1 || path === '/') {
          if(path === '/') {
            title = '국방위키(가칭)：대문';
          } else {
            title = docMatch[1];
          }
          history.replaceState( {} , '', '/w/'+title );
          this.hasLoading = true;
          http('../src/json/'+title+'.json').then(function(resolve){
            let data = resolve.data;
            that.$emit('getData', data);
            that.document = data;
          })['catch'](function(e){
            that.config.detectNotFound = true;
            that.config.detectError = true;
          })['finally'](function() {
            that.hasLoading = false;
          });
        } else {
          this.config.hideTopNavigator = true;
          this.config.detectError = true;
        }
        this.config.originTitle = decodeURI(title);

      }
      history.replaceState( {} , '', '/w/'+this.config.originTitle );
      return {
        documentInfoMessage: null,
        document: loadingDocument,
        hasLoading: this.hasLoading
      };
    },
    watch: {
      'config.editCancel': function(newVal, oldVal) {
      },
      'config.originTitle': function(newVal, oldVal) {
        if(newVal !== oldVal) {
          this.document.title = "<unavailable>";
          console.log(this);
        }
      }
    },
    components: {
      docContent: content,
      docInfo: info,
      errorNotFound: ErrorNotFound,
      unexpectedExceptionError: UnexceptedExceptionError
    }
  }
</script>

<style scoped>
</style>
