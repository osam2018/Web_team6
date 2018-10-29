<template>
  <div id="UnexceptedExceptionErrorContent">
    <el-alert title="Server Error" type="error" class="__msgbox_error" show-icon>
      <div class="__msgbox error__msgbox">
        <p>서버에 문제가 발생하였거나 올바르지 않은 접근입니다.</p>
      </div>
    </el-alert>


  </div>
</template>

<script>

  import Vue from 'vue';
  import Element from 'element-ui';
  Vue.use(Element);

  export default {
    data() {
      return {};
    },
    props : ['document', 'title'],
    methods: {
      handleClick() {
        alert("준비중");
      }
    }
  }
</script>

<style>

  .__msgbox_error .el-alert__title {
    padding: 5px 0;
  }

  #UnexceptedExceptionErrorContent .el-alert {
    padding: 15px 16px
  }

  .__msgbox_error .el-alert__content {
    display: table-cell;
    padding: 0 8px;
    top: -4px;
    right: -10px;
    position: relative;
    width:100%;
  }

  .__msgbox {
    position:relative;
  }
  .error__msgbox p {
    font-size: 13px;
    margin:0;
  }
</style>
