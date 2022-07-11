import classNames from 'classnames/bind';
import { useRef, useState } from 'react';
import Styles from './Informations.module.scss';

const cx = classNames.bind(Styles);

function Video({ data }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef();
  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return <video ref={videoRef} onClick={onVideoPress} className={cx('video-item')} src={data.video_url} loop />;
}

export default Video;
