import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "공지사항 - DEPL",
  description: "DEPL 서비스 공지사항",
};

const notices = [
  {
    id: 1,
    category: "업데이트",
    title: "v2.5 업데이트: 새로운 페이지 블록 10종 추가",
    summary: "소개, 갤러리, 가격표 등 실용적인 블록 10종이 새롭게 추가되었습니다. 지금 바로 페이지 에디터에서 사용해보세요.",
    date: "2026-03-11",
    isNew: true,
  },
  {
    id: 2,
    category: "점검",
    title: "서비스 정기 점검 안내 (3/15 02:00~06:00)",
    summary: "서비스 안정성 향상을 위해 정기 점검을 실시합니다. 점검 시간 동안 서비스 이용이 일시적으로 제한됩니다.",
    date: "2026-03-10",
    isNew: true,
  },
  {
    id: 3,
    category: "안내",
    title: "요금제 개편 안내 (2026년 4월 적용)",
    summary: "더 합리적인 요금으로 서비스를 이용하실 수 있도록 요금제를 개편합니다. 기존 사용자분들은 기존 요금이 유지됩니다.",
    date: "2026-03-01",
    isNew: false,
  },
  {
    id: 4,
    category: "업데이트",
    title: "v2.4 업데이트: 새로운 테마 3종 추가",
    summary: "비즈니스, 포트폴리오, 쇼핑몰 카테고리에 새로운 테마가 추가되었습니다.",
    date: "2026-03-05",
    isNew: false,
  },
  {
    id: 5,
    category: "업데이트",
    title: "커스텀 도메인 SSL 인증서 자동 갱신 지원",
    summary: "이제 커스텀 도메인의 SSL 인증서가 자동으로 갱신됩니다. 별도의 설정 없이 안전한 HTTPS 연결을 유지할 수 있습니다.",
    date: "2026-02-20",
    isNew: false,
  },
  {
    id: 6,
    category: "안내",
    title: "개인정보처리방침 변경 안내",
    summary: "개인정보 보호법 개정에 따라 개인정보처리방침 일부 내용이 변경되었습니다.",
    date: "2026-02-15",
    isNew: false,
  },
  {
    id: 7,
    category: "점검",
    title: "서비스 긴급 점검 완료 안내",
    summary: "2월 10일 발생한 일부 사이트 접속 장애가 해결되었습니다. 이용에 불편을 드려 죄송합니다.",
    date: "2026-02-10",
    isNew: false,
  },
  {
    id: 8,
    category: "업데이트",
    title: "v2.3 업데이트: 게시판 기능 개선",
    summary: "게시판에 이미지 첨부, 댓글 기능, 검색 기능이 추가되었습니다.",
    date: "2026-01-28",
    isNew: false,
  },
];

const categoryColors: Record<string, string> = {
  업데이트: "bg-indigo-100 text-indigo-700",
  점검: "bg-yellow-100 text-yellow-700",
  안내: "bg-gray-100 text-gray-700",
};

export default function NoticesPage() {
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
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">공지사항</h1>
          <p className="mt-2 text-gray-600">서비스 업데이트, 점검 안내 등 주요 소식을 확인하세요.</p>
        </div>
      </section>

      {/* Notices List */}
      <section className="pb-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            {notices.map((notice) => (
              <article
                key={notice.id}
                className="bg-white rounded-2xl border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:shadow-gray-100 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[notice.category]}`}>
                    {notice.category}
                  </span>
                  {notice.isNew && (
                    <span className="text-xs font-bold text-red-500">NEW</span>
                  )}
                  <span className="text-xs text-gray-400 ml-auto">{notice.date}</span>
                </div>
                <h2 className="text-base font-semibold text-gray-900">{notice.title}</h2>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{notice.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
