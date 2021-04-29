import React from 'react';

import Gallery from 'react-photo-gallery';
import FadeIn from 'react-fade-in';

export default function PhotoGallery(props) {

    const photos = props.photos;
    const loading = props.loading;

    return (
        <FadeIn delay={500}>
            {
                photos && photos.length > 0 ? !loading && <Gallery
                    photos={photos}
                    direction="column"
                    columns={window.innerWidth < 700 ? 1 : 3}
                /> : !loading && <h1 style={{margin: 'auto', textAlign: 'center'}}>No results</h1>
            }
            {
                loading && <p style={{margin: 'auto', textAlign: 'center'}}>loading...</p>
            }
        </FadeIn>
    );
};