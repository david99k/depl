"use client";

import Link from "next/link";

const currentPlan = {
  name: "Pro",
  price: 19900,
  billing: "monthly" as const,
  nextBillingDate: "2026-04-15",
  startedAt: "2026-01-15",
};

const usage = [
  { label: "사이트", used: 3, limit: "무제한", percent: 0 },
  { label: "페이지", used: 14, limit: "무제한", percent: 0 },
  { label: "게시판", used: 2, limit: 5, percent: 40 },
  { label: "팀 멤버", used: 1, limit: 3, percent: 33 },
  { label: "저장 용량", used: 1.2, limit: 10, percent: 12, unit: "GB" },
];

const paymentHistory = [
  { id: "PAY-20260315-001", date: "2026-03-15", plan: "Pro (월간)", amount: 19900, method: "카드 ****1234", status: "completed" },
  { id: "PAY-20260215-001", date: "2026-02-15", plan: "Pro (월간)", amount: 19900, method: "카드 ****1234", status: "completed" },
  { id: "PAY-20260115-001", date: "2026-01-15", plan: "Pro (월간)", amount: 19900, method: "카드 ****1234", status: "completed" },
];

const statusMap: Record<string, { label: string; color: string }> = {
  completed: { label: "완료", color: "bg-green-100 text-green-700" },
  refunded: { label: "환불", color: "bg-red-100 text-red-700" },
};

export default function PlanPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">요금제 / 결제</h1>
        <p className="mt-1 text-sm text-gray-500">현재 플랜과 결제 내역을 확인하세요.</p>
      </div>

      <div className="space-y-6 max-w-3xl">
        {/* Current Plan */}
        <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-2xl p-6 text-white">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-indigo-200 text-sm font-medium">현재 플랜</p>
              <h2 className="text-3xl font-bold mt-1">{currentPlan.name}</h2>
              <p className="text-indigo-200 text-sm mt-2">
                ₩{currentPlan.price.toLocaleString()} / 월
              </p>
            </div>
            <Link
              href="/pricing"
              className="text-sm font-semibold bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-xl transition-colors"
            >
              플랜 변경
            </Link>
          </div>
          <div className="mt-6 flex gap-6 text-sm">
            <div>
              <p className="text-indigo-200">시작일</p>
              <p className="font-medium mt-0.5">{currentPlan.startedAt}</p>
            </div>
            <div>
              <p className="text-indigo-200">다음 결제일</p>
              <p className="font-medium mt-0.5">{currentPlan.nextBillingDate}</p>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-5">사용량</h2>
          <div className="space-y-4">
            {usage.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <span className="text-sm text-gray-500">
                    {item.used}{item.unit ? item.unit : "개"} / {typeof item.limit === "number" ? `${item.limit}${item.unit || "개"}` : item.limit}
                  </span>
                </div>
                {typeof item.limit === "number" ? (
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        item.percent > 80 ? "bg-red-500" : item.percent > 50 ? "bg-yellow-500" : "bg-indigo-500"
                      }`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                ) : (
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-indigo-200 w-[5%]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-gray-900">결제 수단</h2>
            <button className="text-xs font-medium text-indigo-600 hover:underline">변경</button>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
            <div className="w-12 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">VISA</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">**** **** **** 1234</p>
              <p className="text-xs text-gray-400">만료: 12/28</p>
            </div>
          </div>
        </div>

        {/* Payment History */}
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">결제 내역</h2>
          </div>
          <div className="divide-y divide-gray-50">
            {paymentHistory.map((payment) => (
              <div key={payment.id} className="flex items-center justify-between px-5 py-4">
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900">{payment.plan}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{payment.date} · {payment.method}</p>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="text-sm font-semibold text-gray-900">₩{payment.amount.toLocaleString()}</span>
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusMap[payment.status].color}`}>
                    {statusMap[payment.status].label}
                  </span>
                  <button className="text-xs text-gray-400 hover:text-indigo-600 font-medium transition-colors">
                    영수증
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cancel */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-base font-semibold text-gray-900 mb-2">구독 해지</h2>
          <p className="text-sm text-gray-500 mb-4">
            해지하면 현재 결제 기간({currentPlan.nextBillingDate})까지 서비스를 이용할 수 있으며, 이후 Free 플랜으로 전환됩니다.
          </p>
          <button className="text-sm font-medium text-red-600 border border-red-200 hover:bg-red-50 px-4 py-2 rounded-xl transition-colors">
            구독 해지하기
          </button>
        </div>
      </div>
    </>
  );
}
