<template>
    <el-form :model="form" :rules="rules2" ref="form" style="margin-top: 1rem">
        <welcome :title1="'密码登录'" :title2= "'没有账号？立即注册'" :path2="'/register'"></welcome>
        <el-form-item prop="username">
            <el-input type="text" v-model="form.username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox v-model="checked" style="margin:0px 0px 35px 0px;">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" v-loading="loading"
                       @click.native.prevent="handleSubmit2('form')">登录
            </el-button>
        </el-form-item>
    </el-form>
</template>

<script>
  import http from '../../assets/js/http'
  import formMixin from '../../assets/js/form_com'
  import welcome from '../common/back-title'

  export default {
    data() {
      return {
        title: '',
        loading: false,
        form: {
          username: '',
          password: ''
        },
        rules2: {
          username: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        },
        checked: false
      }
    },
    methods: {
      handleSubmit2(form) {
        if (this.loading) return
        this.$refs.form.validate((valid) => {
          if (valid) {
            this.loading = !this.loading
            let data = {}
            data.username = this.form.username
            data.password = this.form.password
            if (this.checked) {
              data.isRemember = 1
            } else {
              data.isRemember = 0
            }
            axios.post('login/', data).then((res) => {
              if (this.checked) {
                Cookies.set('rememberPwd', true, { expires: 1 })
              }
              this.loading = !this.loading
              this.resetuserData(res)
              _g.toastMsg('success', '登录成功')
            }).catch(error => {          //  axios 配置里必须要 return Promise.reject(error.response.data)
              this.loading = !this.loading
              console.log(error)
              _g.toastMsg('error', '用户名或密码错误')
            })
          } else {
            return false
          }
        })
      }
    },
    created() {
    },
    mounted() {
      window.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.handleSubmit2('form')
        }
      })
    },
    components: {
      welcome
    },
    mixins: [http, formMixin]
  }
</script>
<style lang="less" scoped>
</style>
