export default async function Home() {
  let dados = null;
  let erro = null;

  try {
    // Este fetch roda no SERVIDOR (dentro da rede da AWS/Docker), não no navegador do cliente.
    // Ele acessa o backend pelo nome do container na rede interna.
    const url = process.env.BACKEND_URL || 'http://localhost:25000/dados';
    
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) throw new Error("Falha na requisição");
    dados = await res.json();
  } catch (e) {
    erro = e.message;
  }

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Projeto AWS + Docker + Next.js (Seguro)</h1>
      <p>O back-end está <strong>protegido</strong> e invisível para a internet!</p>
      
      <button style={{ padding: '10px', marginBottom: '10px' }}>
        Dados já carregados pelo Servidor
      </button>

      <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: '5px' }}>
        {erro ? `Erro ao conectar: ${erro}` : JSON.stringify(dados, null, 2)}
      </pre>
    </main>
  );
}