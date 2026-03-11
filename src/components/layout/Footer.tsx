import Link from "next/link";

const footerLinks = {
  제품: [
    { label: "테마", href: "/themes" },
    { label: "페이지", href: "/pages" },
    { label: "게시판", href: "/boards" },
  ],
  서비스: [
    { label: "요금제", href: "/pricing" },
    { label: "고객센터", href: "/support" },
    { label: "공지사항", href: "/support/notices" },
    { label: "이용안내", href: "/support/guide" },
  ],
  회사: [
    { label: "소개", href: "/about" },
    { label: "블로그", href: "/blog" },
    { label: "문의하기", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold text-gray-900">DEPL</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              매장에서 옷을 사듯, 쉽고 빠르게
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; 2026 DEPL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              이용약관
            </Link>
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
              개인정보처리방침
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
