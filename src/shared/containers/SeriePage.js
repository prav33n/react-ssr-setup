// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { SeriesT } from '../store/app/types';
import SerieInfo from '../components/SerieInfo';
import { getSeriesData } from '../api/api';

type PropsT = {
    serieDetails: SeriesT[],
};

class SeriePage extends React.Component {
    state = {
        loading: this.props.selectedSeries ? false : true,
        selectedSeries: this.props.selectedSeries || null,
    };

    render() {
        const { selectedSeries, loading } = this.state;
        if (loading) {
            return <div>loading...</div>;
        }
        return <SerieInfo selectedSeries={selectedSeries} />;
    }
}

const mapStateToProps = (state) => {
    return { selectedSeries: state.app.selectedSeries };
};

export default withRouter(
    connect(
        mapStateToProps,
        null
    )(SeriePage)
);
