import Image from "next/image";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Container */}
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
        
        {/* Left Side - Illustration (Hidden on mobile) */}
        <div className="hidden md:flex justify-center p-6">
          <Link href="/">
            <Image
              src="/images/registration.png"
              width={400}
              height={400}
              alt="Register illustration"
              className="max-w-xs sm:max-w-sm h-auto object-contain hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full max-w-md mx-auto">
          {/* Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="px-6 pt-8 pb-4 text-center space-y-1">
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Create Account</h1>
              <p className="text-sm text-gray-600">Fill in your details to get started</p>
            </div>

            {/* Form */}
            <form className="px-6 pb-6 space-y-4">
              {/* Name Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="first-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="John"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="last-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Doe"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              {/* Shop & SIRET */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="shop-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Shop Name
                  </label>
                  <input
                    type="text"
                    id="shop-name"
                    placeholder="Lukas Vendor"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="siret" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    SIRET
                  </label>
                  <input
                    type="text"
                    id="siret"
                    placeholder="5148549845"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              {/* Phone & Email */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="+99021585"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1">
                <label htmlFor="address" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="38 N 100 E, Salina, UT 84654"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                />
              </div>

              {/* Password Row */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label htmlFor="password" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="confirm-password" className="block text-xs font-semibold text-gray-700 uppercase tracking-wide">
                    Confirm
                  </label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-green-500 text-sm"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg shadow transition-all duration-200 hover:scale-101 active:scale-98 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1"
              >
                Create Account
              </button>
            </form>
          </div>

          {/* Login Link */}
          <p className="mt-5 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="font-semibold text-green-600 hover:text-green-800">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;