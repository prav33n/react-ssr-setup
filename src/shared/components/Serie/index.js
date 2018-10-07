// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { getImageUrlFromTemplate } from '../../utils';
import styles from './Serie.css';
import { SeriesT } from '../../store/app/types';
import { setSelectedSeries } from '../../store/app/actions';

type PropsT = {
    serie: SeriesT,
    setSelectedSeries: (SeriesT) => {},
    match: {
        params: Object,
        isExact: boolean,
        path: string,
        url: string,
    },
};

class Serie extends React.Component<PropsT> {
    setSelectedSeries = () => {
        const { setSelectedSeries, serie } = this.props;
        setSelectedSeries(serie);
    };

    render() {
        const { serie, match } = this.props;

        return (
            <Link
                to={`${match.path}/${serie.publicPath}`}
                className={styles.serieContainer}
                onClick={this.setSelectedSeries}
            >
                <img
                    src={getImageUrlFromTemplate(serie.coverImage)}
                    className={styles.serieBackground}
                />
                <div className={styles.serieSeasons}>{serie.seasons}</div>
            </Link>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSelectedSeries: (payload) => dispatch(setSelectedSeries(payload)),
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Serie)
);
