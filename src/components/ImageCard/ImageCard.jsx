import PropTypes from 'prop-types';

import css from './ImageCard.module.css';
export default function ImageCard({ photo, openModal }) {
  return (
    <>
      <div className={css.imgWrap} onClick={() => openModal(photo)}>
        <img
          className={css.img}
          src={photo.urls.small}
          alt={photo.alt_description}
          width="340"
          height="200"
        />
      </div>
    </>
  );
}

ImageCard.PropTypes = {
  photo: PropTypes.object,
  openModal: PropTypes.func,
};
