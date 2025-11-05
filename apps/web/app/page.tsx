import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="text-2xl font-bold text-purple-600">
              EPINYA
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/products" className="text-gray-700 hover:text-purple-600">
                Products
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-purple-600">
                Login
              </Link>
              <Link href="/register" className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Digital Gift Cards & Game Codes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Instant delivery of Apple, Steam, PlayStation, PUBG, and more
          </p>
          <Link
            href="/products"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-700 transition"
          >
            Browse Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Instant Delivery</h3>
            <p className="text-gray-600">
              Get your codes immediately after payment confirmation
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">Secure & Safe</h3>
            <p className="text-gray-600">
              All transactions are encrypted and protected
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="text-4xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Multiple Payment Options</h3>
            <p className="text-gray-600">
              Pay with credit card, debit card, and more
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Link href="/products?category=Gift+Cards" className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="text-5xl mb-3">🎁</div>
              <div className="font-semibold">Gift Cards</div>
            </Link>
            <Link href="/products?category=Gaming" className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="text-5xl mb-3">🎮</div>
              <div className="font-semibold">Gaming</div>
            </Link>
            <Link href="/products?brand=Apple" className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="text-5xl mb-3">🍎</div>
              <div className="font-semibold">Apple</div>
            </Link>
            <Link href="/products?brand=Steam" className="text-center p-6 rounded-lg hover:bg-gray-50 transition">
              <div className="text-5xl mb-3">🎯</div>
              <div className="font-semibold">Steam</div>
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EPINYA</h3>
              <p className="text-gray-400">
                Your trusted source for digital gift cards and game codes
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/products">All Products</Link></li>
                <li><Link href="/products?category=Gift+Cards">Gift Cards</Link></li>
                <li><Link href="/products?category=Gaming">Gaming</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Account</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/register">Register</Link></li>
                <li><Link href="/account">My Account</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 EPINYA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
