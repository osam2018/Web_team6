<template>
  <div v-if="!config.hideTopNavigator">
    <H1 class="docTitle">{{decodeURI(config.originTitle)}}

      <span v-if="config.isEdit && document.title !== unavailableStr" class="edit-name">::편집</span>
      <span v-else-if="document.title === unavailableStr" class="edit-name">::등록</span>
    </H1>
    <el-button-group class="controlButtons">
      <el-button size="mini" type="primary" v-bind:disabled="document.title === unavailableStr" icon="el-icon-question">질의응답</el-button>
      <el-button size="mini" type="primary" v-bind:disabled="document.title === unavailableStr" icon="el-icon-info" v-on:click="handleClickHistory">역사</el-button>
      <el-button size="mini" type="primary" v-bind:disabled="config.isEdit" v-on:click="handleClickWrite" icon="el-icon-edit">편집</el-button>
      <el-button size="mini" type="primary" v-bind:disabled="document.title === unavailableStr" icon="el-icon-delete" v-on:click="handleClickRemove">삭제</el-button>
    </el-button-group>
    <div class="clear"></div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import Element from 'element-ui';
  Vue.use(Element);
  export default {
    data() {
      return {
        unavailableStr: "<unavailable>",
        title: "국방위키(가칭):대문"
      };
    },
    props : {
      document: Object,
      config: Object
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClickWrite() {
        console.log(this.config);
        this.config.isEdit = true;
      },
      handleClickHistory() {
        alert("서버 접속에 실패하였습니다.");
      },
      handleClickRemove() {
        alert("서버 접속에 실패하였습니다.");
      }
    },
    watch: {
      document(documentObj) {
        this.title = decodeURIComponent(documentObj.title);
      }
    }
  }
</script>

<style>
.docTitle {
  display: inline-block;
  font-size: 28px;
  margin: 15px 5px;
}

.docTitle .edit-name {
  color: #666;
}

.clear {
  clear: both;
}
  .controlButtons {
    float: right;
    padding: 25px 0 20px 0;
  }
</style>
