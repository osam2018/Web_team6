<template>
  <div class="discuss-container">
    <div class="comment">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="title">Card name</span>
      <span class="date">date</span>
    </div>
    <div class="text item">
      CommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsComments
      CommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsCommentsComments
    </div>
  </el-card>
    </div>
  <div class="comment">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Card name</span>
    </div>
    <div class="text item">
      Comments
    </div>
  </el-card>
  </div>
    <div class="write-discuss-container">
      <h2>토론 작성</h2>
      <el-form ref="form" :model="form" label-width="120px" style="width:60%">
        <el-form-item label="제목">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="내용">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
    </div>
</div>
</template>

<script>
  import Vue from 'vue';
  import ElementUI from 'element-ui';

  Vue.use(ElementUI);

    export default {
        name: "DiscussionSection",
        data () {
          return {
            form : {
              
            }
          }
        }
    }
</script>


<style scoped>
  @import url("//unpkg.com/element-ui@2.4.8/lib/theme-chalk/index.css");

  .title {
    float: left;
  }
  .date {
    float: right;
  }
  .discuss-container {
    margin: auto;
    max-width: 100%;
    word-wrap: break-word;
  }

  .box-card {
    margin-left: 120px;
    margin-top: 10px;
    display: inline-block;
    min-width: 360px;
    max-width: 900px;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .text {
    max-width: 920px;
    margin: auto;
  }

  .write-discuss-container {
    border-top: 5px dot-dash darkgray;
    background: #eeeeee;
    margin-top: 10px;
    width: 100%;
    float: left;
  }

  h2 {
    padding-top: 10px;
    margin-left: 120px;
  }
</style>
