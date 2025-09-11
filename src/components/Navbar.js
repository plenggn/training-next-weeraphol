import Link from "next/link";
export default function Navbar() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* <!-- Logo --> */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-gray-900">
              <span className="text-blue-600">Your</span>Brand
            </div>
          </div>

          {/* <!-- Navigation --> */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href=""
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >หน้าแรก</a
            >
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >บริการ</a
            >
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >เกี่ยวกับเรา</a
            >
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
              >ติดต่อ</a
            >
          </nav>

          {/* <!-- CTA Button --> */}
          <div className="hidden md:block">
            <button
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              เริ่มต้นใช้งาน
            </button>
          </div>

          {/* <!-- Mobile Menu Button --> */}
          <button className="md:hidden text-gray-700">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </header>
    );
}