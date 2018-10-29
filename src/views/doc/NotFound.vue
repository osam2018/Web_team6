<template>
  <div id="NotFoundCntent">
    <el-alert title="Not Found" type="info" class="__msgbox_alert" show-icon>
      <div class="__msgbox notfound__msgbox">
        <span>정보를 찾을 수 없습니다. 지금 바로 <b>{{decodeURIComponent(config.originTitle)}}</b>에 대한 정보를 등록하여보세요!</span>
      </div>
    </el-alert>
    <div id="NotFoundWrite">
      <not-found-write v-bind:document="document" v-bind:config="config"></not-found-write>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue';
  import Element from 'element-ui';
  import DocumentWrite from '../WritePostPage'
  Vue.use(Element);

  export default {
    data() {
      console.log(this);
      return {};
    },
    props : ['document', 'config', 'title'],
    methods: {
      handleClick() {
        alert("준비중");
      }
    },
    components: {
      notFoundWrite: DocumentWrite
    }
  }
</script>

<style>

  #NotFoundCntent {
    position: relative;
  }
  #NotFoundCntent .edit-container {
    margin-left: 0;
    width:100%;
    position: relative;
  }

  .__msgbox_alert .el-alert__content {
    width:100%;
  }

  .__msgbox {
    position:relative;
  }
  .notfound__msgbox span {
    font-size: 13px;
    float: left;
  }

  .__msgbox_btn {
    float:right;
    top: -4px;
    right: 23px;
  }
</style>
