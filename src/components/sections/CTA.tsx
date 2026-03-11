import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-indigo-600 rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            지금 바로 나만의 웹사이트를 만들어보세요
          </h2>
          <p className="mt-4 text-lg text-indigo-100 max-w-xl mx-auto">
            무료로 시작하세요. 마음에 드는 디자인을 골라 바로 완성할 수 있습니다.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/signup"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-indigo-600 bg-white hover:bg-indigo-50 rounded-xl transition-colors"
            >
              무료로 시작하기
            </Link>
            <Link
              href="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white border-2 border-white/30 hover:border-white/60 rounded-xl transition-colors"
            >
              요금제 보기
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
