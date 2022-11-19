import { CheckIcon } from "@heroicons/react/solid";

const PlanBenefits = ({ text }) => {
  return (
    <li className="flex items-center gap-x-2 text-lg">
      <CheckIcon className="h-7 w-7 text-[#E50914]" /> {text}
    </li>
  );
};

export default PlanBenefits;
