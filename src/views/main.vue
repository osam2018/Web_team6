<template>
  <el-container>
    <el-header id="main_header__container">
      <navbar></navbar>
    </el-header>


    <el-container id="aside_main__container">
        <el-aside style="width:250px !important; height: 700px; position: relative; top: 20px;">
          <recent-posts v-bind:document="this.document" v-bind:config="this.config"></recent-posts>
        </el-aside>
        <el-container id="main__container">
          <el-main>
            <main-content v-on:document="getDocument" v-on:config="getConfig"></main-content>
          </el-main>

        </el-container>
    </el-container>


    <el-footer id="wiki-footer"><footer-component></footer-component></el-footer>


  </el-container>
</template>

<script>
  import navbar from './navbar.vue'
  import footerComponent from './footer-component.vue'
  import MainContent from './main-content.vue'
  import RecentPosts from './RecentPosts.vue'
    export default {
      name: "main.vue",
      methods: {
        getDocument(val) {
          this.document = val;
        },
        getConfig(val) {
          this.config = val;
        }
      },
      data() {
        return {
          config: {},
          document: {}
        }
      },
      components: {
        navbar: navbar,
        mainContent: MainContent,
        recentPosts: RecentPosts,
        footerComponent:footerComponent
      }
    }
</script>

<style>
  #main_header__container {
    padding: 0;
    background-color: #3E5F40;
  }

  #aside_main__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  #main__container {
    min-width: 650px;
    width: 950px;
  }

  #wiki-footer {
    padding: 0;
  }
</style>

<style scoped>
  .el-footer{
    height:0;
  }
</style>
