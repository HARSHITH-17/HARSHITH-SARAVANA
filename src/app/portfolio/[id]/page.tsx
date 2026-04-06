import Link from "next/link";
import { ArrowLeft, Target, Wrench, CheckCircle } from "lucide-react";

export default async function ProjectDetails({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const projectName = resolvedParams.id.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  
  // Map project IDs to their high-res high-resolution images
  const imageMap: Record<string, string> = {
    "cad-cam-implementation": "/portfolio/cad-implementation.png",
    "cnc-optimization": "/portfolio/cnc-optimization.png",
    "technical-training": "/portfolio/technical-training.png",
    "mould-design": "/portfolio/mould-design.png",
    "workflow-automation": "/portfolio/workflow-automation.png",
    "client-consulting": "/portfolio/client-consulting.png"
  };

  const projectImage = imageMap[resolvedParams.id] || "/portfolio/cad-implementation.png";

  return (
    <div className="pt-32 pb-20 container mx-auto px-6">
      <Link href="/portfolio" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-10">
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>
      
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="h-[500px] glass-card overflow-hidden relative group">
            <img 
              src={projectImage} 
              alt={projectName} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="space-y-6 text-gray-300">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Case Study: <br/><span className="text-gradient hover:text-blue-400 transition-colors">{projectName}</span></h1>
            
            <h2 className="text-2xl text-white font-semibold flex items-center gap-2 mt-10"><Target className="text-blue-500" /> The Problem</h2>
            <p className="leading-relaxed">
              The client faced significant challenges in standardizing their production workflow. Cycle times were exceeding target thresholds by 20%, and tooling wear was unusually high due to unoptimized roughing strategies which compromised component precision and margin targets.
            </p>
            
            <h2 className="text-2xl text-white font-semibold flex items-center gap-2 mt-10"><Wrench className="text-blue-500" /> The Solution</h2>
            <p className="leading-relaxed">
              We completely re-engineered the process layout and digital twin model. Utilizing advanced high-end CAM software and optimized CAD representations, we deployed dynamic milling toolpaths that maintained consistent chip loads across varying geometries, avoiding sudden tool stress.
            </p>
            
            <h2 className="text-2xl text-white font-semibold flex items-center gap-2 mt-10"><CheckCircle className="text-green-500" /> Results</h2>
            <ul className="space-y-4">
              <li className="flex gap-4 p-4 glass-card">
                <div className="text-xl font-bold text-white w-16 shrink-0 shrink-0 text-center text-blue-400">35%</div>
                <div>Reduction in total machining cycle time, unlocking significant machine capacity.</div>
              </li>
              <li className="flex gap-4 p-4 glass-card">
                <div className="text-xl font-bold text-white w-16 shrink-0 shrink-0 text-center text-blue-400">40%</div>
                <div>Increase in tool life predictability by utilizing constant engagement angles.</div>
              </li>
              <li className="flex gap-4 p-4 glass-card">
                <div className="text-xl font-bold text-white w-16 shrink-0 shrink-0 text-center text-blue-400">100%</div>
                <div>Elimination of manual benching rework on finished precision parts.</div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="glass-card p-8 border-t-4 border-blue-500">
            <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-sm text-gray-500">Project Specifics</h3>
            <div className="space-y-5 border-l-2 border-white/10 pl-4">
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Industry</div>
                <div className="text-white font-medium">Aerospace / Manufacturing</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Software Ecosystem</div>
                <div className="text-white font-medium">Fusion 360, PowerMill</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-semibold tracking-wider mb-1">Implementation Time</div>
                <div className="text-white font-medium">3 Weeks via Agile Sprints</div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 bg-blue-600/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-colors" />
            <h3 className="font-semibold text-white mb-3 text-xl relative z-10">Need similar results?</h3>
            <p className="text-sm text-gray-400 mb-6 relative z-10">Schedule a strategy call to discuss how we can streamline and optimize your critical manufacturing nodes.</p>
            <Link href="/contact" className="block text-center w-full py-3.5 rounded-xl bg-white hover:bg-gray-200 text-black font-semibold transition-colors relative z-10">
              Start a Conversation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
