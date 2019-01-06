<template>
    <el-form :model="form" :rules="rules" ref="form" style="margin-top: 1rem">
        <welcome :title1="'注册账号'"></welcome>
        <el-form-item prop="username">
            <el-input type="text" v-model="form.username" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="password">
            <el-input type="password" v-model="form.password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="repassword">
            <el-input type="password" v-model="form.repassword" auto-complete="off" placeholder="再次输入密码"></el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;background:  #f34541;border: none" v-loading="loading"
                       @click="add('form')">注册
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
        isLoading: false,
        form: {
          username: '',
          password: '',
          repassword: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名' }
          ],
          password: [
            { required: true, message: '请输入用户密码' }
          ],
          repassword: [
            { required: true, message: '请再次输入密码' }
          ]
        }
      }
    },
    methods: {
      add(form) {
        if (this.form.password != this.form.repassword) {
          _g.toastMsg('warning', '两次秘密输入不一致')
          return
        }
        // console.log('res = ', _g.j2s(this.form))
        this.$refs.form.validate((pass) => {
          if (pass) {
            this.loading = !this.loading
            let data = {}
            data.username = this.form.username
            data.password = this.form.password
            axios.defaults.headers.Authorization = ''
            axios.post('users/', data).then((res) => {
              this.loading = !this.loading
              _g.toastMsg('success', '注册成功')
              _g.clearVuex('setUsers')
              setTimeout(() => {
                this.goback()
              }, 1500)
            }).catch(error => {
              this.loading = !this.loading //  axios 配置里必须要 return Promise.reject(error.response.data)
              console.log(error)
              _g.toastMsg('error', '用户名已存在')
            })
          }
        })
      }
    },
    created() {
      console.log(Lockr.get('token'))
    },
    mounted() {
      window.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.add('form')
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
