"use client";

import { useState } from "react";

const allNotices = [
  { id: 1, title: "서비스 정기 점검 안내 (3/15)", category: "점검", date: "2026-03-10", published: true },
  { id: 2, title: "v2.4 업데이트: 새로운 테마 3종 추가", category: "업데이트", date: "2026-03-05", published: true },
  { id: 3, title: "요금제 개편 안내 (4월 적용)", category: "안내", date: "2026-03-01", published: true },
  { id: 4, title: "커스텀 도메인 SSL 인증서 자동 갱신 지원", category: "업데이트", date: "2026-02-20", published: true },
  { id: 5, title: "개인정보처리방침 변경 안내", category: "안내", date: "2026-02-15", published: true },
  { id: 6, title: "신규 페이지 블록 10종 추가 예정", category: "업데이트", date: "2026-03-11", published: false },
];

const categoryColors: Record<string, string> = {
  점검: "bg-yellow-100 text-yellow-700",
  업데이트: "bg-indigo-100 text-indigo-700",
  안내: "bg-gray-100 text-gray-700",
};

export default function AdminNoticesPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", category: "안내", content: "" });

  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">공지사항</h1>
          <p className="mt-1 text-sm text-gray-500">등록된 공지 {allNotices.length}개</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
        >
          {showForm ? "취소" : "공지 작성"}
        </button>
      </div>

      {/* Write Form */}
      {showForm && (
        <div className="bg-white rounded-2xl border border-gray-100 p-6 mb-6">
          <div className="space-y-4">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="공지 제목"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="flex-1 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400"
              />
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                className="px-4 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="안내">안내</option>
                <option value="업데이트">업데이트</option>
                <option value="점검">점검</option>
              </select>
            </div>
            <textarea
              placeholder="공지 내용을 입력하세요..."
              rows={5}
              value={form.content}
              onChange={(e) => setForm({ ...form, content: e.target.value })}
              className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-gray-400 resize-none"
            />
            <div className="flex gap-2 justify-end">
              <button className="px-4 py-2.5 text-sm font-medium text-gray-600 border border-gray-200 hover:bg-gray-50 rounded-xl transition-colors">
                임시저장
              </button>
              <button className="px-4 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors">
                게시하기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notices List */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="divide-y divide-gray-50">
          {allNotices.map((notice) => (
            <div key={notice.id} className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-3 min-w-0">
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${categoryColors[notice.category]}`}>
                  {notice.category}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{notice.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{notice.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                  notice.published ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
                }`}>
                  {notice.published ? "게시중" : "임시저장"}
                </span>
                <button className="text-xs text-gray-400 hover:text-indigo-600 font-medium transition-colors">
                  편집
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
