import RightArrowImg from "../assets/slash.png";

interface BreadcrumbProps {
  sizeFilter: string | null;
  colorFilter: string | null;
}

export default function Breadcrumb({ sizeFilter, colorFilter }: BreadcrumbProps) {
  return (
    <div className="mb-8 bg-white rounded-lg p-4 shadow-sm w-full max-w-2xl">
      <ul className="flex items-center text-xl text-[#2E4053] flex-wrap gap-3">
        <li className="font-semibold">All Dogs</li>

        {sizeFilter && (
          <>
            <img src={RightArrowImg} className="w-5 h-5" alt="→" />
            <li className="font-semibold capitalize bg-[#E8DAEF] px-4 py-2 rounded-md">
              {sizeFilter}
            </li>
          </>
        )}

        {colorFilter && (
          <>
            <img src={RightArrowImg} className="w-5 h-5" alt="→" />
            <li className="font-semibold capitalize bg-[#E8DAEF] px-4 py-2 rounded-md">
              {colorFilter}
            </li>
          </>
        )}
      </ul>
    </div>
  );
}