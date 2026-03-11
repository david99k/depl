"use client";

import { useState } from "react";

const allUsers = [
  { id: 1, name: "김민수", email: "minsu@example.com", plan: "Pro", sites: 3, date: "2026-01-15", status: "active" },
  { id: 2, name: "이지은", email: "jieun@example.com", plan: "Free", sites: 1, date: "2026-02-03", status: "active" },
  { id: 3, name: "박준호", email: "junho@example.com", plan: "Business", sites: 7, date: "2025-11-20", status: "active" },
  { id: 4, name: "최수진", email: "sujin@example.com", plan: "Pro", sites: 2, date: "2026-01-28", status: "suspended" },
  { id: 5, name: "정하늘", email: "haneul@example.com", plan: "Free", sites: 1, date: "2026-03-10", status: "active" },
  { id: 6, name: "강서윤", email: "seoyun@example.com", plan: "Pro", sites: 4, date: "2025-12-05", status: "active" },
  { id: 7, name: "윤도현", email: "dohyun@example.com", plan: "Free", sites: 0, date: "2026-03-01", status: "active" },
  { id: 8, name: "한예린", email: "yerin@example.com", plan: "Business", sites: 12, date: "2025-09-14", status: "active" },
  { id: 9, name: "조태양", email: "taeyang@example.com", plan: "Pro", sites: 2, date: "2026-02-19", status: "suspended" },
  { id: 10, name: "서지호", email: "jiho@example.com", plan: "Free", sites: 1, date: "2026-03-08", status: "active" },
];

const planColors: Record<string, string> = {
  Free: "bg-gray-100 text-gray-700",
  Pro: "bg-indigo-100 text-indigo-700",
  Business: "bg-amber-100 text-amber-700",
};

export default function AdminUsersPage() {
  const [search, setSearch] = useState("");
  const [filterPlan, setFilterPlan] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const filtered = allUsers.filter((u) => {
    if (search && !u.name.includes(search) && !u.email.includes(search)) return false;
    if (filterPlan !== "all" && u.plan !== filterPlan) return false;
    if (filterStatus !== "all" && u.status !== filterStatus) return false;
    return true;
  });

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">회원 관리</h1>
        <p className="mt-1 text-sm text-gray-500">전체 회원 {allUsers.length.toLocaleString()}명</p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          placeholder="이름 또는 이메일로 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400"
        />
        <select
          value={filterPlan}
          onChange={(e) => setFilterPlan(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">모든 플랜</option>
          <option value="Free">Free</option>
          <option value="Pro">Pro</option>
          <option value="Business">Business</option>
        </select>
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">모든 상태</option>
          <option value="active">활성</option>
          <option value="suspended">정지</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">회원</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">플랜</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">사이트</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">가입일</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">상태</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-gray-500">{user.name[0]}</span>
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                        <p className="text-xs text-gray-400 truncate">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${planColors[user.plan]}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className="text-sm text-gray-600">{user.sites}개</span>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className="text-sm text-gray-500">{user.date}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      user.status === "active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}>
                      {user.status === "active" ? "활성" : "정지"}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <button className="text-xs text-gray-400 hover:text-indigo-600 font-medium transition-colors">
                      상세
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-gray-400">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
