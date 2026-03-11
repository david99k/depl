"use client";

import Link from "next/link";

const stats = [
  { label: "전체 회원", value: "12,847", change: "+324", up: true, href: "/admin/users" },
  { label: "활성 사이트", value: "3,291", change: "+89", up: true, href: "/admin/sites" },
  { label: "이번 달 매출", value: "₩48,720,000", change: "+12.5%", up: true, href: "/admin/payments" },
  { label: "미처리 문의", value: "23", change: "-5", up: false, href: "/admin/reports" },
];

const recentUsers = [
  { id: 1, name: "김민수", email: "minsu@example.com", plan: "Pro", date: "2026-03-11", status: "active" },
  { id: 2, name: "이지은", email: "jieun@example.com", plan: "Free", date: "2026-03-11", status: "active" },
  { id: 3, name: "박준호", email: "junho@example.com", plan: "Business", date: "2026-03-10", status: "active" },
  { id: 4, name: "최수진", email: "sujin@example.com", plan: "Pro", date: "2026-03-10", status: "suspended" },
  { id: 5, name: "정하늘", email: "haneul@example.com", plan: "Free", date: "2026-03-10", status: "active" },
];

const recentReports = [
  { id: 1, type: "문의", title: "커스텀 도메인 연결이 안 돼요", user: "김민수", date: "2026-03-11", status: "open" },
  { id: 2, type: "신고", title: "부적절한 콘텐츠 신고", user: "이지은", date: "2026-03-11", status: "open" },
  { id: 3, type: "문의", title: "결제 영수증 재발급 요청", user: "박준호", date: "2026-03-10", status: "resolved" },
  { id: 4, type: "문의", title: "팀 멤버 초대 오류", user: "최수진", date: "2026-03-10", status: "in-progress" },
];

const planColors: Record<string, string> = {
  Free: "bg-gray-100 text-gray-700",
  Pro: "bg-indigo-100 text-indigo-700",
  Business: "bg-amber-100 text-amber-700",
};

const statusLabels: Record<string, { label: string; color: string }> = {
  active: { label: "활성", color: "bg-green-100 text-green-700" },
  suspended: { label: "정지", color: "bg-red-100 text-red-700" },
  open: { label: "대기", color: "bg-yellow-100 text-yellow-700" },
  "in-progress": { label: "처리중", color: "bg-blue-100 text-blue-700" },
  resolved: { label: "완료", color: "bg-gray-100 text-gray-500" },
};

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">대시보드</h1>
        <p className="mt-1 text-sm text-gray-500">DEPL 서비스 전체 현황을 확인하세요.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-gray-100 transition-all"
          >
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <p className="mt-2 text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className={`mt-1 text-xs font-medium ${stat.up ? "text-green-600" : "text-red-500"}`}>
              {stat.change} 이번 달
            </p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Users */}
        <div className="bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">최근 가입 회원</h2>
            <Link href="/admin/users" className="text-xs text-indigo-600 hover:underline">
              전체 보기
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between px-5 py-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-gray-500">{user.name[0]}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                    <p className="text-xs text-gray-400 truncate">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${planColors[user.plan]}`}>
                    {user.plan}
                  </span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusLabels[user.status].color}`}>
                    {statusLabels[user.status].label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-2xl border border-gray-100">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">최근 문의 / 신고</h2>
            <Link href="/admin/reports" className="text-xs text-indigo-600 hover:underline">
              전체 보기
            </Link>
          </div>
          <div className="divide-y divide-gray-50">
            {recentReports.map((report) => (
              <div key={report.id} className="px-5 py-3">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      report.type === "신고" ? "bg-red-100 text-red-600" : "bg-indigo-100 text-indigo-600"
                    }`}>
                      {report.type}
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusLabels[report.status].color}`}>
                      {statusLabels[report.status].label}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{report.date}</span>
                </div>
                <p className="text-sm font-medium text-gray-900 truncate">{report.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{report.user}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 bg-white rounded-2xl border border-gray-100 p-5">
        <h2 className="text-sm font-semibold text-gray-900 mb-4">빠른 작업</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "공지사항 작성", href: "/admin/notices", color: "bg-indigo-50 text-indigo-600 hover:bg-indigo-100" },
            { label: "테마 추가", href: "/admin/themes", color: "bg-violet-50 text-violet-600 hover:bg-violet-100" },
            { label: "회원 검색", href: "/admin/users", color: "bg-emerald-50 text-emerald-600 hover:bg-emerald-100" },
            { label: "매출 리포트", href: "/admin/payments", color: "bg-amber-50 text-amber-600 hover:bg-amber-100" },
          ].map((action) => (
            <Link
              key={action.label}
              href={action.href}
              className={`flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${action.color}`}
            >
              {action.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
