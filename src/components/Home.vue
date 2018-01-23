<template>
  <h1>主页</h1>
</template>
<script type="text/javascript">
import {testData} from '../api/api.js'
export default {
  data () {
    return {}
  },
  mounted () {
    testData({
      query: '',
      pagenum: 1,
      pagesize: 10
    }).then(res => {
      console.log(res)
    })
  }
}
</script>
<style>

</style>
