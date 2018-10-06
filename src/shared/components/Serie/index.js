// @flow
import * as React from 'react';
import { getImageUrlFromTemplate } from '../../utils';
import styles from './Serie.css';
import { SeriesT } from '../../store/app/types';
import { setSelectedSeries } from '../../store/app/actions';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';

type PropsT = {
    serie: SeriesT,
};

class Serie extends React.Component<PropsT> {
    setSelectedSeries = () => {
        const { setSelectedSeries, serie, navigateTo, match } = this.props;
        setSelectedSeries(serie);
        navigateTo(`${match.path}/${serie.publicPath}`);
    };

    render() {
        const { serie } = this.props;
        return (
            <div className={styles.serieContainer} onClick={this.setSelectedSeries}>
                <img
                    src={getImageUrlFromTemplate(serie.coverImage)}
                    className={styles.serieBackground}
                />
                <div className={styles.serieSeasons}>{serie.seasons}</div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setSelectedSeries: (payload) => dispatch(setSelectedSeries(payload)),
    navigateTo: (route) => dispatch(push(route)),
});

export default withRouter(
    connect(
        null,
        mapDispatchToProps
    )(Serie)
);
