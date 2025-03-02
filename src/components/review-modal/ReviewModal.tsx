import React, { useState } from "react";
import { Dumbbell } from "lucide-react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { X } from "lucide-react";

interface ReviewModalProps {
  gymName: string;
  isOpen: boolean;
  onClose: () => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({
  gymName,
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState(1);
  const [rating, setRating] = useState(0);
  const [reviewTitle, setReviewTitle] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [selectedPositives, setSelectedPositives] = useState<string[]>([]);
  const [selectedNegatives, setSelectedNegatives] = useState<string[]>([]);
  const [waitTime, setWaitTime] = useState("");
  const [isVirtual, setIsVirtual] = useState<boolean | null>(null);
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSubmitReview = () => {
    // Here you would typically send the review data to a server
    console.log({
      rating,
      reviewTitle,
      reviewText,
      selectedPositives,
      selectedNegatives,
      waitTime,
      isVirtual,
      displayName,
      email,
    });

    // Close the modal after submission
    onClose();
    // Reset form
    resetForm();
  };

  const resetForm = () => {
    setRating(0);
    setStep(1);
    setReviewTitle("");
    setReviewText("");
    setSelectedPositives([]);
    setSelectedNegatives([]);
    setWaitTime("");
    setIsVirtual(null);
    setDisplayName("");
    setEmail("");
    setAgreeToTerms(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 text-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-red-800">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="flex items-start p-6 mb-2">
            <div className="bg-gray-800 p-3 rounded-lg mr-4 border border-red-800">
              <Dumbbell size={40} className="text-red-600" />
            </div>
            <div>
              <div className="text-gray-400">Step {step} of 2</div>
              <h2 className="text-2xl font-bold text-white">
                {step === 1
                  ? `Your review of ${gymName}`
                  : "Tell us more about your visit"}
              </h2>
            </div>
          </div>

          <div className="border-t border-gray-700 mx-6"></div>

          {step === 1 ? (
            <StepOne
              rating={rating}
              setRating={setRating}
              reviewTitle={reviewTitle}
              setReviewTitle={setReviewTitle}
              reviewText={reviewText}
              setReviewText={setReviewText}
              isVirtual={isVirtual}
              setIsVirtual={setIsVirtual}
              displayName={displayName}
              setDisplayName={setDisplayName}
              email={email}
              setEmail={setEmail}
              agreeToTerms={agreeToTerms}
              setAgreeToTerms={setAgreeToTerms}
              onNext={handleNextStep}
            />
          ) : (
            <StepTwo
              selectedPositives={selectedPositives}
              setSelectedPositives={setSelectedPositives}
              selectedNegatives={selectedNegatives}
              setSelectedNegatives={setSelectedNegatives}
              waitTime={waitTime}
              setWaitTime={setWaitTime}
              onBack={handlePreviousStep}
              onSkip={onClose}
              onSubmit={handleSubmitReview}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
