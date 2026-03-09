export default function PortfolioLandingPage() {
  const projects = [
    {
      title: 'Projetos SAP & ABAP',
      description:
        'Melhorias, automações e integrações no SAP ECC com foco em processos industriais, relatórios e eficiência operacional.',
      tags: ['ABAP', 'SAP ECC', 'WM', 'Integrações'],
    },
    {
      title: 'Dashboards e Dados',
      description:
        'Painéis e análises para apoiar tomada de decisão, acompanhamento de indicadores e visualização de processos.',
      tags: ['Power BI', 'APIs', 'Excel', 'Indicadores'],
    },
    {
      title: 'Sistemas Web Internos',
      description:
        'Aplicações simples e funcionais para controle interno, formulários, autenticação e automação de rotinas.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python'],
    },
  ];

  const skills = [
    'ABAP',
    'SAP ECC',
    'JavaScript',
    'Python',
    'HTML/CSS',
    'SQL',
    'Power BI',
    'APIs REST',
    'Git',
    'Flask',
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_30%),radial-gradient(circle_at_left,rgba(168,85,247,0.18),transparent_25%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-sm text-blue-200">
                Portfólio profissional
              </span>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                Luis Guilherme
              </h1>
              <p className="mt-4 text-xl text-neutral-300 md:text-2xl">
                Desenvolvedor ABAP com foco em soluções práticas, automação de processos e projetos web internos.
              </p>
              <p className="mt-6 max-w-xl text-base leading-7 text-neutral-400">
                Crio soluções que conectam tecnologia, operação e resultado. Trabalho com SAP,
                integrações, dashboards e aplicações sob medida para resolver problemas reais do dia a dia.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#projetos"
                  className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
                >
                  Ver projetos
                </a>
                <a
                  href="#contato"
                  className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                >
                  Entrar em contato
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
                    <p className="text-sm text-neutral-400">Experiência</p>
                    <p className="mt-2 text-2xl font-semibold">SAP + Web</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5">
                    <p className="text-sm text-neutral-400">Foco</p>
                    <p className="mt-2 text-2xl font-semibold">Automação</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-neutral-900/70 p-5 sm:col-span-2">
                    <p className="text-sm text-neutral-400">Diferencial</p>
                    <p className="mt-2 text-lg text-neutral-200">
                      Soluções simples, visuais e funcionais para ambiente corporativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Sobre mim</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-neutral-300">
              Sou um desenvolvedor focado em transformar necessidade de negócio em solução técnica.
              Atuo com SAP ABAP, automações, integrações e também no desenvolvimento de aplicações
              web internas para apoiar operação, controle e análise de dados.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-neutral-400">
              Meu objetivo com este portfólio é apresentar meus projetos, minha forma de pensar
              e a capacidade de entregar algo útil, organizado e com valor real.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Skills principais</h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-neutral-900 px-4 py-2 text-sm text-neutral-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projetos" className="border-y border-white/10 bg-white/5">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10">
          <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Projetos em destaque</h2>
              <p className="mt-3 text-neutral-400">
                Alguns tipos de projeto que representam bem meu perfil profissional.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-[28px] border border-white/10 bg-neutral-950 p-6 shadow-xl"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-4 text-sm leading-7 text-neutral-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-neutral-400">01</p>
            <h3 className="mt-3 text-xl font-semibold">Visão de negócio</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Entendimento do problema antes do código, pensando em impacto real para o usuário.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-neutral-400">02</p>
            <h3 className="mt-3 text-xl font-semibold">Execução prática</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Desenvolvimento objetivo, com foco em simplicidade, clareza e manutenção.
            </p>
          </div>
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-neutral-400">03</p>
            <h3 className="mt-3 text-xl font-semibold">Melhoria contínua</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-400">
              Evolução constante em tecnologias, integração de sistemas e organização de soluções.
            </p>
          </div>
        </div>
      </section>

      <section id="contato" className="border-t border-white/10 bg-neutral-900">
        <div className="mx-auto max-w-4xl px-6 py-16 text-center md:px-10">
          <h2 className="text-3xl font-bold md:text-4xl">Vamos conversar?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
            Você pode usar esta seção para colocar seu e-mail, LinkedIn, GitHub e uma chamada para contato.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:lgopereiraa@gmail.com"
              className="rounded-2xl bg-white px-5 py-3 font-medium text-neutral-950"
            >
              lgopereiraa@gmail.com
            </a>
            <a
              href="https://github.com/Strokeraa"
              className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/luis-guilherme-pereiraa/"
              className="rounded-2xl border border-white/15 px-5 py-3 font-medium text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
