import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { HeartIcon, CommentIcon, ShareIcon } from '~/components/Icons';
import { useRef, useState } from 'react';
import videos from '~/assets/video';

const cx = classNames.bind(Styles);

function VideoInfo({ data }) {
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
  console.log(videos.video2);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('video-info')}>
        <div className={cx('user-info')}>
          <Link to={`/@${data.userName}`}>
            <Image src={data.avt} alt={data.userName} className={cx('user-avatar')} />
          </Link>
          <div>
            <Link className={cx('info')} to={'/@vinhss00'}>
              <h4 className={cx('name')}>
                <span>{data.fullName}</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
              </h4>
              <span className={cx('username')}>{data.userName}</span>
            </Link>
            <div className={cx('decription')}>
              <span className={cx('content-post')}>{data.content}</span>
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
        <video ref={videoRef} onClick={onVideoPress} className={cx('video')} src={data.video_url} loop />
        <div className={cx('action')}>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <HeartIcon />
            </span>
            <span className={cx('count')}>{data.like_qty}</span>
          </button>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <CommentIcon />
            </span>
            <span className={cx('count')}>{data.cmt_qty}</span>
          </button>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <ShareIcon />
            </span>
            <span className={cx('count')}>{data.share_qty}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
