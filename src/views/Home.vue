<template>
 <div>

 </div>
</template>

<script>
import { mapGetters } from 'vuex'

//  假设这里就是我们在vuex 的getter中定义的属性
const getters = {
  a: () => 1,
  b: () => 2,
  c: () => 3
}
//  这个对应的是 导入的mapGetters
//  该函数返回一个对象
function fn (keys) {
  const data = {}
  keys.forEach(key => {
    if (Object.prototype.hasOwnProperty.call(getters, key)) {
      data[key] = getters[key]
    }
  })
  return data
}

export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {

    }
  },
  // 在计算属性中。通过ES6的展开运算符，将不同的对象进行合并
  computed: {
    ...mapGetters(['test']),
    ...fn(['a', 'b', 'c'])
  },
  created () {

  },
  mounted () {
    console.log(this.test)
    console.log(this.a, this.b, this.c)
    console.log(this.d)
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped >

</style>
