import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

function Image({ src, alt, className, fallback: customFallbck = images.noImage, ...props }, ref) {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallbck);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallback || src}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

export default forwardRef(Image);
