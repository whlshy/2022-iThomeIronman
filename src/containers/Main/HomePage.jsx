import { connect } from 'react-redux'
// 把component引入
import HomePage from '../../components/Main/HomePage'
// 把藥使用的action引入
import { setData } from '../../action'

const mapStateToProps = (state) => ({
  // 取出reducer內的state
  home: state.home
})

const mapDispatchToProps = {
  // 取出action
  setData,
}

// 整合reducer與action進入props
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)