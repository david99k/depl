"use client";

import Link from "next/link";

const mySites = [
  {
    id: 1,
    name: "민수의 포트폴리오",
    domain: "minsu.depl.site",
    theme: "크리에이티브 폴리오",
    pages: 5,
    posts: 12,
    views: 1240,
    status: "published",
    createdAt: "2026-01-15",
  },
  {
    id: 2,
    name: "민수 사진관",
    domain: "minsu-photo.depl.site",
    theme: "포토 폴리오",
    pages: 4,
    posts: 38,
    views: 890,
    status: "published",
    createdAt: "2026-02-10",
  },
  {
    id: 3,
    name: "사이드 프로젝트",
    domain: "side-project.depl.site",
    theme: "스타트업 랜딩",
    pages: 2,
    posts: 0,
    views: 0,
    status: "draft",
    createdAt: "2026-03-08",
  },
];

const statusMap: Record<string, { label: string; color: string }> = {
  published: { label: "게시중", color: "bg-green-100 text-green-700" },
  draft: { label: "임시저장", color: "bg-gray-100 text-gray-500" },
};

export default function MySitesPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">내 사이트</h1>
          <p className="mt-1 text-sm text-gray-500">{mySites.length}개의 사이트를 운영 중입니다.</p>
        </div>
        <Link
          href="/themes"
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          + 새 사이트 만들기
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {mySites.map((site) => (
          <div key={site.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:shadow-gray-100 transition-all">
            {/* Header */}
            <div className="p-5 border-b border-gray-50">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-gray-900">{site.name}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusMap[site.status].color}`}>
                      {statusMap[site.status].label}
                    </span>
                  </div>
                  <p className="text-xs text-indigo-500 mt-1">{site.domain}</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 divide-x divide-gray-100">
              {[
                { label: "페이지", value: site.pages },
                { label: "게시글", value: site.posts },
                { label: "방문자", value: site.views.toLocaleString() },
                { label: "테마", value: "" },
              ].map((stat) => (
                <div key={stat.label} className="px-4 py-3 text-center">
                  <p className="text-xs text-gray-400">{stat.label}</p>
                  <p className="text-sm font-semibold text-gray-900 mt-0.5">
                    {stat.label === "테마" ? (
                      <span className="text-xs font-medium text-gray-500">{site.theme}</span>
                    ) : (
                      stat.value
                    )}
                  </p>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2 p-4 border-t border-gray-100 bg-gray-50/50">
              <button className="flex-1 text-center text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl transition-colors">
                사이트 편집
              </button>
              {site.status === "published" ? (
                <button className="flex-1 text-center text-xs font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-4 py-2.5 rounded-xl transition-colors">
                  사이트 보기
                </button>
              ) : (
                <button className="flex-1 text-center text-xs font-semibold text-green-600 border border-green-200 hover:bg-green-50 px-4 py-2.5 rounded-xl transition-colors">
                  게시하기
                </button>
              )}
              <button className="text-xs font-medium text-gray-400 border border-gray-200 hover:bg-gray-50 px-3 py-2.5 rounded-xl transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        {/* New Site Card */}
        <Link
          href="/themes"
          className="bg-white rounded-2xl border-2 border-dashed border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/30 flex flex-col items-center justify-center py-16 transition-all group"
        >
          <div className="w-14 h-14 bg-gray-100 group-hover:bg-indigo-100 rounded-2xl flex items-center justify-center transition-colors">
            <svg className="w-7 h-7 text-gray-400 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <p className="mt-3 text-sm font-semibold text-gray-500 group-hover:text-indigo-600 transition-colors">새 사이트 만들기</p>
          <p className="mt-1 text-xs text-gray-400">테마를 골라 바로 시작하세요</p>
        </Link>
      </div>
    </>
  );
}
