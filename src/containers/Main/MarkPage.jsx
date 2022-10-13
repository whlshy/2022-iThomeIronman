import { connect } from 'react-redux'
import MarkPage from '../../components/Main/MarkPage'
import { setMark } from '../../action'

const mapStateToProps = (state) => ({
    mark: state.mark
})

const mapDispatchToProps = {
    setMark,
}

export default connect(mapStateToProps, mapDispatchToProps)(MarkPage)