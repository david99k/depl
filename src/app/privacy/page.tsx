import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침 - DEPL",
  description: "DEPL 개인정보처리방침",
};

export default function PrivacyPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          개인정보처리방침
        </h1>
        <p className="mt-2 text-sm text-gray-400">최종 수정일: 2026년 3월 1일</p>

        <div className="mt-10 space-y-10 text-sm text-gray-700 leading-relaxed">
          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="mb-2">
              DEPL(이하 &quot;회사&quot;)은 다음 목적을 위해 개인정보를 수집·이용합니다.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>회원가입 및 본인 확인</li>
              <li>서비스 제공 및 운영</li>
              <li>요금 결제 및 정산</li>
              <li>고객 문의 응대 및 불만 처리</li>
              <li>서비스 개선 및 신규 서비스 개발</li>
              <li>마케팅 및 광고 활용 (동의한 경우에 한함)</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. 수집하는 개인정보 항목</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">구분</th>
                    <th className="text-left py-2 font-semibold text-gray-900">수집 항목</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">필수</td>
                    <td className="py-2">이메일 주소, 비밀번호, 이름(닉네임)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">선택</td>
                    <td className="py-2">전화번호, 회사명, 프로필 이미지</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">결제 시</td>
                    <td className="py-2">결제 수단 정보, 청구 주소</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">자동 수집</td>
                    <td className="py-2">IP 주소, 브라우저 정보, 접속 로그, 쿠키</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. 개인정보의 보유 및 이용 기간</h2>
            <p className="mb-2">
              회사는 개인정보 수집·이용 목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
              단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>계약 또는 청약철회에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자 불만 또는 분쟁 처리에 관한 기록: 3년</li>
              <li>웹사이트 방문 기록: 3개월</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. 개인정보의 제3자 제공</h2>
            <p>
              회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령에 의해 요구되는 경우</li>
              <li>서비스 제공을 위해 필요한 경우 (결제 대행사 등), 최소한의 정보만 제공</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. 개인정보의 처리 위탁</h2>
            <p className="mb-2">
              회사는 원활한 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">수탁업체</th>
                    <th className="text-left py-2 font-semibold text-gray-900">위탁 업무</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="py-2 pr-4">결제 대행사</td>
                    <td className="py-2">요금 결제 처리</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">클라우드 서비스 제공자</td>
                    <td className="py-2">데이터 보관 및 서비스 인프라 운영</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">이메일 발송 서비스</td>
                    <td className="py-2">알림 및 마케팅 이메일 발송</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. 이용자의 권리와 행사 방법</h2>
            <p className="mb-2">이용자는 언제든지 다음 권리를 행사할 수 있습니다.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>개인정보 열람 요구</li>
              <li>개인정보 정정·삭제 요구</li>
              <li>개인정보 처리 정지 요구</li>
              <li>회원 탈퇴 (서비스 내 설정에서 직접 처리 가능)</li>
            </ul>
            <p className="mt-2">
              위 권리 행사는 서비스 내 설정 페이지 또는 고객센터를 통해 가능하며,
              회사는 요청을 접수한 후 지체 없이 처리합니다.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. 개인정보의 파기 절차 및 방법</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>파기 절차: 이용 목적이 달성된 개인정보는 별도의 DB로 옮겨 일정 기간 보관 후 파기됩니다.</li>
              <li>파기 방법: 전자적 파일 형태의 정보는 복구할 수 없는 방법으로 삭제하며, 종이에 출력된 정보는 분쇄하거나 소각합니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. 쿠키의 사용</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>회사는 이용자에게 최적화된 서비스를 제공하기 위해 쿠키를 사용합니다.</li>
              <li>쿠키는 서비스 이용 패턴 분석, 로그인 상태 유지 등에 활용됩니다.</li>
              <li>이용자는 브라우저 설정을 통해 쿠키 수집을 거부할 수 있으며, 이 경우 서비스 이용에 일부 제한이 있을 수 있습니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. 개인정보 보호를 위한 기술적·관리적 조치</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>비밀번호 암호화 저장 (bcrypt 등 단방향 암호화)</li>
              <li>SSL/TLS를 통한 데이터 전송 구간 암호화</li>
              <li>접근 권한 관리 및 접근 통제</li>
              <li>개인정보 취급 직원 최소화 및 교육 실시</li>
              <li>정기적인 보안 점검 및 모니터링</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. 개인정보 보호 책임자</h2>
            <p className="mb-2">
              개인정보 처리에 관한 업무를 총괄하는 개인정보 보호 책임자는 다음과 같습니다.
            </p>
            <div className="bg-gray-50 rounded-xl p-4 space-y-1">
              <p><span className="text-gray-500">직책:</span> 개인정보 보호 책임자</p>
              <p><span className="text-gray-500">이메일:</span> privacy@depl.kr</p>
            </div>
            <p className="mt-3">
              이용자는 서비스를 이용하면서 발생하는 모든 개인정보 보호 관련 문의, 불만 처리, 피해 구제 등에
              관한 사항을 위 담당자에게 문의하실 수 있습니다.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. 방침의 변경</h2>
            <p>
              이 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 수정될 수 있으며,
              변경 시 서비스 내 공지사항을 통해 안내합니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
