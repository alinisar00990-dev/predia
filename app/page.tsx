"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, FileImage, FileText, Files, Image, LockKeyhole, Menu, Search, ShieldCheck, Sparkles, WandSparkles, Zap, X, Moon, Sun, ScanText, FilePlus2, Layers3, Scissors, Minimize2, RotateCw, Stamp, Type, AudioLines } from "lucide-react";

const tools = [
  ["PDF to Word","Convert PDF files into editable Word documents.","FileText","PDF"],
  ["Word to PDF","Create polished PDFs from Word documents.","FileText","DOC"],
  ["Compress PDF","Reduce PDF size while keeping it readable.","Minimize2","PDF"],
  ["Merge PDF","Combine multiple PDFs into one document.","Files","PDF"],
  ["Split PDF","Extract the pages you need.","Scissors","PDF"],
  ["JPG to PDF","Turn images into a shareable PDF.","Image","IMG"],
  ["Image Compressor","Make images lighter for the web.","FileImage","IMG"],
  ["Image Resizer","Resize images for any destination.","ScanText","IMG"],
  ["PNG to JPG","Convert transparent PNGs to JPG.","Image","IMG"],
  ["PDF Editor","Edit, annotate and redesign your PDFs.","WandSparkles","PRO"],
  ["Word Counter","Count words, characters and reading time.","Type","TXT"],
  ["Text to Speech","Turn written content into natural audio.","AudioLines","TXT"],
  ["Rotate PDF","Correct page orientation in seconds.","RotateCw","PDF"],
  ["Add Watermark","Protect documents with a custom watermark.","Stamp","PDF"],
  ["Remove PDF Pages","Delete pages you no longer need.","FilePlus2","PDF"]
] as const;
const iconMap: Record<string, React.ElementType> = { FileText, Minimize2, Files, Scissors, Image, FileImage, ScanText, WandSparkles, Type, AudioLines, RotateCw, Stamp, FilePlus2 };
const faqs = [
  ["Are PREDIA tools free to use?","Many everyday tools are planned to be available free, with fair usage limits. Pro will unlock higher limits and advanced editor capabilities."],
  ["Are my files private?","Files are processed in your browser for the PDF editing features in this first release. Do not upload confidential documents to any future server workflow until its privacy terms are published."],
  ["Do I need to install anything?","No. PREDIA is designed to work in a modern browser on desktop, tablet and mobile."],
  ["Can I edit text already inside a PDF?","The editor can add new text and design elements. Replacing existing embedded text depends on how the PDF was created; scanned pages require OCR and are not editable as ordinary text."]
];

export default function HomePage() {
  const [query,setQuery] = useState("");
  const [menu,setMenu] = useState(false);
  const [dark,setDark] = useState(false);
  const [openFaq,setOpenFaq] = useState<number | null>(0);
  const filtered = useMemo(() => tools.filter(t => t[0].toLowerCase().includes(query.toLowerCase()) || t[1].toLowerCase().includes(query.toLowerCase())),[query]);
  return <main className={dark ? "site dark-site" : "site"}>
    <div className="announcement"><span className="announcement-dot"/> Meet the new PREDIA PDF Studio <Link href="/editor">Explore the editor <ArrowUpRight size={13}/></Link></div>
    <header className="nav-wrap"><nav className="nav container">
      <Link href="/" className="brand"><span className="brand-mark">P</span><span>PREDIA<span className="brand-dot">.</span></span></Link>
      <div className={menu ? "nav-links nav-open" : "nav-links"}>
        <Link href="/">Home</Link><a href="#tools">All Tools <ChevronDown size={13}/></a><Link href="/editor">PDF Editor <span className="mini-pro">PRO</span></Link><a href="#pricing">Pricing</a><a href="#about">About Us</a><a href="#contact">Contact</a>
      </div>
      <div className="nav-actions"><button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark ? <Sun size={17}/> : <Moon size={17}/>}</button><button className="login-btn" onClick={()=>alert("Account sign-in will be enabled when authentication is connected.")}>Log in</button><a className="btn btn-dark nav-cta" href="#pricing">Get started <ArrowUpRight size={15}/></a><button className="icon-btn mobile-menu" onClick={()=>setMenu(!menu)} aria-label="Open menu">{menu?<X/>:<Menu/>}</button></div>
    </nav></header>

    <section className="hero"><div className="hero-glow"/><div className="container hero-grid">
      <div className="hero-copy"><div className="eyebrow"><span className="eyebrow-line"/> YOUR WORKFLOW, REFINED</div>
        <h1>Powerful tools.<br/><em>Beautifully</em> simple.</h1>
        <p className="hero-sub">Everything you need to work with documents, images and ideas — thoughtfully brought together in one place.</p>
        <div className="hero-search"><Search size={19}/><input value={query} onChange={e=>{setQuery(e.target.value);document.getElementById("tools")?.scrollIntoView({behavior:"smooth"})}} placeholder="Search 15+ useful tools..."/><kbd>⌘ K</kbd></div>
        <div className="hero-buttons"><a className="btn btn-gold" href="#tools">Explore all tools <ArrowRight size={16}/></a><Link className="text-link" href="/editor">Discover PDF Studio <ArrowUpRight size={15}/></Link></div>
        <div className="trust-row"><span><ShieldCheck size={15}/> Privacy-minded</span><span><Zap size={15}/> No installation</span><span><LockKeyhole size={15}/> Simple & secure</span></div>
      </div>
      <div className="hero-art" aria-label="PREDIA document workspace illustration">
        <div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/>
        <div className="float-card float-pdf"><span className="file-icon pdf-icon"><FileText size={21}/></span><div><b>Project brief.pdf</b><small>PDF document · 2.4 MB</small></div><span className="file-check"><Check size={13}/></span></div>
        <div className="float-card float-image"><span className="file-icon image-icon"><Image size={20}/></span><div><b>Brand-assets.png</b><small>Image · 1.2 MB</small></div></div>
        <div className="mock-window"><div className="mock-top"><div className="window-dots"><i/><i/><i/></div><span>PREDIA / WORKSPACE</span><span className="mock-status">● SAVED</span></div><div className="mock-body"><div className="mock-sidebar"><b/><i/><i/><i/><i/></div><div className="mock-paper"><div className="paper-kicker">STRATEGY / 2026</div><div className="paper-title">Make room<br/>for better work.</div><div className="paper-rule"/><div className="paper-lines"><i/><i/><i/><i/></div><div className="paper-bottom"><span>PREPARED WITH PREDIA</span><b>01</b></div></div></div><div className="mock-foot"><span><span className="green-dot"/> All changes saved</span><span>100% <span className="gold-mini">✦</span></span></div></div>
        <div className="float-badge"><Sparkles size={14}/> Made for focus</div>
      </div>
    </div><div className="hero-bottom container"><span>ONE CALM SPACE FOR YOUR DIGITAL WORK</span><div><span>PDF</span><span>IMAGE</span><span>TEXT</span><span>DOCUMENTS</span></div></div></section>

    <section className="tools-section section-pad" id="tools"><div className="container">
      <div className="section-heading"><div><div className="eyebrow">THE TOOLKIT</div><h2>Good work starts with<br/><em>the right tools.</em></h2></div><p>Small tasks, big projects, everyday essentials. Find the right tool and get straight to work.</p></div>
      <div className="tools-toolbar"><div className="tools-count">POPULAR TOOLS <span>15</span></div><div className="tools-filter"><Search size={15}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Find a tool..."/></div></div>
      <div className="tool-grid">{filtered.map((t,i)=>{const Icon=iconMap[t[2]] || FileText;return <Link href={t[0]==="PDF Editor"?"/editor":"#contact"} className={t[0]==="PDF Editor"?"tool-card featured-tool":"tool-card"} key={t[0]}><div className="tool-card-top"><span className="tool-icon"><Icon size={19}/></span><span className={t[3]==="PRO"?"tool-tag pro-tag":"tool-tag"}>{t[3]}</span></div><h3>{t[0]}</h3><p>{t[1]}</p><span className="tool-arrow"><ArrowUpRight size={17}/></span></Link>})}</div>
      {filtered.length===0 && <div className="empty-search">No tools match “{query}”. Try another search.</div>}
      <div className="center-action"><a className="btn btn-outline" href="#tools" onClick={()=>setQuery("")}>View all tools <ArrowRight size={15}/></a></div>
    </div></section>

    <section className="studio-section section-pad"><div className="container studio-grid"><div className="studio-copy"><div className="eyebrow light-eyebrow"><span className="eyebrow-line"/> THE SIGNATURE EXPERIENCE</div><div className="pro-pill"><Sparkles size={13}/> PREDIA PRO</div><h2>Your documents.<br/><em>Your vision.</em></h2><p>Meet PDF Studio — a more considered way to edit, annotate and shape your documents. Bring clarity to every page with a workspace designed around your work.</p><ul className="feature-list"><li><Check size={16}/> Add text, images and design elements</li><li><Check size={16}/> Organize, duplicate and remove pages</li><li><Check size={16}/> Export your finished document as PDF</li></ul><div className="studio-actions"><Link href="/editor" className="btn btn-gold">Open PDF Studio <ArrowUpRight size={16}/></Link><a href="#pricing" className="text-link light-link">Explore plans <ArrowRight size={15}/></a></div></div>
      <div className="studio-visual"><div className="studio-glow"/><div className="studio-window"><div className="studio-window-head"><span className="studio-brand"><span className="brand-mark small-mark">P</span> PDF STUDIO</span><span className="studio-save">ALL CHANGES SAVED</span></div><div className="studio-toolbar"><span>↖</span><span>T</span><span>▧</span><span>✎</span><span>▱</span><span className="toolbar-spacer"/><span>−</span><span>100%</span><span>＋</span></div><div className="studio-workspace"><div className="studio-rail"><i/><i/><i/><i/><i/></div><div className="studio-page"><small>THE CREATIVE BRIEF</small><h3>Ideas into<br/><em>impact.</em></h3><div className="studio-page-line"/><p>Great work begins with a clear point of view. Shape your next idea into something meaningful.</p><div className="studio-page-blocks"><i/><i/><i/></div><div className="studio-page-foot">PREDIA / 2026 <b>01</b></div></div><div className="studio-properties"><b>TEXT STYLE</b><span>Editorial Serif</span><span>32 px</span><div/><b>COLOR</b><i/></div></div></div><div className="studio-caption"><span><span className="green-dot"/> A workspace that works for you</span><b>01 / 03</b></div></div>
    </div></section>

    <section className="why-section section-pad" id="about"><div className="container"><div className="section-heading"><div><div className="eyebrow">A BETTER WAY TO WORK</div><h2>Less friction.<br/><em>More flow.</em></h2></div><p>We believe useful tools should feel effortless. PREDIA brings everyday productivity into one focused, thoughtfully designed space.</p></div><div className="why-grid"><article><span className="why-icon"><WandSparkles/></span><h3>Thoughtfully simple</h3><p>Clear interfaces and purposeful features that help you finish the task, not learn another app.</p></article><article><span className="why-icon"><LockKeyhole/></span><h3>Privacy-conscious</h3><p>Browser-based PDF editing keeps your document work on your device in this release.</p></article><article><span className="why-icon"><Layers3/></span><h3>One connected space</h3><p>PDF, image and text utilities gathered into a consistent, easy-to-navigate toolkit.</p></article></div></div></section>

    <section className="steps-section section-pad"><div className="container"><div className="eyebrow">A CLEARER WORKFLOW</div><h2>Three steps. <em>That's it.</em></h2><div className="steps-grid"><div><span>01</span><h3>Choose your tool</h3><p>Find the task you want to complete from the PREDIA toolkit.</p></div><div><span>02</span><h3>Make it yours</h3><p>Upload a document or start with a blank workspace and make your edits.</p></div><div><span>03</span><h3>Take it with you</h3><p>Export your result and get back to what matters.</p></div></div></div></section>

    <section className="pricing-section section-pad" id="pricing"><div className="container"><div className="pricing-head"><div className="eyebrow">SIMPLE, TRANSPARENT PLANS</div><h2>Room to grow.<br/><em>Never more than you need.</em></h2><p>Start with the essentials. Upgrade when your workflow asks for more.</p></div><div className="pricing-grid"><article className="price-card"><div className="price-label">THE ESSENTIALS</div><h3>Free</h3><p>For everyday tasks and getting started.</p><div className="price-amount">$0 <small>/ forever</small></div><a href="#tools" className="btn btn-outline full-btn">Get started</a><div className="price-divider"/><b>Includes</b><ul><li><Check/> Core online tools</li><li><Check/> Basic PDF editing</li><li><Check/> Standard export options</li><li><Check/> Browser-based workspace</li></ul></article><article className="price-card price-pro"><div className="price-label">FOR YOUR BEST WORK <span className="pro-pill">COMING SOON</span></div><h3>Pro</h3><p>For people who need more from every page.</p><div className="price-amount">Coming soon</div><a href="mailto:hello@predia.app?subject=PREDIA%20Pro%20updates" className="btn btn-gold full-btn">Get Pro updates <ArrowUpRight size={15}/></a><div className="price-divider"/><b>Planned benefits</b><ul><li><Check/> Advanced editing tools</li><li><Check/> Premium templates & fonts</li><li><Check/> Higher usage limits</li><li><Check/> Priority processing</li></ul></article></div><p className="pricing-note">Payments and subscriptions are not connected yet. Pro is presented as a planned offering, not an active checkout.</p></div></section>

    <section className="quote-section"><div className="container quote-inner"><div className="quote-mark">“</div><blockquote>Good tools don't get in the way.<br/><em>They make good work possible.</em></blockquote><span>THE PREDIA PRINCIPLE</span></div></section>

    <section className="faq-section section-pad"><div className="container faq-grid"><div><div className="eyebrow">GOOD TO KNOW</div><h2>Questions,<br/><em>answered.</em></h2><p>Still curious? We're happy to help you find your way around PREDIA.</p><a href="mailto:hello@predia.app" className="text-link">Talk to our team <ArrowUpRight size={15}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?null:i)}><span>{q}</span><span className="faq-plus">{openFaq===i?"−":"+"}</span></button>{openFaq===i&&<p>{a}</p>}</div>)}</div></div></section>

    <section className="newsletter-section" id="contact"><div className="container newsletter"><div><div className="eyebrow light-eyebrow">A NOTE FROM PREDIA</div><h2>Make space for<br/><em>better work.</em></h2><p>Product notes, useful ideas and new tools. No noise.</p></div><form onSubmit={e=>{e.preventDefault();alert("Thanks for your interest. Newsletter sign-up will be connected when an email provider is configured.")}}><label htmlFor="email">YOUR EMAIL ADDRESS</label><div className="newsletter-input"><input id="email" type="email" placeholder="you@example.com" required/><button aria-label="Subscribe"><ArrowRight/></button></div><small>By subscribing, you agree to receive occasional PREDIA updates.</small></form></div></section>

    <footer className="footer"><div className="container"><div className="footer-main"><div><Link href="/" className="brand footer-brand"><span className="brand-mark">P</span><span>PREDIA<span className="brand-dot">.</span></span></Link><p>A calmer way to get things done.<br/>Tools for the work that matters.</p></div><div className="footer-col"><b>EXPLORE</b><a href="#tools">All tools</a><Link href="/editor">PDF Studio</Link><a href="#pricing">Pricing</a></div><div className="footer-col"><b>COMPANY</b><a href="#about">About PREDIA</a><a href="mailto:hello@predia.app">Contact</a><a href="mailto:hello@predia.app?subject=Privacy">Privacy</a></div><div className="footer-col"><b>FOLLOW ALONG</b><a href="mailto:hello@predia.app">Email us <ArrowUpRight size={13}/></a><span className="footer-note">Built for better work.</span></div></div><div className="footer-bottom"><span>© 2026 PREDIA. All rights reserved.</span><span>DESIGNED WITH INTENTION <span className="gold-mini">✦</span></span></div></div></footer>
  </main>;
}