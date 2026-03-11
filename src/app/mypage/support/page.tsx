"use client";

import { useState } from "react";

const myTickets = [
  { id: 1, title: "커스텀 도메인 연결이 안 돼요", date: "2026-03-11 14:30", status: "open", lastReply: "아직 답변이 없습니다." },
  { id: 2, title: "결제 영수증 재발급 요청", date: "2026-03-05 10:20", status: "resolved", lastReply: "영수증을 이메일로 재발급해드렸습니다." },
  { id: 3, title: "페이지 에디터에서 이미지가 안 올라가요", date: "2026-02-22 16:45", status: "resolved", lastReply: "이미지 용량 제한은 5MB입니다. 확인 부탁드립니다." },
];

const faqs = [
  { q: "사이트를 삭제하면 복구할 수 있나요?", a: "삭제 후 30일 이내에는 고객센터를 통해 복구 요청이 가능합니다. 30일 이후에는 영구 삭제됩니다." },
  { q: "커스텀 도메인은 어떻게 연결하나요?", a: "내 사이트 > 설정 > 도메인 메뉴에서 안내에 따라 DNS 설정을 하면 10분 내에 연결됩니다." },
  { q: "팀 멤버에게 어떤 권한을 줄 수 있나요?", a: "관리자, 편집자, 뷰어 3가지 역할을 부여할 수 있습니다. 관리자는 모든 권한, 편집자는 콘텐츠 수정, 뷰어는 열람만 가능합니다." },
  { q: "플랜을 다운그레이드하면 데이터가 삭제되나요?", a: "데이터는 유지되지만, 하위 플랜의 제한을 초과하는 항목(사이트 수, 팀 멤버 등)은 비활성화될 수 있습니다." },
];

const statusMap: Record<string, { label: string; color: string }> = {
  open: { label: "대기중", color: "bg-yellow-100 text-yellow-700" },
  "in-progress": { label: "처리중", color: "bg-blue-100 text-blue-700" },
  resolved: { label: "완료", color: "bg-gray-100 text-gray-500" },
};

export default function SupportPage() {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", content: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">문의 / 지원</h1>
        <p className="mt-1 text-sm text-gray-500">궁금한 점이 있으시면 문의해주세요.</p>
      </div>

      <div className="space-y-6 max-w-3xl">
        {/* New Ticket */}
        <div className="flex justify-end">
          <button
            onClick={() => setShowForm(!showForm)}
            className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            {showForm ? "취소" : "새 문의하기"}
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="text-base font-semibold text-gray-900 mb-4">새 문의</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">제목</label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="문의 제목을 입력하세요"
                  className="w-full px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">내용</label>
                <textarea
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                  rows={5}
                  placeholder="문의 내용을 자세히 작성해주세요"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400 resize-none"
                />
              </div>
              <div className="flex justify-end">
                <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-xl transition-colors">
                  문의 보내기
                </button>
              </div>
            </div>
          </div>
        )}

        {/* My Tickets */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">내 문의 내역</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {myTickets.map((ticket) => (
              <div key={ticket.id} className="px-5 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-gray-900">{ticket.title}</h3>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusMap[ticket.status].color}`}>
                      {statusMap[ticket.status].label}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400">{ticket.date}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{ticket.lastReply}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">자주 묻는 질문</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="text-sm font-medium text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
