import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용안내 - DEPL",
  description: "DEPL 서비스 이용안내. 시작하기부터 고급 기능까지 안내해드립니다.",
};

const guides = [
  {
    title: "시작하기",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: "bg-indigo-600",
    steps: [
      { title: "회원가입", desc: "이메일 또는 소셜 계정(Google, 카카오)으로 간편하게 가입하세요. 신용카드 없이 무료로 시작할 수 있습니다." },
      { title: "테마 선택", desc: "비즈니스, 포트폴리오, 쇼핑몰 등 다양한 카테고리에서 마음에 드는 테마를 골라보세요." },
      { title: "콘텐츠 편집", desc: "텍스트, 이미지, 영상 등 원하는 콘텐츠를 드래그 앤 드롭으로 간편하게 편집하세요." },
      { title: "사이트 게시", desc: "편집이 완료되면 '게시' 버튼 하나로 사이트를 공개할 수 있습니다." },
    ],
  },
  {
    title: "페이지 관리",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
    color: "bg-emerald-600",
    steps: [
      { title: "페이지 추가", desc: "소개, 서비스, 갤러리, 연락처 등 다양한 페이지 템플릿을 선택하여 추가할 수 있습니다." },
      { title: "블록 편집", desc: "각 페이지는 여러 블록으로 구성됩니다. 블록의 순서를 바꾸거나 새로운 블록을 추가해보세요." },
      { title: "메뉴 설정", desc: "상단 네비게이션에 표시할 페이지와 순서를 자유롭게 설정할 수 있습니다." },
    ],
  },
  {
    title: "도메인 연결",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    color: "bg-violet-600",
    steps: [
      { title: "기본 도메인", desc: "모든 사이트에 '사이트이름.depl.site' 형식의 무료 서브도메인이 제공됩니다." },
      { title: "커스텀 도메인 연결 (Pro 이상)", desc: "보유한 도메인을 연결하려면 설정 > 도메인 메뉴에서 DNS 레코드를 설정하세요." },
      { title: "SSL 인증서", desc: "커스텀 도메인 연결 시 SSL 인증서가 자동으로 발급되어 HTTPS가 적용됩니다." },
    ],
  },
  {
    title: "게시판 활용",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    color: "bg-amber-600",
    steps: [
      { title: "게시판 생성", desc: "공지사항, 자유게시판, Q&A 등 용도에 맞는 게시판을 생성하세요." },
      { title: "글 작성 및 관리", desc: "에디터를 통해 이미지, 파일을 첨부할 수 있으며, 댓글과 검색 기능이 기본 제공됩니다." },
      { title: "권한 설정", desc: "게시판별로 글 작성, 댓글, 열람 권한을 회원/비회원으로 구분하여 설정할 수 있습니다." },
    ],
  },
  {
    title: "팀 협업",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    color: "bg-rose-600",
    steps: [
      { title: "멤버 초대", desc: "이메일로 팀 멤버를 초대할 수 있습니다. Pro 플랜은 3명, Business 플랜은 무제한입니다." },
      { title: "역할 부여", desc: "관리자(모든 권한), 편집자(콘텐츠 수정), 뷰어(열람 전용) 3가지 역할을 부여할 수 있습니다." },
      { title: "활동 로그", desc: "누가 어떤 변경을 했는지 활동 로그에서 확인할 수 있습니다." },
    ],
  },
  {
    title: "요금제 및 결제",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: "bg-sky-600",
    steps: [
      { title: "플랜 선택", desc: "Free, Pro, Business 3가지 플랜 중 필요에 맞는 플랜을 선택하세요. 연간 결제 시 20% 할인됩니다." },
      { title: "결제 수단", desc: "신용카드, 카카오페이, 계좌이체 등 다양한 결제 수단을 지원합니다." },
      { title: "플랜 변경 및 환불", desc: "언제든 업그레이드/다운그레이드가 가능합니다. 결제 후 7일 이내 전액 환불, 이후 부분 환불이 가능합니다." },
    ],
  },
];

export default function GuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/support" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-indigo-600 transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            고객센터
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">이용안내</h1>
          <p className="mt-2 text-gray-600">DEPL 서비스의 주요 기능과 사용법을 안내해드립니다.</p>
        </div>
      </section>

      {/* Guides */}
      <section className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {guides.map((guide) => (
            <div key={guide.title} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Header */}
              <div className={`${guide.color} px-6 py-4 flex items-center gap-3`}>
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                  {guide.icon}
                </div>
                <h2 className="text-lg font-bold text-white">{guide.title}</h2>
              </div>

              {/* Steps */}
              <div className="p-6">
                <div className="space-y-5">
                  {guide.steps.map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        {i < guide.steps.length - 1 && (
                          <div className="w-px flex-1 bg-gray-100 mt-2" />
                        )}
                      </div>
                      <div className="pb-5">
                        <h3 className="text-sm font-semibold text-gray-900">{step.title}</h3>
                        <p className="mt-1 text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            이제 직접 만들어보세요
          </h2>
          <p className="mt-3 text-gray-600">
            무료로 시작해서 나만의 웹사이트를 완성하세요.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/support/notices"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-xl transition-colors"
            >
              공지사항 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
