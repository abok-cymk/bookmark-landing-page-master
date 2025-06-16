import { memo } from "react";
import { Link } from "react-router";

const ExtensionForBrowser = ({ browserIcon, action, requirement, cta}) => {
  return (
    <div className="shadow-lg bg-white rounded-sm text-center flex flex-col justify-between p-[1rem] h-full w-full">
      <div className="flex flex-col gap-y-5 py-18 border-b-[0.1em] border-dashed border-Blue-950/40">
          <img src={browserIcon} alt={`${browserIcon} svg image`} className="mx-auto h-10 w-10 object-contain"/>
          <div>
              <h4 className="font-500 text-Blue-950 text-xl">{action}</h4>
              <p className="text-xs text-gray-500">{requirement}</p>
          </div>
      </div>
      <Link to="/" className="bg-Blue-600 text-Grey-50 px-3 py-2 mt-3 rounded-md">{cta}</Link>
    </div>
  );
}

export default memo(ExtensionForBrowser);
