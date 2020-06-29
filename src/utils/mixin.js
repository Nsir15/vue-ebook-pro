import { mapGetters, mapActions } from 'vuex'

export const ebookMixin = {
  computed: {
    ...mapGetters([
      'fileName',
      'menuAndNavVisible',
      'settingVisible',
      'defaultFontSize',
      'currentBook',
      'defaultFontFamily',
      'fontFamilyVisible'
    ])
  },
  methods: {
    ...mapActions([
      'setFileName',
      'setMenuAndNavVisible',
      'setSettingVisible',
      'setDefaultFontSize',
      'setCurrentBook',
      'setDefaultFontFamily',
      'setFontFamilyVisible'

    ])
  }
}
