import Image from "next/image";
import Link from "next/link";

const SetPasswordPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side - Illustration (Hidden on mobile) */}
        <div className="hidden md:flex justify-center p-6">
          <Link href="/">
            <Image
              src="/images/confirm-password.png" // 🔁 Fixed typo: passwprd → password
              width={500}
              height={500}
              alt="Set new password illustration"
              className="max-w-xs sm:max-w-sm md:max-w-md h-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Side - Set Password Form */}
        <div className="w-full max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-8 pb-6 text-center space-y-1">
              <h1 className="text-2xl font-bold text-gray-900">Set New Password</h1>
              <p className="text-sm text-gray-600">
                Choose a strong password to secure your account.
              </p>
            </div>

            {/* Form */}
            <form className="px-6 pb-8 space-y-5">
              {/* New Password */}
              <div className="space-y-2">
                <label htmlFor="new-password" className="block text-sm font-semibold text-gray-800">
                  New Password
                </label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  autoComplete="new-password"
                />
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label htmlFor="confirm-password" className="block text-sm font-semibold text-gray-800">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="••••••••••••"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-sm"
                  autoComplete="new-password"
                />
              </div>

       

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg shadow transition-transform duration-200 hover:scale-102 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Set Password
              </button>
            </form>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default SetPasswordPage;