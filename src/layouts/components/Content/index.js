import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  HeartActiveIcon,
  EmbedIcon,
  ShareLinkIcon,
  FacebookIcon,
  WhatsAppIcon,
  CopyLinkIcon,
  ShareArrowIcon,
} from '~/components/Icons';
import { useCallback, useRef, useState } from 'react';

import videos from '~/assets/video';
import Menu from '~/components/Poper/Menu';
import CardProfile from '~/components/Poper/CardProfile';

const cx = classNames.bind(Styles);

const userMenu = [
  {
    icon: <EmbedIcon />,
    title: 'Nhúng',
    to: '/@vinhsooo',
  },
  {
    icon: <ShareLinkIcon />,
    title: 'Gửi đến bạn bè',
    to: '/coin',
  },
  {
    icon: <FacebookIcon />,
    title: 'Chia sẻ với Facebook',
    to: '/settings',
  },
  {
    icon: <WhatsAppIcon />,
    title: 'Chia sẻ với Whatsapp',
    to: '/log out',
  },
  {
    icon: <CopyLinkIcon />,
    title: 'Sao chép liên kết',
    to: '/log out',
  },
  {
    icon: <ShareArrowIcon />,
    title: '',
    href: '#',
    center: true,
  },
];

function VideoInfo({ data, index }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const [datavideo, setDataVideo] = useState(data);

  const handleLikeVideo = useCallback(() => {
    if (datavideo.liked === 0) {
      const a = {
        ...datavideo,
        like_qty: (datavideo.like_qty += 1),
        liked: 1,
      };
      setDataVideo(a);
      // setDataVideo((datavideo.liked = 1));
    } else {
      const a = {
        ...datavideo,
        like_qty: (datavideo.like_qty -= 1),
        liked: 0,
      };
      setDataVideo(a);
      // setDataVideo((datavideo.like_qty -= 1));
      // setDataVideo((datavideo.liked = 0));
    }
  }, [datavideo]);

  const onVideoPress = () => {
    if (playing) {
      console.log(videoRef);
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
          <CardProfile>
            <Link to={`/@${datavideo.userName}`}>
              <Image src={datavideo.avt} alt={datavideo.userName} className={cx('user-avatar')} />
            </Link>
          </CardProfile>
          <div>
            <Link className={cx('info')} to={'/@vinhss00'}>
              <h4 className={cx('name')}>
                <span>{datavideo.fullName}</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
              </h4>
              <span className={cx('username')}>{datavideo.userName}</span>
            </Link>
            <div className={cx('decription')}>
              <span className={cx('content-post')}>{datavideo.content}</span>
              <div className={cx('info-song')}>
                <FontAwesomeIcon icon={faMusic} />
                <span className={cx('name-song')}>bài hát đang phát</span>
              </div>
            </div>
          </div>
        </div>
        {!datavideo.following ? (
          <Button className={cx('btn')} outline>
            Following
          </Button>
        ) : (
          <Button className={cx('follow')}>Đang Follow</Button>
        )}
      </div>
      <div className={cx('container')}>
        <video ref={videoRef} onClick={onVideoPress} className={cx('video')} src={datavideo.video_url} loop />
        <div className={cx('action')}>
          <button onClick={() => handleLikeVideo(index)} className={cx('reaction')}>
            <span className={cx('icon')}>{datavideo.liked === 0 ? <HeartIcon /> : <HeartActiveIcon />}</span>
            <span className={cx('count')}>{datavideo.like_qty}</span>
          </button>
          <button className={cx('reaction')}>
            <span className={cx('icon')}>
              <CommentIcon />
            </span>
            <span className={cx('count')}>{datavideo.cmt_qty}</span>
          </button>

          <button className={cx('reaction')}>
            <div>
              <Menu items={userMenu} className={cx('menu')}>
                <span className={cx('icon')}>
                  <ShareIcon />
                </span>
              </Menu>
            </div>
            <span className={cx('count')}>{datavideo.share_qty}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default VideoInfo;
