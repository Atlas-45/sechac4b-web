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
    <div className="container">
      <header className="page-header">
        <h1>Works</h1>
        <p>
          展示ごとの作品アーカイブ一覧です。会場と公開年を記録しています。
          詳細な来歴や非公開素材は掲載していません。
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="badge-grid">
          {tags.map((tag) => (
            <span key={tag} className="tag" data-tag={tag}>
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="grid grid-3">
        {works.map((work) => (
          <Link href={`/works/${work.id}`} key={work.id} className="card work-card" data-id={work.id}>
            <div className="work-img" style={{ backgroundImage: `url(${work.image})` }} />
            <div className="work-body">
              <span className="tag">{work.tag}</span>
              <h3 className="work-title" style={{ fontSize: "18px", marginTop: "10px" }}>{work.title}</h3>
              <p className="work-meta">
                {work.location} / {work.year}
              </p>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
