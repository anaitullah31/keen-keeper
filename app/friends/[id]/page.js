import Image from "next/image";
import {
  LuBell,
  LuArchive,
  LuTrash2,
  LuPhone,
  LuMessageSquare,
  LuVideo,
  LuHistory,
} from "react-icons/lu";

const FriendsDetails = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://keen-keeper-silk.vercel.app/friends.json");
  const data = await res.json();
  const friendsDetails = data.find((friend) => friend.id === Number(id));
  const {
    name,
    picture,
    days_since_contact,
    goal,
    next_due_date,
    tags,
    bio,
    preferred = "email",
  } = friendsDetails;

  return (
    <section className="bg-[#f6f7f9] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="flex justify-center">
                <Image
                  src={picture}
                  alt={name}
                  width={88}
                  height={88}
                  className="h-22 w-22 rounded-full object-cover"
                />
              </div>

              <h1 className="mt-4 text-2xl font-bold text-slate-800">{name}</h1>

              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium uppercase text-green-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-4 text-sm italic text-slate-500">
                {" "}
                {'"'}
                {bio}
                {'"'}
              </p>

              <p className="mt-3 text-xs text-slate-400">
                Preferred: <span className="capitalize">{preferred}</span>
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-50">
                <LuBell className="text-base" />
                Snooze 2 Weeks
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-gray-50">
                <LuArchive className="text-base" />
                Archive
              </button>

              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-red-500 shadow-sm transition hover:bg-red-50">
                <LuTrash2 className="text-base" />
                Delete
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Top Stats */}
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-[#245b4b]">
                  {days_since_contact}
                </h2>
                <p className="mt-2 text-sm text-slate-500">
                  Days Since Contact
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-[#245b4b]">{goal}</h2>
                <p className="mt-2 text-sm text-slate-500">Goal (Days)</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-5 text-center shadow-sm">
                <h2 className="text-3xl font-bold text-[#245b4b]">
                  {next_due_date}
                </h2>
                <p className="mt-2 text-sm text-slate-500">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#245b4b]">
                    Relationship Goal
                  </h3>
                  <p className="mt-3 text-slate-500">
                    Connect every{" "}
                    <span className="font-semibold text-slate-800">
                      {goal} days
                    </span>
                  </p>
                </div>

                <button className="rounded-md border border-gray-200 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-gray-50">
                  Edit
                </button>
              </div>
            </div>

            {/* Quick Check-In */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <h3 className="text-lg font-semibold text-[#245b4b]">
                Quick Check-In
              </h3>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <button className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-[#f8fafc] px-4 py-6 text-slate-700 transition hover:bg-white hover:shadow-sm">
                  <LuPhone className="text-2xl" />
                  <span className="mt-2 text-sm font-medium">Call</span>
                </button>

                <button className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-[#f8fafc] px-4 py-6 text-slate-700 transition hover:bg-white hover:shadow-sm">
                  <LuMessageSquare className="text-2xl" />
                  <span className="mt-2 text-sm font-medium">Text</span>
                </button>

                <button className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-[#f8fafc] px-4 py-6 text-slate-700 transition hover:bg-white hover:shadow-sm">
                  <LuVideo className="text-2xl" />
                  <span className="mt-2 text-sm font-medium">Video</span>
                </button>
              </div>
            </div>

            {/* Recent Interactions */}
            <div className="mt-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold text-[#245b4b]">
                  Recent Interactions
                </h3>

                <button className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-3 py-1.5 text-sm text-slate-600 transition hover:bg-gray-50">
                  <LuHistory className="text-base" />
                  Full History
                </button>
              </div>

              <div className="mt-4 divide-y divide-gray-100">
                <div className="flex items-start justify-between gap-4 py-4">
                  <div className="flex items-start gap-3">
                    <LuMessageSquare className="mt-1 text-lg text-slate-700" />
                    <div>
                      <h4 className="font-medium text-slate-800">Text</h4>
                      <p className="text-sm text-slate-500">
                        Asked for career advice
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Jan 28, 2026</p>
                </div>

                <div className="flex items-start justify-between gap-4 py-4">
                  <div className="flex items-start gap-3">
                    <LuPhone className="mt-1 text-lg text-slate-700" />
                    <div>
                      <h4 className="font-medium text-slate-800">Meetup</h4>
                      <p className="text-sm text-slate-500">
                        Industry conference meetup
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Jan 28, 2026</p>
                </div>

                <div className="flex items-start justify-between gap-4 py-4">
                  <div className="flex items-start gap-3">
                    <LuVideo className="mt-1 text-lg text-slate-700" />
                    <div>
                      <h4 className="font-medium text-slate-800">Video</h4>
                      <p className="text-sm text-slate-500">
                        Asked for career advice
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Jan 28, 2026</p>
                </div>

                <div className="flex items-start justify-between gap-4 py-4">
                  <div className="flex items-start gap-3">
                    <LuPhone className="mt-1 text-lg text-slate-700" />
                    <div>
                      <h4 className="font-medium text-slate-800">Text</h4>
                      <p className="text-sm text-slate-500">
                        Asked for career advice
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400">Jan 28, 2026</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendsDetails;
