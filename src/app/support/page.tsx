import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "고객센터 - DEPL",
  description: "DEPL 고객센터. 공지사항, 이용안내, 자주 묻는 질문을 확인하세요.",
};

const sections = [
  {
    title: "공지사항",
    description: "서비스 업데이트, 점검 안내 등 주요 소식을 확인하세요.",
    href: "/support/notices",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    title: "이용안내",
    description: "DEPL 서비스 사용법과 주요 기능을 안내해드립니다.",
    href: "/support/guide",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    title: "문의하기",
    description: "궁금한 점이 있으시면 언제든지 문의해주세요.",
    href: "/contact",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-amber-50 text-amber-600",
  },
];

const faqs = [
  { q: "DEPL은 어떤 서비스인가요?", a: "DEPL은 코딩 없이 누구나 쉽고 빠르게 웹사이트를 만들 수 있는 웹사이트 빌더 서비스입니다. 테마를 고르고 콘텐츠만 채우면 완성됩니다." },
  { q: "무료로 사용할 수 있나요?", a: "네, Free 플랜으로 무료 시작이 가능합니다. 테마 3개, 페이지 5개, 게시판 1개를 이용하실 수 있으며 신용카드 없이 바로 시작할 수 있습니다." },
  { q: "커스텀 도메인을 연결할 수 있나요?", a: "Pro 이상 플랜에서 커스텀 도메인 연결이 가능합니다. 설정 > 도메인 메뉴에서 안내에 따라 DNS 설정을 하면 10분 내에 연결됩니다." },
  { q: "환불은 어떻게 하나요?", a: "결제 후 7일 이내에 요청하시면 전액 환불해드립니다. 7일 이후에는 잔여 기간에 대한 부분 환불이 가능합니다." },
  { q: "사이트를 삭제하면 복구할 수 있나요?", a: "삭제 후 30일 이내에는 고객센터를 통해 복구 요청이 가능합니다. 30일 이후에는 영구 삭제됩니다." },
];

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            무엇을 <span className="text-indigo-600">도와드릴까요?</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            공지사항, 이용안내, 자주 묻는 질문을 확인하시거나 직접 문의해주세요.
          </p>
        </div>
      </section>

      {/* Section Cards */}
      <section className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {sections.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-xl hover:shadow-gray-200/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${section.color} mb-4`}>
                  {section.icon}
                </div>
                <h2 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {section.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                  {section.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-10">
            자주 묻는 질문
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none">
                  <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            찾는 답변이 없으신가요?
          </h2>
          <p className="mt-3 text-gray-600">
            고객센터로 직접 문의해주시면 빠르게 답변드리겠습니다.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:support@depl.kr"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
            >
              이메일 문의하기
            </a>
            <Link
              href="/support/guide"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-xl transition-colors"
            >
              이용안내 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
