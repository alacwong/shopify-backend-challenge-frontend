import React from 'react';

import Gallery from 'react-photo-gallery';
import FadeIn from 'react-fade-in';

export default function PhotoGallery(props) {

    console.log(props)
    const photos = props.photos;

    return (
        <FadeIn delay={500}>
            {
                photos.length > 0 ?  <Gallery
                    photos={photos}
                    direction="column"
                    columns={window.innerWidth < 700 ? 1 : 3}
                /> : <p>No results</p>
            }
        </FadeIn>
    );
};