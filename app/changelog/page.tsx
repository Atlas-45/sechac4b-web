import Link from "next/link";
import { changelog } from "../data/changelog";

export default function ChangelogPage() {
  return (
    <div className="container content-box">
      <header className="page-header">
        <h1>Changelog</h1>
        <p>
          アーカイブサイトの更新履歴です。すべての変更は記録され、
          内容が分かるように短く要約しています。
        </p>
      </header>

      <section className="list">
        {changelog.map((entry) => (
          <Link key={entry.id} href={`/changelog/${entry.id}`} className="card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
            <div className="list-item">
              <strong>{entry.title}</strong>
              <span>{entry.date}</span>
            </div>
            <p className="muted">{entry.detail}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
