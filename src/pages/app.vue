<template>
  <div class="root-div">
    <router-view/>
  </div>
</template>

<script>
import 'postcss-css-reset/src/styles/reset.mobile.css'
import 'src/assets/css/base.css'

export default {
  name: 'app'
}
</script>

<style>
html, body {
  background-color: #fafafa;
  -webkit-overflow-scrolling: touch;
  user-select: none;
}
.root-div {
  height: 100%;
  background: #fafafa;
}
</style>
