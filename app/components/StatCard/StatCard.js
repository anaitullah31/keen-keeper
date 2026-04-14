const StatCard = ({ value, title }) => {
  return (
    <div className="rounded-xl bg-white py-10 text-center shadow-sm border border-gray-100">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#245b4b]">{value}</h2>
      <p className="mt-2">{title}</p>
    </div>
  );
};

export default StatCard;
