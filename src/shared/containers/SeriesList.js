// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { SeriesT } from '../store/app/types';
import Serie from '../components/Serie';
import styles from './styles.css';

type PropsT = {
    serie: SeriesT[],
};

class SeriesList extends React.Component {
    render() {
        const { series } = this.props;
        if (!series || series.length === 0) {
            return <div>No series available</div>;
        }
        return (
            <div className={styles.seriesPage}>
                <div className={styles.seriesContent}>
                    {series.map((serie, index) => (
                        <Serie key={index} serie={serie} />
                    ))}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { series: state.app.series };
};

export default connect(
    mapStateToProps,
    null
)(SeriesList);
