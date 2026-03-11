import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관 - DEPL",
  description: "DEPL 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          이용약관
        </h1>
        <p className="mt-2 text-sm text-gray-400">최종 수정일: 2026년 3월 1일</p>

        <div className="mt-10 space-y-10 text-sm text-gray-700 leading-relaxed">
          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제1조 (목적)</h2>
            <p>
              이 약관은 DEPL(이하 &quot;회사&quot;)이 제공하는 웹사이트 빌더 서비스(이하 &quot;서비스&quot;)의
              이용 조건과 절차, 회사와 이용자 간의 권리·의무 및 책임사항, 기타 필요한 사항을 규정함을
              목적으로 합니다.
            </p>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제2조 (정의)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>&quot;서비스&quot;란 회사가 제공하는 웹사이트 제작, 호스팅, 관리 등 관련 제반 서비스를 말합니다.</li>
              <li>&quot;이용자&quot;란 이 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 말합니다.</li>
              <li>&quot;회원&quot;이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
              <li>&quot;콘텐츠&quot;란 이용자가 서비스를 통해 제작·등록·게시한 텍스트, 이미지, 파일 등 일체의 정보를 말합니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제3조 (약관의 효력 및 변경)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>이 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.</li>
              <li>회사는 합리적인 사유가 발생할 경우 관련 법령에 위배되지 않는 범위 안에서 이 약관을 변경할 수 있으며, 변경된 약관은 적용일자 7일 전부터 공지합니다.</li>
              <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 탈퇴할 수 있습니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제4조 (서비스의 제공 및 변경)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>회사는 다음과 같은 서비스를 제공합니다.
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>웹사이트 테마 제공 및 커스터마이징</li>
                  <li>웹사이트 호스팅 및 도메인 연결</li>
                  <li>게시판 및 페이지 관리 기능</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
              </li>
              <li>회사는 서비스의 내용을 변경할 수 있으며, 변경 사항은 서비스 내 공지를 통해 알립니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제5조 (서비스 이용 계약)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>서비스 이용 계약은 이용자가 약관에 동의하고 회원가입을 신청한 후, 회사가 이를 승낙함으로써 성립합니다.</li>
              <li>회사는 다음 각 호에 해당하는 경우 가입을 거절하거나 사후에 이용 계약을 해지할 수 있습니다.
                <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                  <li>타인의 명의를 이용한 경우</li>
                  <li>허위 정보를 기재한 경우</li>
                  <li>기타 회사가 정한 이용 요건을 충족하지 못한 경우</li>
                </ul>
              </li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제6조 (이용자의 의무)</h2>
            <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다.</p>
            <ul className="list-disc list-inside space-y-1">
              <li>타인의 정보를 도용하는 행위</li>
              <li>회사가 게시한 정보를 무단으로 변경하는 행위</li>
              <li>서비스를 이용하여 법령 또는 공서양속에 반하는 행위</li>
              <li>회사의 지식재산권을 침해하는 행위</li>
              <li>서비스의 안정적 운영을 방해하는 행위</li>
            </ul>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제7조 (유료 서비스 및 결제)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>유료 서비스의 이용 요금, 결제 방법, 환불 정책 등은 해당 서비스 안내 페이지에 별도로 게시합니다.</li>
              <li>결제 후 7일 이내에 요청 시 전액 환불이 가능하며, 7일 이후에는 잔여 기간에 대한 부분 환불이 가능합니다.</li>
              <li>이용자가 요금제를 변경하는 경우, 변경 시점부터 새로운 요금이 적용됩니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제8조 (콘텐츠의 권리 및 관리)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>이용자가 서비스 내에 게시한 콘텐츠의 저작권은 이용자에게 귀속됩니다.</li>
              <li>회사는 이용자의 콘텐츠를 서비스 운영 및 개선 목적 외에 사용하지 않습니다.</li>
              <li>법령에 위반되거나 타인의 권리를 침해하는 콘텐츠는 사전 통지 없이 삭제될 수 있습니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제9조 (면책 조항)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 서비스를 제공할 수 없는 경우 책임을 면합니다.</li>
              <li>회사는 이용자의 귀책사유로 인한 서비스 이용 장애에 대해 책임을 지지 않습니다.</li>
              <li>회사는 이용자가 서비스를 통해 기대하는 수익이나 서비스를 통해 얻은 자료에 대해 책임을 지지 않습니다.</li>
            </ol>
          </article>

          <article>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">제10조 (분쟁 해결)</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>이 약관에 명시되지 않은 사항은 관련 법령 및 상관례에 따릅니다.</li>
              <li>서비스 이용과 관련한 분쟁은 회사의 본사 소재지를 관할하는 법원을 전속 관할로 합니다.</li>
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
}
