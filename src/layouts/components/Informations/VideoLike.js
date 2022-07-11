import classNames from 'classnames/bind';
import Styles from './Informations.module.scss';

import Masonry from 'react-masonry-component';

import Video from './Video';

const Videos = [
  {
    video_url: '/static/media/tải xuống.eedd7ebbf637bc295293.mp4',
  },
  {
    video_url: '/static/media/tải xuống (1).b50207bcb5f42a7deee7.mp4',
  },
  {
    video_url: '/static/media/tải xuống (2).b4fd7d9a9ef79dc789e1.mp4',
  },
  {
    video_url: '/static/media/tải xuống (4).779c27a4fe154bdd04f8.mp4',
  },
  {
    video_url: '/static/media/tải xuống (5).77476a7d400efe2dbf74.mp4',
  },
];
const cx = classNames.bind(Styles);
const masonryOptions = {
  fitWidth: false,
  columnWidth: 300,
  gutter: 30,
  itemSelector: '.video-item',
};

function VideoLike() {
  return (
    <div className={cx('wrapper-video-like')}>
      <Masonry
        className={cx('video-list')}
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {Videos.map((video, index) => (
          <Video key={index} data={video} />
        ))}
      </Masonry>
    </div>
  );
}

export default VideoLike;
