import Image from "next/image";
import Link from "next/link";

const ForgetPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side - Illustration (Hidden on mobile) */}
        <div className="hidden md:flex justify-center p-6">
          <Link href="/">
            <Image
              src="/images/forget-password.png"
              width={500}
              height={500}
              alt="Forgot password illustration"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Side - Forgot Password Form */}
        <div className="w-full max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-8 pb-6 text-center space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">Forgot Your Password?</h1>
              <p className="text-sm text-gray-600">
                No worries! Enter your email and we&apos;ll send you a reset link.
              </p>
            </div>

            {/* Form */}
            <form className="px-6 pb-8 space-y-5">
              {/* Email Field */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-800">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="jane.doe@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  autoComplete="email"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition-transform duration-200 hover:scale-102 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Send Reset Link
              </button>
            </form>
          </div>

  
        </div>
      </div>
    </div>
  );
};

export default ForgetPage;