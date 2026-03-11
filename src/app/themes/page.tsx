"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { label: "전체", value: "all" },
  { label: "비즈니스", value: "business" },
  { label: "포트폴리오", value: "portfolio" },
  { label: "쇼핑몰", value: "shop" },
  { label: "블로그", value: "blog" },
  { label: "랜딩페이지", value: "landing" },
  { label: "커뮤니티", value: "community" },
];

const themes = [
  {
    id: "minimal-biz",
    name: "미니멀 비즈니스",
    category: "business",
    description: "깔끔하고 신뢰감 있는 기업 소개 사이트",
    tags: ["반응형", "다크모드"],
    image: "/themes/minimal-biz.svg",
    accent: "bg-slate-100",
    popular: true,
  },
  {
    id: "creative-folio",
    name: "크리에이티브 폴리오",
    category: "portfolio",
    description: "작품을 돋보이게 하는 포트폴리오 테마",
    tags: ["애니메이션", "갤러리"],
    image: "/themes/creative-folio.svg",
    accent: "bg-violet-50",
    popular: true,
  },
  {
    id: "modern-shop",
    name: "모던 쇼핑",
    category: "shop",
    description: "세련된 상품 진열과 결제 흐름을 갖춘 쇼핑몰",
    tags: ["결제연동", "장바구니"],
    image: "/themes/boutique.svg",
    accent: "bg-emerald-50",
    popular: false,
  },
  {
    id: "story-blog",
    name: "스토리 블로그",
    category: "blog",
    description: "글에 집중할 수 있는 미니멀 블로그 테마",
    tags: ["SEO최적화", "RSS"],
    image: "/themes/minimal-biz.svg",
    accent: "bg-amber-50",
    popular: false,
  },
  {
    id: "startup-landing",
    name: "스타트업 랜딩",
    category: "landing",
    description: "전환율을 높이는 원페이지 랜딩 테마",
    tags: ["CTA최적화", "분석"],
    image: "/themes/startup-landing.svg",
    accent: "bg-indigo-50",
    popular: true,
  },
  {
    id: "community-hub",
    name: "커뮤니티 허브",
    category: "community",
    description: "활발한 소통을 위한 커뮤니티 테마",
    tags: ["게시판", "회원관리"],
    image: "/themes/startup-landing.svg",
    accent: "bg-rose-50",
    popular: false,
  },
  {
    id: "corp-pro",
    name: "코퍼레이트 프로",
    category: "business",
    description: "대규모 기업을 위한 전문적인 사이트 테마",
    tags: ["다국어", "접근성"],
    image: "/themes/minimal-biz.svg",
    accent: "bg-blue-50",
    popular: false,
  },
  {
    id: "photo-folio",
    name: "포토 폴리오",
    category: "portfolio",
    description: "사진작가를 위한 풀스크린 갤러리 테마",
    tags: ["풀스크린", "라이트박스"],
    image: "/themes/creative-folio.svg",
    accent: "bg-gray-50",
    popular: false,
  },
  {
    id: "boutique",
    name: "부티크 샵",
    category: "shop",
    description: "소규모 브랜드를 위한 감성적인 쇼핑몰",
    tags: ["위시리스트", "리뷰"],
    image: "/themes/boutique.svg",
    accent: "bg-pink-50",
    popular: true,
  },
];

export default function ThemesPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredThemes =
    activeCategory === "all"
      ? themes
      : themes.filter((t) => t.category === activeCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            마음에 드는 테마를 <span className="text-indigo-600">골라보세요</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            전문 디자이너가 만든 테마로 시작하세요. 클릭 몇 번이면 나만의 사이트가 완성됩니다.
          </p>
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

      {/* Theme Grid */}
      <section className="py-12 bg-gray-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredThemes.map((theme) => (
              <div
                key={theme.id}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-300"
              >
                {/* Preview - 호버 시 이미지가 위로 스크롤 */}
                <div className="relative h-52 overflow-hidden bg-gray-100">
                  <img
                    src={theme.image}
                    alt={`${theme.name} 미리보기`}
                    className="absolute top-0 left-0 w-full transition-transform duration-[3s] ease-in-out group-hover:-translate-y-[calc(100%-208px)]"
                  />
                  {theme.popular && (
                    <span className="absolute top-3 right-3 z-10 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                      인기
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {theme.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {theme.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {theme.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-2.5 py-1 rounded-full ${theme.accent} text-gray-700`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center gap-3">
                    <Link
                      href={`/themes/${theme.id}`}
                      className="flex-1 text-center text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2.5 rounded-xl transition-colors"
                    >
                      미리보기
                    </Link>
                    <Link
                      href="/signup"
                      className="flex-1 text-center text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-4 py-2.5 rounded-xl transition-colors"
                    >
                      사용하기
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredThemes.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg">해당 카테고리에 테마가 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            원하는 테마를 찾지 못하셨나요?
          </h2>
          <p className="mt-3 text-gray-600">
            더 많은 테마가 곧 추가됩니다. 요청하시면 맞춤 테마도 제작해드립니다.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-indigo-600 border border-indigo-200 hover:bg-indigo-50 rounded-xl transition-colors"
          >
            맞춤 테마 문의하기
          </Link>
        </div>
      </section>
    </>
  );
}
