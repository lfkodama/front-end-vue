<template>
  <h1>Home Page</h1>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  props: {
    msg: String
  },
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>