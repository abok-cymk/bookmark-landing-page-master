import clsx from "clsx";
import { RiErrorWarningFill } from "react-icons/ri";

const Input = ({ id, value, onChange, error }) => {
  return (
    <div className="w-full">
      <div
        className={clsx(
          "bg-Grey-50 rounded w-full md:w-[300px] relative",
          error ? "outline-2 outline-Red-400" : ""
        )}
      >
        <input
          onChange={onChange}
          value={value}
          type="email"
          name="email"
          placeholder="Enter your email address"
          id={id}
          className={clsx(
            "w-full relative px-4 py-[1ch] text-sm font-500 text-Blue-950 placeholder-Blue-950/20 transition-colors duration-200 focus-within:outline-0"
          )}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {error && (
          <RiErrorWarningFill className="absolute right-4 top-1/2 -translate-y-1/2 text-Red-400 pointer-events-none" />
        )}
      </div>
      {error && (
        <p
          id={`${id}-error`}
          className="-mt-2 outline-2 outline-Red-400 rounded pt-3 text-Grey-50 text-xs italic py-1 text-left pl-1 bg-Red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;
