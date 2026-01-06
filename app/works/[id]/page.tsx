import { works } from "../../data/works";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return works.map((work) => ({
    id: work.id,
  }));
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = works.find((w) => w.id === id);

  if (!work) {
    notFound();
  }

  return (
    <div className="container">
      <div style={{ marginBlock: "40px" }}>
        <Link href="/works" className="btn-outline" style={{ display: "inline-block", marginBottom: "20px" }}>
          &larr; Back to Works
        </Link>
        
        <header style={{ marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "10px", alignItems: "center", marginBottom: "10px" }}>
             <span className="tag">{work.tag}</span>
             <span style={{ color: "#666", fontSize: "14px" }}>{work.id}</span>
          </div>
          <h1 style={{ fontSize: "3rem", lineHeight: "1.1", marginBottom: "20px" }}>{work.title}</h1>
          <div style={{ display: "flex", gap: "20px", color: "#666", fontFamily: "monospace" }}>
             <span>LOCATION: {work.location}</span>
             <span>YEAR: {work.year}</span>
          </div>
        </header>

        <div style={{ 
          width: "100%", 
          aspectRatio: "16/9", 
          backgroundImage: `url(${work.image})`, 
          backgroundSize: "cover", 
          backgroundPosition: "center",
          borderRadius: "12px",
          marginBottom: "40px"
        }} />

        <div style={{ maxWidth: "800px", marginInline: "auto" }}>
           <h2 style={{ fontSize: "24px", marginBottom: "20px", fontFamily: "serif" }}>Project Overview</h2>
           <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#333", marginBottom: "40px" }}>
             {work.description}
           </p>
           
           <div style={{ padding: "30px", background: "#f5f5f5", borderRadius: "8px" }}>
             <h3 style={{ fontSize: "18px", marginBottom: "15px" }}>Technical Data</h3>
             <ul style={{ listStyle: "none", padding: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
               <li><strong>Camera:</strong> Leica M10-R</li>
               <li><strong>Lens:</strong> Summilux-M 35mm f/1.4 ASPH.</li>
               <li><strong>Film Simulation:</strong> Custom Monochrome</li>
               <li><strong>Print:</strong> Gelatin Silver Print</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
}
