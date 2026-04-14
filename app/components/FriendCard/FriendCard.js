import Image from "next/image";
import Link from "next/link";

const FriendCard = ({ friend }) => {
  const { id, name, picture, status, tags, days_since_contact } = friend;
  return (
    <Link href={`/friends/${id}`}>
      <div className="cursor-pointer rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src={picture}
            width={50}
            height={50}
            alt={name}
            className="h-20 w-20 rounded-full object-cover"
          />
        </div>

        {/* Name */}
        <h3 className="mt-4 text-lg font-semibold text-slate-800">{name}</h3>

        {/* Days */}
        <p className="mt-1 text-sm text-slate-500">{days_since_contact}d ago</p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Status */}
        {/* <div className="mt-3 flex justify-center">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              statusStyles[status]
            }`}
          >
            {status}
          </span>
        </div> */}
      </div>
    </Link>
  );
};

export default FriendCard;
