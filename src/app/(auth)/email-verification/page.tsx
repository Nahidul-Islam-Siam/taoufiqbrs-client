import Image from "next/image";
import Link from "next/link";

const EmailVerificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side - Illustration (Hidden on mobile) */}
        <div className="hidden md:flex justify-center p-6">
          <Link href="/">
            <Image
              src="/images/otp.png" 
              width={500}
              height={500}
              alt="Email verification illustration"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Side - OTP Verification Form */}
        <div className="w-full max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-8 pb-6 text-center space-y-2">
              <h1 className="text-2xl font-bold text-gray-900">Verify Your Email</h1>
              <p className="text-sm text-gray-600">
                We&apos;ve sent a 6-digit code to your email. Please enter it below to verify your account.
              </p>
            </div>

            {/* Form */}
            <form className="px-6 pb-8 space-y-5">
              {/* OTP Field */}
              <div className="space-y-2">
                <label htmlFor="otp" className="block text-sm font-semibold text-gray-800">
                  Verification Code
                </label>
                <input
                  type="text"
                  inputMode="numeric" // Better for mobile: shows number keypad
                  id="otp"
                  maxLength={6}
                  placeholder="123456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center text-sm font-mono"
                  autoComplete="one-time-code"
                />
              </div>

              {/* Resend Link */}
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Didn&apos;t receive the code?{" "}
                  <button
                    type="button"
                    className="font-medium text-green-600 hover:text-green-800 transition-colors"
                  >
                    Resend Code
                  </button>
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition-transform duration-200 hover:scale-102 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Verify & Continue
              </button>
            </form>
          </div>

          {/* Back to Login */}
          <p className="mt-5 text-center text-sm text-gray-600">
            Back to login?{" "}
            <Link href="/login" className="font-semibold text-green-600 hover:text-green-800">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationPage;