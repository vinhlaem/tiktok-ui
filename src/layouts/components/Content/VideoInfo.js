import Image from '~/components/Image';
import classNames from 'classnames/bind';
import Styles from './Content.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faMusic } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import { HeartIcon, CommentIcon, ShareIcon } from '~/components/Icons';

const cx = classNames.bind(Styles);

function VideoInfo() {
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
        <div>
          <video
            controls
            className={cx('video')}
            src="https://v16-webapp.tiktok.com/ec5aa80a85a97e340f37e48fb2fb6544/62c2be57/video/tos/alisg/tos-alisg-pve-0037/f8868ea374684752a7ce4b51288453c6/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=6646&bt=3323&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZFA46we2N9-aml7Gb&mime_type=video_mp4&qs=0&rc=aTg4OmQ1N2ZpOTk7Z2RoM0BpM3JsNDo6Znl0ZTMzODgzNEBgYi82Li4zX2MxMS4zLjEzYSNkcHFxcjRfcS1gLS1kLy1zcw%3D%3D&l=202207040417410102440750482601C812"
            loop
          />
        </div>
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
