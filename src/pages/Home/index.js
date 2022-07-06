import { useEffect, useRef } from 'react';
import Content from '~/layouts/components/Content';
import classNames from 'classnames/bind';
import Styles from './Home.module.scss';

const cx = classNames.bind(Styles);

const datas = [
  {
    id: 1,
    fullName: 'Trương Đình Vinh',
    avt: 'https://files.fullstack.edu.vn/f8-prod/user_photos/214474/62b117e56e1c9.jpg',
    userName: 'Vinhss00',
    content: 'vinh sô up tiktok nè',
    like_qty: 0,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    video_url: '/static/media/tải xuống.eedd7ebbf637bc295293.mp4',
  },
  {
    id: 2,
    fullName: 'Minh Nguyệt',
    avt: 'https://scontent.fdad1-2.fna.fbcdn.net/v/t39.30808-6/278265548_3206709282934097_3997547185734587438_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wsVu8IwkLt8AX-NZio1&_nc_ht=scontent.fdad1-2.fna&oh=00_AT-9ByaYcPt5o8qo-WyOUkqzJdZ6exeYuCK6GTZzON54Uw&oe=62C80133',
    userName: 'minhnguyet123',
    content: 'lên lên lên',
    like_qty: 100,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    video_url: '/static/media/tải xuống (1).b50207bcb5f42a7deee7.mp4',
  },
  {
    id: 3,
    fullName: 'Phan Thanh Tùng',
    avt: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-6/273494229_2180670685419975_7591373662244644279_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=VEobV2-pQ8wAX_YsLMV&_nc_ht=scontent.fdad1-1.fna&oh=00_AT9cupY0jBTL7YXWW8RFSo3hmMuaI2S7-oDsmlqwLv-XGg&oe=62C9566B',
    userName: 'TungKonn00',
    content: 'Tùng kon up tiktok nè',
    like_qty: 0,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    video_url: '/static/media/tải xuống (2).b4fd7d9a9ef79dc789e1.mp4',
  },
  {
    id: 4,
    fullName: 'Nguyễn Quang Hoàng Vũ',
    avt: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t39.30808-1/262337823_2050654655102914_8530759554740100419_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=wLFw4XGQOt8AX9US7ED&_nc_ht=scontent.fdad1-1.fna&oh=00_AT-Obfm-wSY4fAQup1HCmx5RQiUqAs0B8JsI7Shjxr_sBw&oe=62C9DFEF',
    userName: 'nakagi',
    content: 'Zũ óc chó up tiktok nè',
    like_qty: 1,
    liked: 1,
    share_qty: 0,
    cmt_qty: 0,
    video_url: '/static/media/tải xuống (4).779c27a4fe154bdd04f8.mp4',
  },
  {
    id: 5,
    fullName: 'Phạm Tấn Trung',
    avt: 'https://scontent.fdad1-1.fna.fbcdn.net/v/t1.6435-1/90527624_868606140320091_7388966057051947008_n.jpg?stp=dst-jpg_p200x200&_nc_cat=109&ccb=1-7&_nc_sid=7206a8&_nc_ohc=0aFmGZvzJ3IAX9SZjbQ&tn=_WVTBpb_C-MfIIt8&_nc_ht=scontent.fdad1-1.fna&oh=00_AT9bpXLusUNVFt-a_pbBR_j4wFQcvuG1FF-Vy7BNsuQMwQ&oe=62E8990A',
    userName: 'trung',
    content: 'Trung háng rộng up tiktok nè',
    like_qty: 0,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    video_url: '/static/media/tải xuống (5).77476a7d400efe2dbf74.mp4',
  },
];

function Home() {
  const contentRef = useRef();
  useEffect(() => {
    contentRef.current.focus();
  }, []);
  return (
    <div ref={contentRef} className={cx('wrapper')}>
      {datas.map((data, index) => (
        <Content key={data.id} data={data} index={index} />
      ))}
    </div>
  );
}

export default Home;
