import Link from "next/link";
import {notFound} from "next/navigation";
import {nav,quickLinks,programmes} from "@/lib/site";
const known = ["about","academics","admissions","research","people","students","campus","accreditation","notices","tenders","news","contact"];
const descriptions:Record<string,string> = {
 about:"Learn about the University's history, vision, governance, leadership and institutional commitments.",
 academics:"Explore academic programmes, academic calendars, examinations, the library and learning resources.",
 admissions:"Find programme information, admission notices, prospectuses and application guidance.",
 research:"Discover research centres, projects, scholarly publications, seminars and institutional collaborations.",
 people:"Meet the University's leadership, faculty, academic offices and administrative staff.",
 students:"Access student governance, societies, legal aid, placements, internships, scholarships and support services.",
 campus:"Explore campus facilities, accommodation, sports, health and student life.",
 accreditation:"Access NAAC, SSR, AQAR, IQAC and institutional disclosures.",
 notices:"Official university notices, circulars and notifications. Published content will be connected to the CMS.",
 tenders:"Procurement notices, tender documents, corrigenda and award information.",
 news:"University news, announcements, events and academic updates.",
 contact:"Contact the University and find office-level contact information."
};
export default async function SectionPage({params}:{params:Promise<{section:string}>}) {
 const {section}=await params; if(!known.includes(section)) notFound();
 const title=section==="people"?"People & Administration":section[0].toUpperCase()+section.slice(1);
 const links=nav.flatMap(n=>n.links).filter(x=>x[1].startsWith("/"+section+"/"));
 const cards=section==="academics"?programmes.map(p=>[p[1],p[2],"/academics"]):links;
 return <main><header className="innerHeader"><div className="navwrap"><Link className="brand" href="/"><span className="seal">N</span><span><b>National Law University Odisha</b><small>Established under Act 4 of 2008</small></span></Link><Link className="backHome" href="/">← Home</Link></div></header><section className="innerHero"><span className="eyebrow">National Law University Odisha</span><h1>{title}</h1><p>{descriptions[section]}</p><div className="breadcrumbs"><Link href="/">Home</Link> / {title}</div></section><section className="section innerContent"><div className="sectionHead"><div><span className="eyebrow dark">Explore this section</span><h2>Information & resources</h2></div><p>Use the links below to navigate to the relevant university resource. Detailed content migration and review is part of the implementation phase.</p></div><div className="innerGrid">{cards.map((c,i)=><Link href={c[2]||"/"+section} key={c[0]+i}><small>{String(i+1).padStart(2,"0")}</small><h3>{c[0]}</h3><p>{c[1]||"Official university information and resources."}</p><b>Explore ↗</b></Link>)}</div><div className="noticeCallout"><b>Content integrity</b><p>Official documents, dates, eligibility criteria, policies and announcements must be migrated from verified NLUO sources and approved by the responsible University office before publication.</p></div></section><footer className="footer"><div className="copyright">© {new Date().getFullYear()} National Law University Odisha · <Link href="/">Return to homepage</Link></div></footer></main>
}