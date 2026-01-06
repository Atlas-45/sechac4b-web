import Link from "next/link";
import { works } from "../data/works";

const tags = [
  "Monochrome",
  "Portrait",
  "Architecture",
  "Series",
  "Landscape",
  "Industrial",
];

export default function WorksPage() {
  return (
    <div className="container" style={{ paddingBlock: "60px" }}>
      <header className="page-header" style={{ marginBottom: "60px", borderBottom: "none", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>Works</h1>
        <p style={{ maxWidth: "600px", margin: "0 auto", color: "var(--text-light)" }}>
          都市の断片を記録した写真アーカイブ。
          過去の展示作品から主要なシリーズを体系的に分類し、公開しています。
        </p>
      </header>

      <section style={{ marginBottom: "60px" }}>
        <div className="badge-grid" style={{ justifyContent: "center" }}>
          <span className="tag" style={{ background: "var(--accent)", color: "white" }}>All</span>
          {tags.map((tag) => (
            <span key={tag} className="tag" data-tag={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-3">
        {works.map((work) => (
          <Link href={`/works/${work.id}`} key={work.id} className="work-card" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="work-img" style={{ backgroundImage: `url(${work.image})`, height: "240px" }} />
            <div className="work-body">
              <span className="work-cat" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>{work.tag}</span>
              <h3 className="work-title" style={{ fontSize: "20px", marginTop: "5px", marginBottom: "15px" }}>{work.title}</h3>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <p className="work-meta" style={{ fontSize: "12px", fontFamily: "monospace" }}>
                  {work.location} / {work.year}
                </p>
                <span style={{ fontSize: "12px", color: "var(--accent)" }}>View Detail &rarr;</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
