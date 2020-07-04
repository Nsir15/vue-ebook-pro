// 之前结算px转rem是用的375 为设计稿，px2rem的mixin中用的radio 是375 / 10 , HTML的根字体大小用的是小于50 * 10 = 500
// 所以这里要进行缩放以适应不同的屏幕尺寸。
// 不然导致scroll 计算的高度不准确，只能在375屏幕准确。
export function realPx (px) {
  const deviceWidth = window.innerWidth < 500 ? window.innerWidth : 500
  return px * (deviceWidth / 375)
}
