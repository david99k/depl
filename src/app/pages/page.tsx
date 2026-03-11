"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { label: "전체", value: "all" },
  { label: "소개", value: "about" },
  { label: "서비스", value: "service" },
  { label: "갤러리", value: "gallery" },
  { label: "연락처", value: "contact" },
  { label: "이벤트", value: "event" },
  { label: "채용", value: "recruit" },
];

const pages = [
  {
    id: "about-minimal",
    name: "미니멀 소개",
    category: "about",
    description: "깔끔한 타이포 중심의 회사 소개 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    blocks: ["히어로", "비전/미션", "연혁", "팀 소개"],
    color: "bg-slate-600",
    popular: true,
  },
  {
    id: "about-visual",
    name: "비주얼 소개",
    category: "about",
    description: "풀스크린 이미지와 스토리텔링으로 구성된 소개 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    blocks: ["풀스크린 히어로", "스토리 섹션", "수치 강조", "CTA"],
    color: "bg-violet-600",
    popular: false,
  },
  {
    id: "service-grid",
    name: "서비스 그리드",
    category: "service",
    description: "서비스 항목을 카드 그리드로 보여주는 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    blocks: ["서비스 히어로", "카드 그리드", "프로세스", "FAQ"],
    color: "bg-indigo-600",
    popular: true,
  },
  {
    id: "service-detail",
    name: "서비스 상세",
    category: "service",
    description: "하나의 서비스를 깊이 있게 설명하는 랜딩 스타일 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    blocks: ["기능 소개", "스크린샷", "비교표", "고객 후기"],
    color: "bg-blue-600",
    popular: false,
  },
  {
    id: "gallery-masonry",
    name: "메이슨리 갤러리",
    category: "gallery",
    description: "이미지를 메이슨리 레이아웃으로 멋지게 배열하는 갤러리",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    blocks: ["필터 탭", "메이슨리 그리드", "라이트박스", "페이지네이션"],
    color: "bg-emerald-600",
    popular: true,
  },
  {
    id: "gallery-slider",
    name: "슬라이더 갤러리",
    category: "gallery",
    description: "풀스크린 슬라이더로 작품을 하나씩 감상하는 갤러리",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    blocks: ["풀스크린 슬라이더", "썸네일 네비게이션", "작품 설명"],
    color: "bg-teal-600",
    popular: false,
  },
  {
    id: "contact-form",
    name: "문의하기",
    category: "contact",
    description: "지도와 폼이 포함된 기본 문의 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    blocks: ["연락처 정보", "문의 폼", "지도", "운영시간"],
    color: "bg-amber-600",
    popular: true,
  },
  {
    id: "event-landing",
    name: "이벤트 랜딩",
    category: "event",
    description: "세미나, 컨퍼런스 등 이벤트 홍보 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    blocks: ["카운트다운", "연사 소개", "타임테이블", "등록 폼"],
    color: "bg-rose-600",
    popular: false,
  },
  {
    id: "recruit-page",
    name: "채용 안내",
    category: "recruit",
    description: "채용 공고와 회사 문화를 소개하는 페이지",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    blocks: ["회사 문화", "복지 혜택", "채용 목록", "지원하기"],
    color: "bg-pink-600",
    popular: false,
  },
];

export default function PagesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredPages =
    activeCategory === "all"
      ? pages
      : pages.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            필요한 페이지를 <span className="text-indigo-600">조합하세요</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            소개, 서비스, 갤러리, 문의 등 다양한 페이지 템플릿을 골라 사이트를 완성하세요.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { step: "1", title: "페이지 선택", desc: "필요한 페이지 템플릿을 고르세요" },
              { step: "2", title: "블록 편집", desc: "드래그 앤 드롭으로 구성을 바꾸세요" },
              { step: "3", title: "콘텐츠 채우기", desc: "텍스트와 이미지를 넣으면 완성" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === cat.value
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Page Grid */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPages.map((page) => (
              <div
                key={page.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                {/* Top Color Bar + Icon */}
                <div className={`relative h-40 ${page.color} flex items-center justify-center`}>
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                    {page.icon}
                  </div>
                  {page.popular && (
                    <span className="absolute top-3 right-3 bg-white text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full shadow">
                      인기
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {page.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {page.description}
                  </p>

                  {/* Blocks */}
                  <div className="mt-4">
                    <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                      포함된 블록
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {page.blocks.map((block) => (
                        <span
                          key={block}
                          className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600"
                        >
                          {block}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-5 flex items-center gap-3">
                    <Link
                      href="/signup"
                      className="flex-1 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl transition-colors"
                    >
                      사용하기
                    </Link>
                    <button className="flex-1 text-center text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-4 py-2.5 rounded-xl transition-colors">
                      미리보기
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredPages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">해당 카테고리에 페이지가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            페이지를 자유롭게 조합해보세요
          </h2>
          <p className="mt-3 text-gray-600">
            테마를 선택한 후 원하는 페이지를 추가하고 블록을 편집해 나만의 사이트를 만드세요.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/themes"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-xl transition-colors"
            >
              테마부터 둘러보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
