import React from 'react';
import { connect } from 'react-redux';
import { init } from 'actions';
import List from 'components/List';
import { selectList, selectLoading } from './selectors';

const mapStateToProps = state => ({
    list: selectList(state),
    loading: selectLoading(state)
});

const mapDispatchToProps = dispatch => ({
    onInit: () => dispatch(init())
});

export class App extends React.PureComponent {
    componentDidMount() {
        this.props.onInit();
    };
    
    render() {
        const { list, loading } = this.props;

        return (
            <List items={ list } loading={ loading } />
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(App));
