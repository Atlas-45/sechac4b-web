import { changelog } from "../../data/changelog";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return changelog.map((entry) => ({
    id: entry.id,
  }));
}

export default async function ChangelogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const entry = changelog.find((e) => e.id === id);

  if (!entry) {
    notFound();
  }

  return (
    <div className="container content-box">
      <div style={{ marginBlock: "20px" }}>
        <Link href="/changelog" className="btn-outline" style={{ display: "inline-block", marginBottom: "20px" }}>
          &larr; Back to List
        </Link>
      </div>

      <header className="page-header">
        <span className="tag" style={{ marginBottom: "10px", display: "inline-block" }}>{entry.date}</span>
        <h1>{entry.title}</h1>
      </header>

      <div 
        className="changelog-content" 
        style={{ fontSize: "16px", lineHeight: "1.8", color: "#333" }}
        dangerouslySetInnerHTML={{ __html: entry.content }} 
      />
    </div>
  );
}
