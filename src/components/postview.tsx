import {type RouterOutputs} from '@/utils/api';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Image from 'next/image';
import Link from 'next/link';

dayjs.extend(relativeTime);

type PostWithUser = RouterOutputs['posts']['getAll'][number];
export const PostView = (props: PostWithUser) => {
  const {post, author} = props;
  return (
    <div key={post.id} className="flex gap-3 border-b border-slate-400 p-4">
      <Link href={`/@${author.username}`}>
        <Image
          src={author.profileImageUrl}
          alt={`@${author.username} profile picture`}
          className="h-14 w-14 rounded-full"
          width={56}
          height={56}
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex gap-1 text-slate-300">
          <Link href={`/@${author.username}`}>
            <span className="">{`@${author.username}`}</span>
          </Link>
          <Link href={`/post/${post.id}}`}>
            <span>{`· ${dayjs(post.createdAt).fromNow()}`}</span>
          </Link>
        </div>
        <Link href={`/post/${post.id}}`}>
          <span className="text-2xl">{post.content}</span>
        </Link>
      </div>
    </div>
  );
};
