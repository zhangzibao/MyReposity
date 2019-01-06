<template>
    <body>
    <welcome :title1="'设置'"></welcome>
    <ul class="inforList">
        <li v-for="item in thelist">
            <router-link :to="item.path" tag="a" class="isNext">
                <span>
                    {{item.title}}
                </span>
            </router-link>
        </li>
    </ul>
    <el-button type="primary" style="width:100%;background: #FF0000;border: none;margin-top: .3rem;" @click="logout()" v-if="isshow">
        退出登录
    </el-button>
    </body>
</template>

<script>
  import http from '../../assets/js/http'
  import formMixin from '../../assets/js/form_com'
  import welcome from '../common/back-title'

  export default {
    data() {
      return {
        thelist: [{ title: '账户与安全', path: '' },
          { title: '通用', path: '' },
          { title: '关于滑稽', path: '' }
        ],
        isshow: false
      }
    },
    methods: {
      logout() {
        this.$confirm('确认退出吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(() => {
          _g.openGlobalLoading()
          Lockr.rm('token')
          Lockr.rm('userInfo')
          window.axios.defaults.headers.Authorization = ''
          Cookies.remove('rememberPwd')
          _g.toastMsg('success', '退出成功')
          setTimeout(() => {
            router.replace('/login')
          }, 1500)
        })
      }
    },
    created() {
      let authKey = Lockr.get('token')

      if (authKey) {
        this.isshow = true
      } else {
        this.username = false
      }
    },
    mounted() {

    },
    components: {
      welcome
    },
    watch: {
      '$route'(to, from) {
        this.$router.go(0)
      }
    },
    mixins: [http, formMixin]
  }
</script>
<style lang="less" scoped>
    .inforList {
        margin-top: 1rem;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        li {
            min-height: 1rem;
            line-height: 1rem;
            position: relative;
            background: white;
            padding: 0 3%;
            margin: .02rem 0;
            a {
                display: block;
            }
            .isNext em {
                width: 10%;
                text-align: center;
                height: 0.8rem;
                overflow: hidden;
                display: block;
                float: left;
                margin-right: 3%;

            }
            span {
                color: #323232;
                font-size: 0.34rem;
            }
        }

    }
</style>
