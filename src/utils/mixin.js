import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuAndNavVisible'])
  },
  methods: {
    ...mapActions(['setFileName', 'setMenuAndNavVisible'])
  }
}
