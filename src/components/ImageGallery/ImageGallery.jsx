import PropTypes from 'prop-types';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ items, openModal }) {
  return (
    <>
      {items.length > 0 && (
        <ul className={css.gallery}>
          {items.map(photo => (
            <li key={photo.id}>
              <ImageCard photo={photo} openModal={openModal} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ImageGallery.PropTypes = {
  items: PropTypes.object,
  openModal: PropTypes.func,
};
