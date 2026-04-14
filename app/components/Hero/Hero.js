import StatCard from "../StatCard/StatCard";

const Hero = () => {

  return (
    <section className="bg-[#f4f5f7] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <h1 className="mx-auto  text-3xl font-extrabold text-slate-800 sm:text-4xl md:text-5xl lg:text-6xl">
            Friends to keep close in your life
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 sm:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="mt-8 rounded-md bg-[#245b4b] px-6 py-3 text-sm font-semibold text-white hover:bg-[#1d4b3e] transition">
            + Add a Friend
          </button>
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard value={10} title="Total Friends" />
          <StatCard value={6} title="On Track" />
          <StatCard value={2} title="Need Attention" />
          <StatCard value={3} title="Interactions This Month" />
        </div>

        <div className="mt-10 border-t border-gray-200" />
      </div>
    </section>
  );
};

export default Hero;
