"use client";

import Link from "next/link";
import { useState } from "react";

type Billing = "monthly" | "yearly";

const plans = [
  {
    id: "free",
    name: "Free",
    description: "개인 프로젝트나 테스트용으로 시작하기 좋은 무료 플랜",
    monthly: 0,
    yearly: 0,
    cta: "무료로 시작하기",
    highlighted: false,
    features: [
      { text: "테마 3개 사용", included: true },
      { text: "페이지 5개 생성", included: true },
      { text: "게시판 1개", included: true },
      { text: "DEPL 서브도메인", included: true },
      { text: "기본 분석", included: true },
      { text: "커스텀 도메인", included: false },
      { text: "팀 멤버 초대", included: false },
      { text: "우선 지원", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    description: "성장하는 비즈니스를 위한 프로페셔널 플랜",
    monthly: 19900,
    yearly: 15900,
    cta: "Pro 시작하기",
    highlighted: true,
    badge: "인기",
    features: [
      { text: "모든 테마 사용", included: true },
      { text: "페이지 무제한 생성", included: true },
      { text: "게시판 5개", included: true },
      { text: "커스텀 도메인 연결", included: true },
      { text: "고급 분석 대시보드", included: true },
      { text: "팀 멤버 3명", included: true },
      { text: "이메일 지원", included: true },
      { text: "우선 지원", included: false },
    ],
  },
  {
    id: "business",
    name: "Business",
    description: "팀 협업과 확장이 필요한 기업을 위한 플랜",
    monthly: 49900,
    yearly: 39900,
    cta: "Business 시작하기",
    highlighted: false,
    features: [
      { text: "모든 테마 사용", included: true },
      { text: "페이지 무제한 생성", included: true },
      { text: "게시판 무제한", included: true },
      { text: "커스텀 도메인 연결", included: true },
      { text: "고급 분석 대시보드", included: true },
      { text: "팀 멤버 무제한", included: true },
      { text: "우선 지원 (24시간)", included: true },
      { text: "전담 매니저 배정", included: true },
    ],
  },
];

const faqs = [
  {
    q: "무료 플랜에서 유료로 전환하면 데이터가 유지되나요?",
    a: "네, 모든 데이터와 설정이 그대로 유지됩니다. 업그레이드 즉시 추가 기능을 사용할 수 있습니다.",
  },
  {
    q: "연간 결제를 하면 얼마나 할인되나요?",
    a: "연간 결제 시 월 결제 대비 약 20% 할인된 가격으로 이용하실 수 있습니다.",
  },
  {
    q: "언제든지 플랜을 변경하거나 해지할 수 있나요?",
    a: "네, 언제든지 플랜 업그레이드, 다운그레이드, 해지가 가능합니다. 해지 시 결제 기간이 끝날 때까지 서비스를 이용할 수 있습니다.",
  },
  {
    q: "커스텀 도메인은 어떻게 연결하나요?",
    a: "Pro 이상 플랜에서 설정 > 도메인 메뉴에서 안내에 따라 DNS 설정을 하면 10분 내에 연결됩니다.",
  },
  {
    q: "환불 정책은 어떻게 되나요?",
    a: "결제 후 7일 이내에 요청하시면 전액 환불해드립니다. 7일 이후에는 잔여 기간에 대한 부분 환불이 가능합니다.",
  },
];

function formatPrice(price: number) {
  if (price === 0) return "0";
  return price.toLocaleString("ko-KR");
}

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            심플하고 <span className="text-indigo-600">투명한 요금제</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            숨겨진 비용 없이, 필요한 만큼만 사용하세요. 언제든 변경 가능합니다.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                billing === "monthly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              월간 결제
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors relative ${
                billing === "yearly"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              연간 결제
              <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan) => {
              const price = billing === "monthly" ? plan.monthly : plan.yearly;
              return (
                <div
                  key={plan.id}
                  className={`relative rounded-2xl p-6 lg:p-8 flex flex-col ${
                    plan.highlighted
                      ? "bg-indigo-600 text-white ring-2 ring-indigo-600 shadow-xl shadow-indigo-200"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {plan.badge && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  )}

                  <h3
                    className={`text-lg font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm ${
                      plan.highlighted ? "text-indigo-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mt-6 flex items-baseline gap-1">
                    <span
                      className={`text-4xl font-bold tracking-tight ${
                        plan.highlighted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {price === 0 ? "무료" : `₩${formatPrice(price)}`}
                    </span>
                    {price > 0 && (
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-indigo-200" : "text-gray-500"
                        }`}
                      >
                        /월
                      </span>
                    )}
                  </div>
                  {billing === "yearly" && price > 0 && (
                    <p
                      className={`mt-1 text-xs ${
                        plan.highlighted ? "text-indigo-200" : "text-gray-400"
                      }`}
                    >
                      연 ₩{formatPrice(price * 12)} 결제
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href="/signup"
                    className={`mt-6 block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${
                      plan.highlighted
                        ? "bg-white text-indigo-600 hover:bg-indigo-50"
                        : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                  >
                    {plan.cta}
                  </Link>

                  {/* Feature List */}
                  <ul className="mt-8 space-y-3 flex-1">
                    {plan.features.map((f) => (
                      <li key={f.text} className="flex items-start gap-3">
                        {f.included ? (
                          <svg
                            className={`w-5 h-5 flex-shrink-0 ${
                              plan.highlighted ? "text-indigo-200" : "text-indigo-500"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            className={`w-5 h-5 flex-shrink-0 ${
                              plan.highlighted ? "text-indigo-400" : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span
                          className={`text-sm ${
                            f.included
                              ? plan.highlighted
                                ? "text-white"
                                : "text-gray-700"
                              : plan.highlighted
                              ? "text-indigo-300"
                              : "text-gray-400"
                          }`}
                        >
                          {f.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Note */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              자주 묻는 질문
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-sm font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </span>
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
                  <div className="px-6 pb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            지금 무료로 시작하세요
          </h2>
          <p className="mt-3 text-gray-600">
            신용카드 없이 바로 시작할 수 있습니다. 마음에 들면 그때 업그레이드하세요.
          </p>
          <Link
            href="/signup"
            className="mt-6 inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-lg shadow-indigo-600/25"
          >
            무료로 시작하기
          </Link>
        </div>
      </section>
    </>
  );
}
