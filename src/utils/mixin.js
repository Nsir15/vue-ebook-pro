import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters(['fileName', 'menuAndNavVisible', 'settingVisible', 'defaultFontSize'])
  },
  methods: {
    ...mapActions(['setFileName', 'setMenuAndNavVisible', 'setSettingVisible', 'setDefaultFontSize'])
  }
}
