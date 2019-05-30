import React from 'react';
import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import List from 'components/List';

import { init, setRate, startLoadingRate, endLoadingRate } from 'actions';
import { selectList, selectLoading } from './selectors';

const mapStateToProps = state => ({
    list: selectList(state),
    loading: selectLoading(state)
})

const mapDispatchToProps = dispatch => ({
    onInit: () => dispatch(init()),
    setRate: (id, rate) => dispatch(setRate({ id, rate })),
    startLoadingRate: () => dispatch(startLoadingRate()),
    endLoadingRate: () => dispatch(endLoadingRate())
});

export class App extends React.PureComponent {
    state = {
        loadingRate: false
    };

    componentDidMount() {
        this.props.onInit();
    };

    onRateChange = (id, value) => 
        this.props.setRate(id, value)
    
    onLoadingRateChange = e => {
        const loadingRate = e.target.checked;

        loadingRate ? 
            this.props.startLoadingRate() :
            this.props.endLoadingRate();

        this.setState({ loadingRate })
    }

    render() {
        const { list, loading } = this.props;
        const { loadingRate } = this.state

        return (
            <Container maxWidth='sm'>
                <FormControlLabel 
                    control={<Switch checked={ loadingRate } onChange={ this.onLoadingRateChange } />}
                    labelPlacement='start'
                    label='Load new rate from async'
                />
                <List items={ list } loading={ loading } onItemRateChange={ this.onRateChange } />
            </Container>
        )
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(React.memo(App));
