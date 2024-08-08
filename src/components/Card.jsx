import './Card.css'
export default function Card(props){

    return (
        <div className="card">
            <h1>{props.item.nome}</h1>
            <img src={props.item.imagem} alt="imagem do produto" width="200px" />
            {props.item.precoAntigo > props.item.preco ? (<h4>Preço antigo R$: {props.item.precoAntigo}</h4>): <h4>Produto não está em promoção</h4> }
            <h3>Preço R$: {props.item.preco}</h3>
        </div>
    )
}