import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

interface StepOneProps {
  rating: number;
  setRating: (rating: number) => void;
  reviewTitle: string;
  setReviewTitle: (title: string) => void;
  reviewText: string;
  setReviewText: (text: string) => void;
  isVirtual: boolean | null;
  setIsVirtual: (isVirtual: boolean) => void;
  displayName: string;
  setDisplayName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  agreeToTerms: boolean;
  setAgreeToTerms: (agree: boolean) => void;
  onNext: () => void;
}

const StepOne: React.FC<StepOneProps> = ({
  rating,
  setRating,
  reviewTitle,
  setReviewTitle,
  reviewText,
  setReviewText,
  isVirtual,
  setIsVirtual,
  displayName,
  setDisplayName,
  email,
  setEmail,
  agreeToTerms,
  setAgreeToTerms,
  onNext,
}) => {
  const [emailValid, setEmailValid] = useState<boolean>(true);

  useEffect(() => {
    // Simple regex to validate email
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    setEmailValid(emailRegex.test(email));
  }, [email]);

  return (
    <div className="p-6 pt-2 relative z-50">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">
          How likely are you to recommend this gym?
          <span className="text-red-500">*</span>
        </h3>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              onClick={() => setRating(value)}
              className="mr-2 focus:outline-none"
            >
              <Star
                size={32}
                className={
                  value <= rating
                    ? "text-red-500 fill-red-500"
                    : "text-gray-300"
                }
              />
            </button>
          ))}
          <span className="ml-2 text-gray-500">Select Rating</span>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-xl font-semibold mb-2">Review Title</label>
        <input
          type="text"
          value={reviewTitle}
          onChange={(e) => setReviewTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
          placeholder="Summarize your experience"
        />
        <div className="text-right text-gray-500 mt-1">
          {50 - reviewTitle.length} characters remaining
        </div>
      </div>

      <div className="mb-6">
        <div className="flex items-center justify-between">
          <label className="block text-xl font-semibold">
            Tell us more about your visit
          </label>
          <a href="#" className="text-blue-600 hover:underline">
            Review Tips
          </a>
        </div>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md h-32 focus:ring-2 focus:ring-red-500 focus:border-transparent mt-2 text-black"
          placeholder="What stood out in your visit? Remember, reviews are public, so refrain from including personal information."
        ></textarea>
        <div className="text-right text-gray-500 mt-1">
          {1000 - reviewText.length} characters remaining
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Was this a virtual training session?
        </h3>
        <div className="flex items-center">
          <label className="inline-flex items-center mr-6">
            <input
              type="radio"
              name="virtual"
              className="form-radio h-5 w-5 text-red-600"
              checked={isVirtual === true}
              onChange={() => setIsVirtual(true)}
            />
            <span className="ml-2">Yes</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="virtual"
              className="form-radio h-5 w-5 text-red-600"
              checked={isVirtual === false}
              onChange={() => setIsVirtual(false)}
            />
            <span className="ml-2">No</span>
          </label>
        </div>
        <div className="text-gray-500 text-sm mt-1">
          (This will display with your review)
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Display Name</h3>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-black"
          placeholder="Your name or nickname"
        />
        <div className="text-gray-500 text-sm mt-1">
          (Optional, will display with review)
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">
          Email<span className="text-red-500">*</span>
        </h3>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full p-3 border ${
            emailValid ? "border-gray-300" : "border-red-500"
          } rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent text-black`}
          placeholder="your@email.com"
        />
        <div className="text-gray-500 text-sm mt-1">
          Your email is used to confirm your review and will NOT appear in the
          review.
        </div>
        {!emailValid && (
          <div className="text-red-500 text-sm mt-1">
            Please enter a valid email.
          </div>
        )}
      </div>

      <div className="mb-6">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-red-600"
            checked={agreeToTerms}
            onChange={(e) => setAgreeToTerms(e.target.checked)}
          />
          <span className="ml-2">
            I verify that I have received services from this gym and agree to
            the
            <a href="#" className="text-blue-600 hover:underline ml-1">
              User Agreement
            </a>
            ,
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Editorial Policy
            </a>{" "}
            and
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Privacy Policy
            </a>
            .
          </span>
        </label>
      </div>

      <button
        onClick={onNext}
        disabled={
          !rating || !reviewTitle || !reviewText || !emailValid || !agreeToTerms
        }
        className={`py-3 px-6 rounded-md transition w-full md:w-auto ${
          !rating || !reviewTitle || !reviewText || !emailValid || !agreeToTerms
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-red-600 hover:bg-red-700 text-white"
        }`}
      >
        Save & Continue
      </button>

      <div className="text-gray-500 text-sm mt-4">
        <span className="text-red-500">*</span>Indicates required field
      </div>
    </div>
  );
};

export default StepOne;
