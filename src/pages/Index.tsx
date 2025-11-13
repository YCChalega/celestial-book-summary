import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cloudsBg from "@/assets/clouds-bg.jpg";
import bookIcon from "@/assets/book-icon.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background with clouds */}
      <div 
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `url(${cloudsBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient overlay */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-sky-light/50 to-sky-medium/30" />

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12 animate-fade-in">
          <div className="flex justify-center mb-6">
            <img 
              src={bookIcon} 
              alt="Book icon" 
              className="w-24 h-24 drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            O Céu É o Limite
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            por <span className="font-semibold text-foreground">Maria da Silva</span>
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="text-sm">Ficção</Badge>
            <Badge variant="secondary" className="text-sm">Inspiração</Badge>
            <Badge variant="secondary" className="text-sm">Autoajuda</Badge>
          </div>
        </header>

        {/* Main Summary Card */}
        <Card className="mb-8 p-8 backdrop-blur-sm bg-card/80 border-2 border-border shadow-[0_8px_32px_-4px_hsl(207_90%_54%_/_0.2)] hover:shadow-[0_12px_40px_-4px_hsl(207_90%_54%_/_0.3)] transition-all duration-300">
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary/20 pb-3">
            Resumo da Obra
          </h2>
          <div className="space-y-4 text-foreground/90 leading-relaxed">
            <p className="text-lg">
              "O Céu É o Limite" é uma obra inspiradora que nos convida a refletir sobre nossos sonhos 
              e aspirações. Através de uma narrativa envolvente, a autora Maria da Silva explora a jornada 
              de personagens que ousam transcender suas limitações e alcançar o impossível.
            </p>
            <p className="text-lg">
              Com uma prosa poética e reflexiva, o livro nos mostra que os únicos limites reais são 
              aqueles que impomos a nós mesmos. Cada página é uma lembrança de que devemos olhar para 
              o céu com esperança e determinação.
            </p>
          </div>
        </Card>

        {/* Key Chapters */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 backdrop-blur-sm bg-card/80 border-2 border-border shadow-[0_4px_20px_-2px_hsl(207_90%_54%_/_0.15)] hover:shadow-[0_8px_28px_-2px_hsl(207_90%_54%_/_0.25)] transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Capítulo 1: Despertar
            </h3>
            <p className="text-foreground/80">
              O primeiro capítulo nos apresenta ao protagonista e sua descoberta de que a vida pode 
              ser muito mais do que a rotina monótona que conhecemos.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/80 border-2 border-border shadow-[0_4px_20px_-2px_hsl(207_90%_54%_/_0.15)] hover:shadow-[0_8px_28px_-2px_hsl(207_90%_54%_/_0.25)] transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-2xl">🌟</span>
              Capítulo 2: Ascensão
            </h3>
            <p className="text-foreground/80">
              Acompanhamos a jornada de superação pessoal, onde cada desafio é uma oportunidade 
              de crescimento e transformação interior.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/80 border-2 border-border shadow-[0_4px_20px_-2px_hsl(207_90%_54%_/_0.15)] hover:shadow-[0_8px_28px_-2px_hsl(207_90%_54%_/_0.25)] transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-2xl">🦋</span>
              Capítulo 3: Transformação
            </h3>
            <p className="text-foreground/80">
              Neste capítulo crucial, testemunhamos a metamorfose completa do personagem, 
              que finalmente compreende seu verdadeiro potencial.
            </p>
          </Card>

          <Card className="p-6 backdrop-blur-sm bg-card/80 border-2 border-border shadow-[0_4px_20px_-2px_hsl(207_90%_54%_/_0.15)] hover:shadow-[0_8px_28px_-2px_hsl(207_90%_54%_/_0.25)] transition-all duration-300">
            <h3 className="text-xl font-bold text-primary mb-3 flex items-center gap-2">
              <span className="text-2xl">☁️</span>
              Capítulo 4: Além das Nuvens
            </h3>
            <p className="text-foreground/80">
              O desfecho emocionante mostra que quando acreditamos em nossos sonhos, 
              somos capazes de alcançar alturas inimagináveis.
            </p>
          </Card>
        </div>

        {/* Key Lessons */}
        <Card className="p-8 backdrop-blur-sm bg-card/80 border-2 border-border shadow-[0_8px_32px_-4px_hsl(207_90%_54%_/_0.2)]">
          <h2 className="text-3xl font-bold text-foreground mb-6 border-b-2 border-primary/20 pb-3">
            Lições Principais
          </h2>
          <ul className="space-y-4 text-foreground/90">
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl flex-shrink-0">•</span>
              <span className="text-lg">Acredite no seu potencial ilimitado e nunca subestime sua capacidade de crescer</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl flex-shrink-0">•</span>
              <span className="text-lg">Os obstáculos são apenas degraus para alcançar voos mais altos</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl flex-shrink-0">•</span>
              <span className="text-lg">A jornada de autodescoberta é tão importante quanto o destino final</span>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold text-xl flex-shrink-0">•</span>
              <span className="text-lg">Compartilhar seus sonhos inspira outros a perseguirem os deles</span>
            </li>
          </ul>
        </Card>

        {/* Footer Quote */}
        <div className="mt-12 text-center">
          <blockquote className="text-2xl italic text-foreground/70 font-light">
            "O único limite é aquele que você aceita em sua mente."
          </blockquote>
          <p className="mt-2 text-muted-foreground">— Maria da Silva</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
