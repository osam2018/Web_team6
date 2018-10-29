<template>
  <container class="edit-container">
    <div class="header">
      <h1>글작성</h1>
      <div class="buttons">
        <el-button class="add-btn btn" size="mini" type="default" @click="getHtml">등록</el-button>
        <el-button class="cancel-btn btn" size="mini" v-bind:disabled="document.content === unavailableStr" @click="cancelEdit"type="danger">취소</el-button>
      </div>
      <el-input placeholder="Please input" v-model="input"></el-input>
      <div class="clear"></div>
    </div>
    <div class="content">
      <h2>본문</h2>
  <tui-editor
    :value="editorText"
    :options="editorOptions"
    :html="editorHtml"
    :visible="editorVisible"
    previewStyle="vertical"
    height="600px"
    mode="wysiwyg"
    ref="tuiEditor"
  />
      <h2>연관 주제</h2>
      <tags></tags>
    </div>
  </container>
</template>
<script>
  import { Editor } from '@toast-ui/vue-editor'
  import Vue from 'vue';
  import Element from 'element-ui';
  import Tags from './Tags.vue';
  Vue.use(Element);

  export default {
    components: {
      'tui-editor': Editor,
      tags: Tags
    },
    props: {
      document: Object,
      config: Object
    },
    methods: {
      getHtml() {
        if(this.originContent === "<unavailable>" || this.originContent === null) {
          this.document.title = this.input;
          this.config.originTitle = this.input;
          this.document.date = '20181026235959';
          this.config.detectNotFound = false;
          this.config.detectError = false;
        }

        let html = this.$refs.tuiEditor.invoke('getHtml');
        this.document.content = html;
        this.config.editCancel = true;
      },
      cancelEdit() {
        this.document.content = this.originContent;
        this.config.editCancel = true;
      }
    },
    data() {
      return {
        unavailableStr: "<unavailable>",
        input: this.config.originTitle && decodeURI(this.config.originTitle) || "<undefined>",
        editorText: this.document.content || "<undefined>",
        editorOptions: {
          hideModeSwitch: true
        },
        editorHtml: '',
        editorVisible: true,
        originContent: this.document.content || null
      };
    },
    watch: {
      document: function(documentObject) {
        let doc = documentObject.content;
        this.originContent = doc;
        this.editorText = doc;
      }
    }
  };
</script>
<style>
  #main__container .el-aside, #main__container .el-main {
    overflow: visible;
  }
  .edit-container {
    width: 80%;
    height: 100%;
    position: absolute;
    margin-left: 10%;
  }
  h1 {
    display: inline-block;
  }
  .clear {
    clear: both;
  }
  .buttons {
    float: right;
    margin: 1vh;
    vertical-align: middle;
    padding: 0px;
    margin: 0px;
  }
  .buttons > .btn {
  }
  .header {
    margin-top: 20px;
    margin-bottom: 30px;
  }
  .header::after {
    content:'';
  }
</style>
