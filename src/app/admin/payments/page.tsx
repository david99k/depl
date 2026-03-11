"use client";

const monthlySummary = [
  { label: "이번 달 매출", value: "₩48,720,000" },
  { label: "신규 결제", value: "127건" },
  { label: "환불", value: "3건 (₩59,700)" },
  { label: "활성 구독", value: "1,847명" },
];

const recentPayments = [
  { id: "PAY-20260311-001", user: "김민수", plan: "Pro", amount: 19900, method: "카드", date: "2026-03-11 14:23", status: "completed" },
  { id: "PAY-20260311-002", user: "박준호", plan: "Business", amount: 49900, method: "카드", date: "2026-03-11 12:05", status: "completed" },
  { id: "PAY-20260311-003", user: "강서윤", plan: "Pro (연간)", amount: 190800, method: "계좌이체", date: "2026-03-11 09:41", status: "completed" },
  { id: "PAY-20260310-004", user: "한예린", plan: "Business (연간)", amount: 478800, method: "카드", date: "2026-03-10 18:32", status: "completed" },
  { id: "PAY-20260310-005", user: "최수진", plan: "Pro", amount: 19900, method: "카드", date: "2026-03-10 11:17", status: "refunded" },
  { id: "PAY-20260309-006", user: "이지은", plan: "Pro", amount: 19900, method: "카카오페이", date: "2026-03-09 15:44", status: "completed" },
  { id: "PAY-20260309-007", user: "윤도현", plan: "Pro", amount: 19900, method: "카드", date: "2026-03-09 10:08", status: "completed" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  completed: { label: "완료", color: "bg-green-100 text-green-700" },
  refunded: { label: "환불", color: "bg-red-100 text-red-700" },
  pending: { label: "대기", color: "bg-yellow-100 text-yellow-700" },
};

export default function AdminPaymentsPage() {
  return (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">결제 / 매출</h1>
        <p className="mt-1 text-sm text-gray-500">2026년 3월 매출 현황</p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {monthlySummary.map((item) => (
          <div key={item.label} className="bg-white rounded-2xl border border-gray-100 p-5">
            <p className="text-xs font-medium text-gray-500">{item.label}</p>
            <p className="mt-2 text-xl font-bold text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Payments */}
      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">최근 결제 내역</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">결제 ID</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">회원</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden sm:table-cell">플랜</th>
                <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">금액</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden md:table-cell">결제수단</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3 hidden lg:table-cell">일시</th>
                <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-5 py-3">상태</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentPayments.map((p) => (
                <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3">
                    <span className="text-xs font-mono text-gray-500">{p.id}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className="text-sm font-medium text-gray-900">{p.user}</span>
                  </td>
                  <td className="px-5 py-3 hidden sm:table-cell">
                    <span className="text-sm text-gray-600">{p.plan}</span>
                  </td>
                  <td className="px-5 py-3 text-right">
                    <span className="text-sm font-medium text-gray-900">₩{p.amount.toLocaleString()}</span>
                  </td>
                  <td className="px-5 py-3 hidden md:table-cell">
                    <span className="text-sm text-gray-500">{p.method}</span>
                  </td>
                  <td className="px-5 py-3 hidden lg:table-cell">
                    <span className="text-xs text-gray-400">{p.date}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusMap[p.status].color}`}>
                      {statusMap[p.status].label}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
