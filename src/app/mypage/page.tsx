"use client";

import Link from "next/link";

const stats = [
  { label: "운영 중 사이트", value: "3", icon: "🌐" },
  { label: "이번 달 방문자", value: "2,847", icon: "👥" },
  { label: "총 페이지", value: "14", icon: "📄" },
  { label: "게시판 글", value: "56", icon: "💬" },
];

const mySites = [
  { id: 1, name: "민수의 포트폴리오", domain: "minsu.depl.site", views: 1240, status: "published", updatedAt: "2시간 전" },
  { id: 2, name: "민수 사진관", domain: "minsu-photo.depl.site", views: 890, status: "published", updatedAt: "1일 전" },
  { id: 3, name: "사이드 프로젝트", domain: "side-project.depl.site", views: 0, status: "draft", updatedAt: "3일 전" },
];

const recentActivity = [
  { id: 1, action: "페이지 수정", target: "소개 페이지", site: "민수의 포트폴리오", time: "2시간 전" },
  { id: 2, action: "이미지 업로드", target: "갤러리", site: "민수 사진관", time: "5시간 전" },
  { id: 3, action: "게시글 작성", target: "블로그", site: "민수의 포트폴리오", time: "1일 전" },
  { id: 4, action: "사이트 생성", target: "사이드 프로젝트", site: "", time: "3일 전" },
  { id: 5, action: "도메인 연결", target: "minsu-photo.depl.site", site: "민수 사진관", time: "5일 전" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  published: { label: "게시중", color: "bg-green-100 text-green-700" },
  draft: { label: "임시저장", color: "bg-gray-100 text-gray-500" },
};

export default function MypageDashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">안녕하세요, 김민수님</h1>
        <p className="mt-1 text-sm text-gray-500">내 사이트 현황을 한눈에 확인하세요.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <span className="text-lg">{stat.icon}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* My Sites */}
      <div className="bg-white rounded-2xl border border-gray-100 mb-6">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">내 사이트</h2>
          <div className="flex items-center gap-3">
            <Link href="/mypage/sites" className="text-xs text-indigo-600 hover:underline">
              전체 보기
            </Link>
            <Link
              href="/mypage/sites"
              className="text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg transition-colors"
            >
              + 새 사이트
            </Link>
          </div>
        </div>
        <div className="divide-y divide-gray-50">
          {mySites.map((site) => (
            <div key={site.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-gray-900">{site.name}</p>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusMap[site.status].color}`}>
                    {statusMap[site.status].label}
                  </span>
                </div>
                <p className="text-xs text-indigo-500 mt-0.5">{site.domain}</p>
              </div>
              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-medium text-gray-900">{site.views.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">방문자</p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-xs text-gray-400">{site.updatedAt}</p>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs font-medium text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-3 py-1.5 rounded-lg transition-colors">
                    편집
                  </button>
                  {site.status === "published" && (
                    <button className="text-xs font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
                      보기
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">최근 활동</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between px-5 py-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0" />
                <p className="text-sm text-gray-700 truncate">
                  <span className="font-medium">{activity.action}</span>
                  <span className="text-gray-400"> · </span>
                  <span className="text-gray-500">{activity.target}</span>
                  {activity.site && (
                    <>
                      <span className="text-gray-400"> · </span>
                      <span className="text-gray-400">{activity.site}</span>
                    </>
                  )}
                </p>
              </div>
              <span className="text-xs text-gray-400 flex-shrink-0 ml-4">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
