import { connect } from 'react-redux'
import HomePage from '../../components/Main/HomePage'
import { setData, getData } from '../../action'

const mapStateToProps = (state) => ({
  home: state.home
})

const mapDispatchToProps = {
  setData,
  getData,
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)