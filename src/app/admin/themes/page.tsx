"use client";

const themes = [
  { id: 1, name: "미니멀 비즈니스", category: "비즈니스", users: 342, status: "active" },
  { id: 2, name: "크리에이티브 폴리오", category: "포트폴리오", users: 289, status: "active" },
  { id: 3, name: "모던 쇼핑", category: "쇼핑몰", users: 178, status: "active" },
  { id: 4, name: "스토리 블로그", category: "블로그", users: 456, status: "active" },
  { id: 5, name: "스타트업 랜딩", category: "랜딩페이지", users: 523, status: "active" },
  { id: 6, name: "커뮤니티 허브", category: "커뮤니티", users: 134, status: "active" },
  { id: 7, name: "코퍼레이트 프로", category: "비즈니스", users: 98, status: "active" },
  { id: 8, name: "포토 폴리오", category: "포트폴리오", users: 201, status: "active" },
  { id: 9, name: "부티크 샵", category: "쇼핑몰", users: 167, status: "draft" },
];

export default function AdminThemesPage() {
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">테마 관리</h1>
          <p className="mt-1 text-sm text-gray-500">등록된 테마 {themes.length}개</p>
        </div>
        <button className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
          테마 추가
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {themes.map((theme) => (
          <div key={theme.id} className="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-lg hover:shadow-gray-100 transition-all">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-indigo-50 text-indigo-600">
                {theme.category}
              </span>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                theme.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
              }`}>
                {theme.status === "active" ? "활성" : "임시저장"}
              </span>
            </div>
            <h3 className="text-base font-semibold text-gray-900">{theme.name}</h3>
            <p className="mt-1 text-sm text-gray-500">사용 중: {theme.users}개 사이트</p>
            <div className="mt-4 flex gap-2">
              <button className="flex-1 text-xs font-medium text-indigo-600 border border-indigo-200 hover:bg-indigo-50 px-3 py-2 rounded-lg transition-colors">
                편집
              </button>
              <button className="flex-1 text-xs font-medium text-gray-500 border border-gray-200 hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                미리보기
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
