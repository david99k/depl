"use client";

import { useState } from "react";

const allReports = [
  { id: 1, type: "문의", title: "커스텀 도메인 연결이 안 돼요", user: "김민수", email: "minsu@example.com", date: "2026-03-11 14:30", status: "open", content: "DNS 설정을 했는데 24시간이 지나도 연결이 안 됩니다." },
  { id: 2, type: "신고", title: "부적절한 콘텐츠 신고", user: "이지은", email: "jieun@example.com", date: "2026-03-11 12:15", status: "open", content: "example-site.depl.site에서 불법적인 콘텐츠가 게시되고 있습니다." },
  { id: 3, type: "문의", title: "결제 영수증 재발급 요청", user: "박준호", email: "junho@example.com", date: "2026-03-10 18:45", status: "resolved", content: "2월 결제 영수증을 세금계산서로 재발급해주세요." },
  { id: 4, type: "문의", title: "팀 멤버 초대 오류", user: "최수진", email: "sujin@example.com", date: "2026-03-10 15:20", status: "in-progress", content: "초대 이메일이 발송되지 않습니다." },
  { id: 5, type: "신고", title: "저작권 침해 사이트 신고", user: "정하늘", email: "haneul@example.com", date: "2026-03-10 10:05", status: "resolved", content: "제 사진을 무단으로 사용하고 있는 사이트가 있습니다." },
  { id: 6, type: "문의", title: "플랜 다운그레이드 문의", user: "강서윤", email: "seoyun@example.com", date: "2026-03-09 16:30", status: "resolved", content: "Business에서 Pro로 변경하면 데이터가 유지되나요?" },
  { id: 7, type: "문의", title: "모바일에서 에디터가 느려요", user: "한예린", email: "yerin@example.com", date: "2026-03-09 09:12", status: "open", content: "iPad에서 페이지 에디터를 사용하면 매우 느립니다." },
];

const statusMap: Record<string, { label: string; color: string }> = {
  open: { label: "대기", color: "bg-yellow-100 text-yellow-700" },
  "in-progress": { label: "처리중", color: "bg-blue-100 text-blue-700" },
  resolved: { label: "완료", color: "bg-gray-100 text-gray-500" },
};

export default function AdminReportsPage() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterType, setFilterType] = useState("all");

  const filtered = allReports.filter((r) => {
    if (filterStatus !== "all" && r.status !== filterStatus) return false;
    if (filterType !== "all" && r.type !== filterType) return false;
    return true;
  });

  const openCount = allReports.filter((r) => r.status === "open").length;

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">문의 / 신고</h1>
        <p className="mt-1 text-sm text-gray-500">
          미처리 <span className="text-yellow-600 font-semibold">{openCount}건</span> · 전체 {allReports.length}건
        </p>
      </div>

      <div className="flex gap-3 mb-6">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">모든 유형</option>
          <option value="문의">문의</option>
          <option value="신고">신고</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">모든 상태</option>
          <option value="open">대기</option>
          <option value="in-progress">처리중</option>
          <option value="resolved">완료</option>
        </select>
      </div>

      <div className="space-y-3">
        {filtered.map((report) => (
          <div key={report.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-gray-100 transition-all">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    report.type === "신고" ? "bg-red-100 text-red-600" : "bg-indigo-100 text-indigo-600"
                  }`}>
                    {report.type}
                  </span>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusMap[report.status].color}`}>
                    {statusMap[report.status].label}
                  </span>
                  <span className="text-xs text-gray-400">{report.date}</span>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{report.title}</h3>
                <p className="mt-1 text-sm text-gray-500 line-clamp-1">{report.content}</p>
                <p className="mt-2 text-xs text-gray-400">
                  {report.user} ({report.email})
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                {report.status === "open" && (
                  <button className="text-xs font-medium text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg transition-colors">
                    처리
                  </button>
                )}
                <button className="text-xs font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 px-3 py-1.5 rounded-lg transition-colors">
                  상세
                </button>
              </div>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-gray-400">해당 조건에 맞는 문의/신고가 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
