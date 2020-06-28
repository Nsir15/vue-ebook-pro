<template>
 <div>

 </div>
</template>

<script>
import { mapGetters } from 'vuex'

const getters = {
  a: () => 1,
  b: () => 2,
  c: () => 3
}
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
