import "./preco.css";

export default function Preco() {
  
  return (
    
    <div className="container">
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 class="display-4">Conheça nossos planos</h1>
        <p class="lead">Esses são os planos que nosso site tem!</p>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Gratuito</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">00,00 R$ <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Tem propaganda antes do filme e no final!</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Começar!</button>
            </div>
          </div>
        </div>


        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Home</h4>
            </div>

            <div className="card-body">
              <h1 className="card-title pricing-card-title">15,00 R$ <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>3 dispositivos!</li>
                <li>Resolução Full HD!</li>
                <li>Sem anuncio!</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Garanta já!</button>
            </div>
          </div>
        </div>  


        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Pro</h4>
            </div>

            <div className="card-body">
              <h1 className="card-title pricing-card-title">30,00 R$ <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>8 dispositivos!</li>
                <li>Resolução 4K!</li>
                <li>Notificações de filmes novos!</li>
                <li>Sem anuncio!</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Garanta já!</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}