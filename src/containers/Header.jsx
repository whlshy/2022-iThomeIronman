import { connect } from 'react-redux'
import Header from '../components/Header'
import { addVideo } from '../action'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {
    addVideo,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)