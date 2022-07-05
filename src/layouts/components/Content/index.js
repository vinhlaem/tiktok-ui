import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { HeartIcon, CommentIcon, ShareIcon } from '~/components/Icons';
import { useRef, useState } from 'react';
import video from '~/assets/video/tải xuống.mp4';

const cx = classNames.bind(Styles);

function VideoInfo() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('video-info')}>
        <div className={cx('user-info')}>
          <Link to={'/@vinhss00'}>
            <Image
              src="https://files.fullstack.edu.vn/f8-prod/user_photos/214474/62b117e56e1c9.jpg"
              alt="Vinhss00"
              className={cx('user-avatar')}
            />
          </Link>
          <div>
            <Link className={cx('info')} to={'/@vinhss00'}>
              <h4 className={cx('name')}>
                <span>Vinhss00</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
              </h4>
              <span className={cx('username')}>Vinhss00</span>
            </Link>
            <div className={cx('decription')}>
              <span className={cx('content-post')}>vinh sô up tiktok nè</span>
              <div>
                <FontAwesomeIcon icon={faMusic} />
                <span className={cx('info-song')}>bài hát đang phát</span>
              </div>
            </div>
          </div>
        </div>
        <Button className={cx('btn')} outline>
          Following
        </Button>
      </div>
      <div className={cx('container')}>
        <video ref={videoRef} onClick={onVideoPress} className={cx('video')} src={video} loop />
        <div className={cx('action')}>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <HeartIcon />
            </span>
            <span className={cx('count')}>100k</span>
          </button>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <CommentIcon />
            </span>
            <span className={cx('count')}>10k</span>
          </button>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <ShareIcon />
            </span>
            <span className={cx('count')}>13,4k</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
