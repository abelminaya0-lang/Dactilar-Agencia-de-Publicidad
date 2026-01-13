
import React, { useState } from 'react';
import { Sparkles, Send, Loader2, Target } from 'lucide-react';
import { generateMarketingStrategy, StrategyResponse } from '../services/gemini';

const AiConcierge: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<StrategyResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    try {
      const data = await generateMarketingStrategy(input);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="concierge" className="py-32 px-8 lg:px-16 bg-zinc-950/50 border-t border-zinc-900/50">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="mb-16 space-y-6">
          <span className="flex items-center justify-center gap-2 text-brand-red font-bold tracking-widest text-[10px] uppercase">
            <Sparkles size={14} /> Dactilar AI Strategy
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter text-brand-light leading-none">
            Tu Blueprint <br />Estratégico
          </h2>
          <p className="text-brand-gray text-base md:text-lg max-w-xl mx-auto font-light">
            Ingresa los detalles de tu negocio y nuestra IA creativa diseñará una hoja de ruta personalizada para tu crecimiento.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="relative w-full max-w-xl group mb-20">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ej: Marca de moda que busca ventas en TikTok..."
            className="w-full bg-black border border-zinc-800 p-6 pr-20 rounded-none text-sm outline-none focus:border-brand-violet transition-all text-brand-light placeholder:text-zinc-700 shadow-2xl"
          />
          <button 
            disabled={loading}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-brand-red text-white flex items-center justify-center hover:bg-brand-violet transition-colors disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
          </button>
        </form>

        <div className="w-full relative min-h-[300px]">
          {result ? (
            <div className="w-full bg-black p-8 md:p-12 border border-brand-violet/20 animate-in fade-in zoom-in duration-700 text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-brand-red/10 text-brand-red rounded-full flex items-center justify-center shrink-0">
                  <Target size={32} />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-brand-light">{result.title}</h3>
                  <span className="text-[10px] text-brand-red font-bold uppercase tracking-[0.3em]">{result.vibe}</span>
                </div>
              </div>
              
              <p className="text-brand-gray text-base leading-relaxed mb-10 pb-8 border-b border-zinc-900">{result.summary}</p>
              
              <div className="space-y-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-brand-light opacity-60">Pilares Estratégicos</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-zinc-900/50 border border-zinc-800">
                      <div className="w-2 h-2 rounded-full bg-brand-red mt-1 shrink-0" />
                      <span className="text-xs text-brand-gray/90 leading-snug">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <button className="mt-12 w-full py-5 bg-brand-red text-white hover:bg-brand-violet transition-all text-xs font-bold uppercase tracking-widest shadow-xl">
                Agendar Consultoría Gratuita
              </button>
            </div>
          ) : (
            <div className="text-center opacity-40 py-12">
              <div className="w-24 h-24 border-2 border-dashed border-zinc-800 rounded-full flex items-center justify-center mx-auto mb-8">
                <Sparkles size={32} className="text-zinc-700" />
              </div>
              <p className="text-brand-gray italic font-serif">A la espera de tu visión...</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AiConcierge;
