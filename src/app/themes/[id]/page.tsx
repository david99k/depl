"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

const themes: Record<string, { name: string; image: string }> = {
  "minimal-biz": { name: "미니멀 비즈니스", image: "/themes/minimal-biz.svg" },
  "creative-folio": { name: "크리에이티브 폴리오", image: "/themes/creative-folio.svg" },
  "modern-shop": { name: "모던 쇼핑", image: "/themes/boutique.svg" },
  "story-blog": { name: "스토리 블로그", image: "/themes/minimal-biz.svg" },
  "startup-landing": { name: "스타트업 랜딩", image: "/themes/startup-landing.svg" },
  "community-hub": { name: "커뮤니티 허브", image: "/themes/startup-landing.svg" },
  "corp-pro": { name: "코퍼레이트 프로", image: "/themes/minimal-biz.svg" },
  "photo-folio": { name: "포토 폴리오", image: "/themes/creative-folio.svg" },
  "boutique": { name: "부티크 샵", image: "/themes/boutique.svg" },
};

type ViewMode = "desktop" | "tablet" | "mobile";

const viewWidths: Record<ViewMode, string> = {
  desktop: "100%",
  tablet: "768px",
  mobile: "375px",
};

export default function ThemePreviewPage() {
  const params = useParams();
  const id = params.id as string;
  const theme = themes[id];
  const [viewMode, setViewMode] = useState<ViewMode>("desktop");

  if (!theme) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg mb-4">테마를 찾을 수 없습니다.</p>
          <Link href="/themes" className="text-indigo-600 hover:underline">
            테마 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-gray-100">
      {/* Top Toolbar */}
      <div className="flex-shrink-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4 shadow-sm">
        {/* Left: Logo + Back + Theme Name */}
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">D</span>
            </div>
            <span className="text-lg font-bold text-gray-900 hidden sm:inline">DEPL</span>
          </Link>
          <div className="h-5 w-px bg-gray-200 flex-shrink-0" />
          <Link
            href="/themes"
            className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors flex-shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="hidden sm:inline">테마 목록</span>
          </Link>
          <div className="h-5 w-px bg-gray-200 flex-shrink-0 hidden sm:block" />
          <h1 className="text-sm font-medium text-gray-600 truncate hidden sm:block">{theme.name}</h1>
        </div>

        {/* Center: Responsive Toggle */}
        <div className="hidden sm:flex items-center gap-1 bg-gray-100 rounded-lg p-1">
          {/* Desktop */}
          <button
            onClick={() => setViewMode("desktop")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "desktop"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
            title="데스크톱"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
          {/* Tablet */}
          <button
            onClick={() => setViewMode("tablet")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "tablet"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
            title="태블릿"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>
          {/* Mobile */}
          <button
            onClick={() => setViewMode("mobile")}
            className={`p-2 rounded-md transition-colors ${
              viewMode === "mobile"
                ? "bg-white text-indigo-600 shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
            title="모바일"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Right: CTA */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <Link
            href="/signup"
            className="text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 px-5 py-2 rounded-lg transition-colors"
          >
            이 테마로 시작하기
          </Link>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 overflow-auto flex justify-center bg-gray-100">
        <div
          className="transition-all duration-500 ease-in-out bg-white shadow-2xl"
          style={{
            width: viewWidths[viewMode],
            maxWidth: "100%",
            ...(viewMode !== "desktop" && {
              margin: "24px 0",
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid #e5e7eb",
            }),
          }}
        >
          {/* Browser Chrome (tablet/mobile only) */}
          {viewMode !== "desktop" && (
            <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-3 gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
              <div className="flex-1 mx-4">
                <div className="h-4 bg-gray-200 rounded-full max-w-[200px] mx-auto" />
              </div>
            </div>
          )}

          {/* Theme Image */}
          <img
            src={theme.image}
            alt={`${theme.name} 미리보기`}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
