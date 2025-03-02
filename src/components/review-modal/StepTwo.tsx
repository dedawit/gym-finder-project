import React from "react";
import { Clock } from "lucide-react";

interface StepTwoProps {
  selectedPositives: string[];
  setSelectedPositives: (positives: string[]) => void;
  selectedNegatives: string[];
  setSelectedNegatives: (negatives: string[]) => void;
  waitTime: string;
  setWaitTime: (time: string) => void;
  onBack: () => void;
  onSkip: () => void;
  onSubmit: () => void;
}

const StepTwo: React.FC<StepTwoProps> = ({
  selectedPositives,
  setSelectedPositives,
  selectedNegatives,
  setSelectedNegatives,
  waitTime,
  setWaitTime,
  onBack,
  onSkip,
  onSubmit,
}) => {
  const positiveOptions = [
    "Equipment quality",
    "Staff friendliness",
    "Cleanliness",
    "Value for money",
    "Class variety",
    "Spacious facility",
    "Modern equipment",
    "Helpful trainers",
  ];

  const negativeOptions = [
    "Crowded at peak times",
    "Limited equipment",
    "Cleanliness issues",
    "Expensive membership",
    "Unfriendly staff",
    "Limited class options",
    "Outdated equipment",
    "Poor maintenance",
  ];

  const waitTimeOptions = [
    "0-5 min",
    "5-10 min",
    "10-15 min",
    "15-30 min",
    "30+ min",
  ];

  const handlePositiveToggle = (item: string) => {
    if (selectedPositives.includes(item)) {
      setSelectedPositives(selectedPositives.filter((i) => i !== item));
    } else {
      setSelectedPositives([...selectedPositives, item]);
    }
  };

  const handleNegativeToggle = (item: string) => {
    if (selectedNegatives.includes(item)) {
      setSelectedNegatives(selectedNegatives.filter((i) => i !== item));
    } else {
      setSelectedNegatives([...selectedNegatives, item]);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <p className="text-gray-300">
          We just sent an email with a link to{" "}
          <strong>confirm your review</strong>.
          <br />
          Help other gym-goers find the right facility by sharing more about
          your experience.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-400">
          What went well{" "}
          <span className="text-gray-400 text-base">
            (Select all that apply)
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {positiveOptions.map((option) => (
            <button
              key={option}
              onClick={() => handlePositiveToggle(option)}
              className={`text-left py-3 px-4 rounded-full transition ${
                selectedPositives.includes(option)
                  ? "bg-red-900 border-2 border-red-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-red-400">
          What could be improved{" "}
          <span className="text-gray-400 text-base">
            (Select all that apply)
          </span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {negativeOptions.map((option) => (
            <button
              key={option}
              onClick={() => handleNegativeToggle(option)}
              className={`text-left py-3 px-4 rounded-full transition ${
                selectedNegatives.includes(option)
                  ? "bg-red-900 border-2 border-red-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="border-t border-gray-700 my-6"></div>
        <h3 className="text-xl font-semibold mb-4 flex items-center text-red-400">
          <Clock size={20} className="mr-2 text-red-500" />
          How long was the wait time?{" "}
          <span className="text-gray-400 text-base ml-2">(Select one)</span>
        </h3>
        <div className="flex flex-wrap gap-3">
          {waitTimeOptions.map((option) => (
            <button
              key={option}
              onClick={() => setWaitTime(option)}
              className={`py-3 px-6 rounded-full transition ${
                waitTime === option
                  ? "bg-red-900 border-2 border-red-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700 my-6"></div>

      <h3 className="text-xl font-semibold mb-4 text-red-400">
        Frequently asked questions
      </h3>

      <div className="flex justify-between mt-8">
        <button
          onClick={onBack}
          className="text-red-500 hover:text-red-400 font-medium"
        >
          Back
        </button>
        <div className="flex gap-3">
          <button
            onClick={onSkip}
            className="text-gray-400 hover:text-gray-300 font-medium"
          >
            Skip
          </button>
          <button
            onClick={onSubmit}
            className="bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white py-2 px-6 rounded-md transition"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
