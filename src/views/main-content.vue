<template>
  <div class>
    <doc-title-section v-bind:document="documentObject" v-bind:config="config"></doc-title-section>
    <doc-content v-if="!config.isEdit" v-on:getData="subscribeData" v-bind:document="documentObject" v-bind:config="config"></doc-content>
    <doc-edit v-if="config.isEdit" v-bind:config="config" v-bind:document="documentObject"></doc-edit>
  </div>
</template>


<script>
  import VueRouter from "vue-router"
  import Vue from "Vue";
  import DocTitleSection from "./TitleSection.vue";
  import ReadDocument from "./ReadDocument.vue";
  import EditDocument from "./doc/edit.vue";
  import http from 'axios';
  Vue.use(VueRouter);

  function hasEditMode() {
    return !!getTitle();
  }

  function getTitle() {
    var path = window.location.pathname;
    var editRegex = /^\/edit\/(.*)/i;
    var editMatch = editRegex.exec(path);
    if(!editMatch) {
      return null;
    } else {
      return editMatch[1];
    }
  }

  export default {
    data: function(){
      var editMode = hasEditMode();
      var title = getTitle();
      var that = this;
      var conf = this.config;
      if(editMode) {
        http('../src/json/'+title+'.json').then(function(resolve){
          var data = resolve.data;
          that.documentObject = data;
          that.config.originTitle = title;
        })['catch'](function(e){
          conf.editCancel = false;
          conf.detectNotFound = true;
          conf.detectError = false;
        })['finally'](function() {

        });
      }
      this.config = {
        isEdit: editMode,
        hideTopNavigator: false,
        editCancel: false,
        detectNotFound: false,
        detectError: false,
        originTitle: title
      };
      this.documentObject = {
        title: "<unavailable>",
          content: "<unavailable>",
          comment: "<unavailable>"
      };

      this.$emit('config', this.config);
      this.$emit('document', this.documentObject);

      return {
        documentObject: this.documentObject,
        config: this.config
      }
    },
    methods: {
      subscribeData: function(dataObject){
        if(dataObject === void 0) {
          throw new TypeError("dataObject argument must be object.");
        }
        this.documentObject = dataObject;
      }
    },
    watch: {
      'config.editCancel': function(newVal, oldVal) {
        var conf = this.config;
        conf.isEdit = false;
        conf.hideTopNavigator = false;
        conf.editCancel = false;
      }
    },
    components: {
      DocTitleSection: DocTitleSection,
      DocContent: ReadDocument,
      DocEdit: EditDocument
    }
  }

</script>



<style>
  .footnote-list{
    line-height: 2em;
    display: block;
  }

</style>
