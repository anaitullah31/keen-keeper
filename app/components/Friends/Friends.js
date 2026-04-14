import FriendCard from "../FriendCard/FriendCard";

const Friends = async () => {
  const res = await fetch("http://localhost:3000/friends.json");
  const friends = await res.json();

  return (
    <section className="px-4 mb-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl border-t border-gray-200 pt-6 sm:pt-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          Your Friends
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;
