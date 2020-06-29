import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuAndNavVisible', 'settingVisible', 'defaultFontSize', 'currentBook'])
  },
  methods: {
    ...mapActions(['setFileName', 'setMenuAndNavVisible', 'setSettingVisible', 'setDefaultFontSize', 'setCurrentBook'])
  }
}
