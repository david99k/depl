"use client";

import { useState } from "react";

const allSites = [
  { id: 1, name: "민수의 포트폴리오", domain: "minsu.depl.site", owner: "김민수", theme: "크리에이티브 폴리오", pages: 5, views: 1240, status: "published" },
  { id: 2, name: "카페 봄날", domain: "bomnal.depl.site", owner: "이지은", theme: "미니멀 비즈니스", pages: 4, views: 3820, status: "published" },
  { id: 3, name: "테크스타트 주식회사", domain: "techstart.co.kr", owner: "박준호", theme: "코퍼레이트 프로", pages: 12, views: 8920, status: "published" },
  { id: 4, name: "수진의 블로그", domain: "sujin-blog.depl.site", owner: "최수진", theme: "스토리 블로그", pages: 23, views: 560, status: "suspended" },
  { id: 5, name: "하늘 사진관", domain: "haneul-photo.depl.site", owner: "정하늘", theme: "포토 폴리오", pages: 3, views: 210, status: "draft" },
  { id: 6, name: "서윤 베이커리", domain: "seoyun-bakery.com", owner: "강서윤", theme: "부티크 샵", pages: 8, views: 5430, status: "published" },
  { id: 7, name: "예린 디자인 스튜디오", domain: "yerin.design", owner: "한예린", theme: "크리에이티브 폴리오", pages: 7, views: 12300, status: "published" },
  { id: 8, name: "태양 피트니스", domain: "taeyang-fit.depl.site", owner: "조태양", theme: "스타트업 랜딩", pages: 2, views: 890, status: "suspended" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  published: { label: "게시중", color: "bg-green-100 text-green-700" },
  draft: { label: "임시저장", color: "bg-gray-100 text-gray-500" },
  suspended: { label: "정지", color: "bg-red-100 text-red-700" },
};

export default function AdminSitesPage() {
  const [search, setSearch] = useState("");

  const filtered = allSites.filter(
    (s) => !search || s.name.includes(search) || s.domain.includes(search) || s.owner.includes(search)
  );

  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">사이트 관리</h1>
        <p className="mt-1 text-sm text-gray-500">전체 사이트 {allSites.length.toLocaleString()}개</p>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="사이트명, 도메인, 소유자 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md px-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400"
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">사이트</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">소유자</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">테마</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">페이지</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">조회수</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">상태</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">관리</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {filtered.map((site) => (
                <tr key={site.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <p className="text-sm font-medium text-gray-900">{site.name}</p>
                    <p className="text-xs text-indigo-500">{site.domain}</p>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className="text-sm text-gray-600">{site.owner}</span>
                  </td>
                  <td className="px-5 py-3 hidden lg:table-cell">
                    <span className="text-sm text-gray-500">{site.theme}</span>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className="text-sm text-gray-600">{site.pages}</span>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className="text-sm text-gray-600">{site.views.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusMap[site.status].color}`}>
                      {statusMap[site.status].label}
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
