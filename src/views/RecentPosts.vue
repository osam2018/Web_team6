<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><b>최근 변경</b></span>
      <!--<el-button style="float: right; padding: 3px 0" type="text">Operation button</el-button>-->
    </div>
    <div v-for="item in items" class="text item">
      <a v-on:click="itemClick(item.title)">{{item.title}}</a>
    </div>
  </el-card>

</template>

<script>
  import Vue from 'vue';
  import Element from 'element-ui';
  Vue.use(Element);

    export default {
        data() {
          return {
          items: [
            {title: 'mnd'},
            {title: 'mndcert'},
            {title: 'PRC-999K'},
            {title: '국방위키(가칭)：대문'},
            {title: '야전교범'}
            ]
          }
        },
      props: {
          document: Object,
        config: Object
      },
      methods: {
          test: function() {
              this.$router.replace({ name: "read-document", params: {id:"123"}, query: {q1: "q1"} })
          },
        itemClick: function(title) {
          this.config.originTitle = title;
          history.replaceState( {} , '', '/w/'+title );
        }
      }
    }
</script>

<style scoped>
  a {
    text-decoration: none;
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

  .box-card {
    width: 99%;
    height: 99%;
  }
</style>
