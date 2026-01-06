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
    <div className="container" style={{ paddingBlock: "80px" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <div style={{ marginBottom: "40px" }}>
          <Link href="/changelog" className="btn-outline">
            &larr; Back to News
          </Link>
        </div>

        <header style={{ 
          marginBottom: "60px", 
          borderBottom: "1px solid var(--border)", 
          paddingBottom: "40px" 
        }}>
          <span style={{ 
            display: "inline-block", 
            padding: "8px 16px", 
            background: "var(--accent)", 
            color: "white", 
            borderRadius: "4px", 
            fontSize: "14px", 
            fontWeight: "bold",
            marginBottom: "20px" 
          }}>
            {entry.date}
          </span>
          <h1 style={{ 
            fontFamily: "var(--font-serif), serif", 
            fontSize: "clamp(28px, 4vw, 40px)", 
            lineHeight: "1.3" 
          }}>
            {entry.title}
          </h1>
        </header>

        <div 
          className="changelog-content" 
          style={{ 
            fontSize: "18px", 
            lineHeight: "1.8", 
            color: "var(--text)" 
          }}
        >
          {/* 
            Since we don't have a prose class in global css, 
            we rely on simple tag styles. In a real app we'd use 'prose' from tailwind.
            We added a style block wrapper to target children.
          */}
          <style>{`
            .changelog-content p { margin-bottom: 1.5em; }
            .changelog-content ul { margin-bottom: 1.5em; padding-left: 1.5em; }
            .changelog-content li { margin-bottom: 0.5em; }
            .changelog-content strong { color: var(--text); font-weight: 700; }
          `}</style>
          
          <div dangerouslySetInnerHTML={{ __html: entry.content }} />
        </div>
        
        <div style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid var(--border)" }}>
             <p style={{ color: "var(--text-light)", fontSize: "14px", textAlign: "center" }}>
               GLASS KEY Photo Archive - Update Log
             </p>
        </div>
      </div>
    </div>
  );
}
