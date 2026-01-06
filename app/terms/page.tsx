const sections = [
  {
    title: "01. 掲載情報の範囲",
    body: "本サイトは展示に関連する公開情報および広報資料を掲載します。未公開の作品原版、作家の個人情報、および機密性の高い内部資料は掲載の対象外となります。",
  },
  {
    title: "02. 著作権と利用許諾",
    body: "本サイトに掲載されているすべての作品、テキスト、画像、デザインの著作権は、各作家または GLASS KEY プロジェクトに帰属します。私的利用の範囲を超えて、無断で転載・複製・改変・二次利用することを禁止します。",
  },
  {
    title: "03. リンクと引用について",
    body: "本サイトへのリンクは原則として自由ですが、画像ファイルへの直接リンク（直リンク）や、フレーム内での表示など、当サイトのコンテンツであることが不明確になる形での利用はご遠慮ください。引用を行う場合は、必ず出典を明記してください。",
  },
  {
    title: "04. 免責事項",
    body: "掲載情報の正確性については細心の注意を払っておりますが、その内容の完全性、正確性、有用性を保証するものではありません。本サイトの利用により生じた直接的・間接的な損害について、当プロジェクトは一切の責任を負いません。",
  },
];

export default function TermsPage() {
  return (
    <div className="container" style={{ paddingBlock: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <header className="page-header" style={{ marginBottom: "60px", borderBottomColor: "var(--text)", borderBottomWidth: "2px" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "20px", letterSpacing: "0.05em" }}>Terms of Use</h1>
          <p style={{ color: "var(--text-light)", fontSize: "15px" }}>
            GLASS KEY Photo Archive（以下「本サイト」）の利用条件と、掲載情報の取り扱いについて規定しています。
            本サイトを利用される前に、以下の内容を必ずご確認ください。
          </p>
        </header>

        <section style={{ display: "grid", gap: "50px" }}>
          {sections.map((section) => (
            <article key={section.title}>
              <h2 style={{ fontSize: "20px", marginBottom: "15px", fontFamily: "var(--font-serif), serif", borderLeft: "4px solid var(--accent)", paddingLeft: "15px" }}>
                {section.title}
              </h2>
              <p style={{ fontSize: "16px", lineHeight: "1.8", color: "var(--text)", paddingLeft: "19px" }}>
                {section.body}
              </p>
            </article>
          ))}
        </section>

        <footer style={{ marginTop: "100px", paddingTop: "40px", borderTop: "1px solid var(--border)", textAlign: "center" }}>
          <p style={{ fontSize: "14px", color: "#999" }}>
            最終更新日：2026年1月6日
          </p>
        </footer>
      </div>
    </div>
  );
}
