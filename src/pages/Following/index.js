import Content from '~/layouts/components/Content';
import images from '~/assets/images';
import videos from '~/assets/video';

const datas = [
  {
    id: 1,
    fullName: 'Nicktran',
    avt: `${images.nicktran}`,
    userName: 'nicktran',
    content: 'thách đấu warren',
    like_qty: 0,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    following: true,
    video_url: `${videos.nicktran}`,
  },
  {
    id: 2,
    fullName: 'Thiên',
    avt: `${images.violet}`,
    userName: 'violet.tnl',
    content: 'video đẹp',
    like_qty: 100,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    following: true,
    video_url: `${videos.violet}`,
  },
  {
    id: 3,
    fullName: 'Wino',
    avt: `${images.wino}`,
    userName: 'wino99',
    content: 'deephouse',
    like_qty: 0,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    following: true,
    video_url: `${videos.wino}`,
  },
  {
    id: 4,
    fullName: '16 memorise',
    avt: `${images.memories}`,
    userName: '16 memorise',
    content: 'khoảnh khắc đẹp',
    like_qty: 1,
    liked: 1,
    share_qty: 0,
    cmt_qty: 0,
    following: true,
    video_url: `${videos.memories}`,
  },
  {
    id: 5,
    fullName: 'Mexe',
    avt: `${images.mexe}`,
    userName: 'Mexe',
    content: 'xe đẹp',
    like_qty: 0,
    liked: 0,
    share_qty: 0,
    cmt_qty: 0,
    following: true,
    video_url: `${videos.mexe}`,
  },
];

function Following() {
  return (
    <div>
      {datas.map((data, index) => (
        <Content key={data.id} data={data} index={index} />
      ))}
    </div>
  );
}

export default Following;
