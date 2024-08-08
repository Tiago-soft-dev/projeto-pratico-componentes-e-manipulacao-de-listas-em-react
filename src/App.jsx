import './App.css'
import Card from './components/Card'

function App() {

  const caneta = {
    nome: 'caneta',
    imagem: 'https://img.freepik.com/fotos-gratis/renderizacao-3d-da-caneta-ai-gerada_23-2150695399.jpg?t=st=1723145728~exp=1723149328~hmac=f2a0aee50910fab2325e40981480ac5ef6bf85773e604554d1a4498c77e76585&w=740',
    preco: 5,
    precoAntigo: 7
  }

  const lapis = {
    nome: 'lápis',
    imagem: 'https://img.freepik.com/fotos-premium/set-de-canetas-e-lapis-estilizados_1265500-46386.jpg?w=996',
    preco: 2,
    precoAntigo: 4
  }

  const borracha = {
    nome: 'borracha',
    imagem: 'https://img.freepik.com/fotos-premium/duas-borrachas_591245-1475.jpg?w=826',
    preco: 3,
    precoAntigo: 5
  }

  const caderno = {
    nome: 'caderno',
    imagem: 'https://img.freepik.com/fotos-gratis/fechar-com-caneta-branca_23-2150835564.jpg?ga=GA1.1.1104650962.1723145715&semt=ais_hybrid',
    preco: 10,
    precoAntigo: 10
  }

  const produtos = [caneta, caderno, lapis, borracha]
  return (
    <>
      <div className='container'>
        
        {produtos.map((produto) => {
          return <Card key={produto.nome} item={produto} />
        })}
      </div>
    </>
  )
}

export default App
