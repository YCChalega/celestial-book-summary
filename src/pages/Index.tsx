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
              Chapter 1: Information Flow is Your Lifeblood
The core thesis of the book is the necessity of creating a digital nervous system (DNS), which consists of advanced digital processes that knowledge workers utilize to make better decisions: to think, act, react, and adapt. The digital nervous system is the use of information technology to meet organizational needs, much like the human nervous system supports the human mind. The author holds the strong belief that how a company gathers, manages, and uses information will determine whether it succeeds or fails. Information flow is described as the lifeblood of a company, enabling it to maximize the capabilities of its people and learn constantly from customers.
A world-class DNS releases "rivers of information," allowing businesses to achieve significant improvements in efficiency, growth, and profits. Crucially, the DNS facilitates information work (the processing of information by brains or computers), which accounts for 50 to 60 percent of the total value produced by an industrialized country. A successful DNS ensures that facts and ideas quickly surface from deep within the organization and allows companies to act fast.
A key argument is that all employees who can use data should have access to it, not just senior executives. Middle managers, in particular, need accurate, useful data instantly because they are the people who need to act on it, enabling them to be more effective and identify unusual events. The DNS transforms managers into "business thinkers" by providing data for analysis. The shift from paper processes to electronic tools is essential, as demonstrated by Microsoft's reduction of paper forms from over 1,000 to sixty, resulting in savings of at least $40 million.
Chapter 2: Commerce: The Internet Changes Everything
The Internet is fundamentally changing every business. This transformation is driven by inevitable technological shifts, including the widespread daily use of computers, high-speed connections to the World Wide Web, and e-mail becoming as common as the telephone. These advances will lead to three primary business changes: 1) Most contacts (business-customer, business-business, people-government) will shift to digital and self-service models. 2) Customer service will become the primary means of adding value, moving human interaction from low-value, routine tasks to high-value personal service. 3) Companies must adopt internal digital processes to constantly adapt to competition and customer demands.
The Internet is creating a more perfect market (Adam Smith's ideal market), where buyers and sellers easily find one another, allowing for easy price comparison and targeted product offerings. This environment dictates that the middleman must add value. Intermediaries who simply transfer goods or information face obsolescence, while those who create personalized, complex services will thrive.
Businesses must embrace the Web lifestyle, which is defined by the natural reliance on the Web for communication, learning, commerce, and news. Companies must treat e-commerce as more than just a means to a sale, focusing on building strong customer relationships and using the Internet to deliver services that were previously impossible. The Web workstyle also allows organizations to concentrate on core skills and outsource non-core functions, enabling small companies to act as virtual large companies by quickly forming and dissolving project teams.
Chapter 3: Manage Knowledge to Improve Strategic Thought
A key management principle is the imperative to seek bad news and ensure it travels fast within the organization. A digital nervous system serves as an early-warning system, allowing a company to quickly organize its "brain-power" to respond to serious problems. Microsoft's rapid prioritization of the Internet in 1995 demonstrated how a digital culture, supported by systems like e-mail, empowers employees to drive critical strategic changes and ensures that decisions are based on facts and good ideas.
To improve quality and product development, companies must focus on their most unhappy customers, using technology to gather detailed information on their experiences and swiftly communicate this intelligence to the appropriate product design teams. Furthermore, leaders must "Know your numbers" by capturing all business data digitally from the start and analyzing it at every stage, including interactions with customers and suppliers. Digital data is essential because it allows knowledge workers to study, annotate, and quickly act on trends, unlike static paper reports.
The increasing efficiency of computer systems should be used to move people into thinking work. Software should handle routine data processing, freeing knowledge workers to concentrate on unusual events and high-value, creative tasks. Data mining—finding useful patterns in large datasets—is critical for anticipating customer tastes, improving targeted advertising (personalization), and optimizing product strategies. This focus on knowledge sharing and managing information flow is essential for increasing a company's Corporate IQ, allowing the entire organization to build on individual ideas and act with collective purpose.
Chapter 4: Special Projects
Chapter 4 details how the digital nervous system can solve major inefficiencies in large, complex sectors. In health care, the system is characterized by massive paperwork (20-30% of annual costs) and isolated information silos ("islands"). A digital infrastructure built on PC and Web technologies can integrate emergency services, patient history, doctor orders, and billing, reducing costs and providing systematic, long-term health trend analysis. The primary barriers to improvement are the lack of information systems in doctors' offices and the complexity of integrating existing stand-alone systems.
Government can achieve immense efficiency and improved service by adopting digital processes. Governments should put all internal information online, use e-mail, and focus services around the citizen's needs (rather than agency structure), ideally creating a single point of online contact. Examples like the An Post kiosks in Ireland demonstrate how integrated digital services can handle multiple functions (passports, benefits, licenses) efficiently and reduce fraud. By adopting digital leadership, governments can encourage their entire country to move toward an information market, making all businesses more competitive.
In education, PCs and the Internet empower students as pure knowledge workers and provide teachers with new communication and instructional tools. Technology must be used to teach with technology, rather than simply teaching about it. Digital tools enable a hands-on approach to learning, allowing students to explore information at their own speed and accommodating different learning styles. Creative programs, such as those that involve families in financing their children's computers, help close the gap between the "haves" and "have-nots" and prepare students for the digital world.
Chapter 5: Expect the Unexpected
The fundamental change required by the digital age is that companies must use technology to change their actions and organizational structure, making business responses nearly instantaneous. Strategic thought must become a continuous process integrated into the daily flow of business, not an isolated annual event.
A key organizational principle is that companies cannot be managed totally from the center. Instead, leaders must empower employees (knowledge workers) with excellent tools and abundant information. This supports the philosophy that workers are creative and will do more if enabled and encouraged to think and act. The DNS extends the human capacity to think and work together.
To fully achieve business at the speed of thought, every internal and external interaction must be digital, including every file, record, and process, and partners and customers must be allowed appropriate access to data. The author argues that the tools of the digital age extend the capacities of our minds, just as the tools of the Industrial Age extended our muscles. Ultimately, while the digital world creates uncertainty for businesses, those leaders who embrace the digital nervous system will achieve success, yielding benefits for society through improved products, services, and lower costs.



              
              
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
