// @flow
import * as React from 'react';
import { connect } from 'react-redux';

import { getImageUrlFromTemplate } from '../../utils';
import { SeriesT } from '../../store/app/types';

import styles from './serieInfo.css';

type PropsT = {
    selectedSeries: SeriesT,
};

class SerieInfo extends React.Component<PropsT> {
    render() {
        const { selectedSeries } = this.props;

        return (
            <div className={styles.serieContainer} onClick={this.setSelectedSeries}>
                <div className={styles.serieBackgroundContainer}>
                    <img
                        src={getImageUrlFromTemplate(selectedSeries.coverImage, 960, 540)}
                        className={styles.serieBackground}
                    />
                    <div className={styles.serieBackgroundOverlay} />
                </div>
                <div className={styles.serieInfoContainer}>
                    <div className={styles.serieTitle}>{selectedSeries.title}</div>
                    <div className={styles.serieSynopsis}>{selectedSeries.synopsis}</div>
                </div>
            </div>
        );
    }
}

export default SerieInfo;
