const StatContainer = ({ index, icon, title, value }) => {
  return (
    <div
      className={`text-secondary space-y-1 rounded-xl p-3 shadow ${index === 0 ? "bg-[#A6F7E2]" : index === 1 ? "bg-[#B79BFF]" : index === 2 ? "bg-[#FFE5A5]" : "bg-[#C7FFA5]"}`}
    >
      <h2 className="flex items-center gap-3">
        <i
          className={`${icon} ri-2x ${index === 0 ? "text-[#2c7d68]" : index === 1 ? "text-[#7b5fc3]" : index === 2 ? "text-[#755b1b]" : "text-[#366e14]"}`}
        ></i>
        <span className="text-xl font-medium">{title}</span>
      </h2>
      <p className="text-sm">Current Value</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
};

export default StatContainer;
