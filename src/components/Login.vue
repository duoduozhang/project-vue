<template>
 <div>
   <h1>登录</h1>
   <ul>
     <li>
       <label for="uname">用户名：</label>
       <input type="text" id="uname" v-model='username'>
     </li>
     <li>
       <label for="pw">密码：</label>
       <input type="text" id="pw" v-model='password'>
     </li>
     <li>
       <input type="button" value="提交" @click='log'>
     </li>
   </ul>
 </div>
</template>
<script>
import {loginn} from '../api/api.js'
export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    log: function () {
      let params = {
        username: this.username,
        password: this.password
      }
      loginn(params).then(res => {
        localStorage.setItem('mytoken', res.data.token)
        console.log(res)
        if (res.meta.status === 200) {
          this.$router.push({name: 'home'})
        } else {
          console.log('用户名或密码错误')
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
