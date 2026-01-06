import Link from "next/link";

const assets = [
  {
    title: "プレスキット（概要）",
    desc: "展示概要、ディレクターコメント、ステートメント。",
    href: "/press/press-kit.txt",
    size: "1.2 MB",
  },
  {
    title: "掲載クレジット",
    desc: "作家名、会場、協力クレジットの一覧。",
    href: "/press/credits.txt",
    size: "450 KB",
  },
  {
    title: "画像リスト",
    desc: "公開可能な画像の整理とファイル名一覧。",
    href: "/press/image-list.txt",
    size: "820 KB",
  },
];

const guidelines = [
  { title: "利用目的", text: "用途は報道・紹介目的に限ります。商業販売物への無断転載は固くお断りします。" },
  { title: "改変の禁止", text: "画像のトリミングや色味の変更は最小限でお願いします。作品の意図を損なわないよう配慮ください。" },
  { title: "クレジット", text: "「© GLASS KEY / Writer Name」といった形式でのクレジット表記を必須としています。" },
  { title: "事前確認", text: "大きなメディアでの掲載前には、事実確認のため必ず内容の校正をお願いしております。" },
];

export default function PressPage() {
  return (
    <div className="container" style={{ paddingBlock: "80px" }}>
      <header className="page-header" style={{ textAlign: "center", borderBottom: "none", marginBottom: "80px" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px", fontFamily: "var(--font-serif), serif" }}>Press Kit</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--text-light)" }}>
          取材・掲載向けの公式素材とガイドライン。
          ブランドの質を保つため、提供素材の適切な利用にご協力をお願いします。
        </p>
      </header>

      <div
        style={{
          height: "360px",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "4px",
          marginBottom: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
        }}
      >
        <span style={{ fontSize: "13px", letterSpacing: "0.2em", marginBottom: "15px", opacity: 0.9, fontWeight: "500" }}>OFFICIAL MATERIALS</span>
        <h2 style={{ fontSize: "42px", fontFamily: "var(--font-serif), serif", fontWeight: "400", letterSpacing: "0.05em" }}>Download Center</h2>
      </div>

      <section className="section" style={{ paddingTop: 0, paddingBottom: "80px" }}>
        <div style={{ display: "grid", gap: "30px" }}>
          {assets.map((asset) => (
            <article key={asset.title} className="table-row" style={{ padding: "35px", background: "var(--white)", border: "1px solid var(--border)", boxShadow: "0 5px 15px rgba(0,0,0,0.02)" }}>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "20px", marginBottom: "8px", fontFamily: "var(--font-serif), serif" }}>{asset.title}</h3>
                <p style={{ fontSize: "15px", color: "var(--text-light)" }}>{asset.desc}</p>
              </div>
              <div style={{ paddingInline: "40px", textAlign: "right", minWidth: "150px" }}>
                <span style={{ display: "block", fontSize: "12px", color: "#999", fontFamily: "monospace", marginBottom: "4px" }}>SIZE: {asset.size}</span>
                <span style={{ display: "block", fontSize: "12px", color: "#999" }}>Monthly Update</span>
              </div>
              <a className="button" href={asset.href} download style={{ minWidth: "160px", borderRadius: "0", background: "#333" }}>
                Download &darr;
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--bg-alt)", marginInline: "calc(50% - 50vw)", paddingInline: "calc(50vw - 50%)", paddingBlock: "100px" }}>
        <div className="container">
          <div className="section-head">
            <h2 className="section-title" style={{ fontFamily: "var(--font-serif), serif" }}>Guidelines</h2>
            <p className="section-sub">掲載時のルールと遵守事項</p>
          </div>
          <div className="grid grid-2" style={{ gap: "40px" }}>
            {guidelines.map((item) => (
              <div key={item.title} className="card" style={{ border: "none", boxShadow: "0 4px 20px rgba(0,0,0,0.05)", padding: "40px" }}>
                <h3 style={{ fontSize: "18px", marginBottom: "15px", display: "flex", alignItems: "center", gap: "10px", color: "var(--accent)", fontFamily: "var(--font-serif), serif" }}>
                  <span style={{ width: "6px", height: "6px", background: "var(--accent)", borderRadius: "50%" }} />
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", color: "var(--text-light)", lineHeight: "1.8" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="notice" style={{ marginTop: "80px", textAlign: "center", background: "transparent", border: "1px solid var(--border)", color: "var(--text-light)", maxWidth: "800px", marginInline: "auto" }}>
        その他の高解像度データが必要な場合は <Link href="/contact" style={{ fontWeight: "bold", textDecoration: "underline", color: "var(--text)" }}>Contact</Link> から個別にご相談ください。
      </div>
    </div>
  );
}
