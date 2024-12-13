import React from 'react'
import Sugerencia from './Sugerencia'
import { SugerenciasTexts } from '../Resources/TextStatics';

export default function SectionBody() {
  const sugerenciaText = SugerenciasTexts;
  const [nameSuggestion, setNamesuggestion] = (sugerenciaText.nameSuggestion);
  const [suggestedPrice, setSuggestedPrice] = (sugerenciaText.suggestedPrice);
  const [ingredientsSuggestion, setIngredientsSuggestion] =(sugerenciaText.ingredientsSuggestion);



  return (
    <div class="sugerencia row row-cols-1 row-cols-md-4 text-center py-3 px-3">
      <Sugerencia nameSuggestion={nameSuggestion} 
                  suggestedPrice={suggestedPrice} 
                  ingredientsSuggestion={ingredientsSuggestion}/>
                  
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">La tradicional</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 35.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>El original queso de bola</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">Sweet Nuts</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 50.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Queso bola </li>
                  <li>Miel</li>
                  <li>Nuez</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">Dulce Tentacion</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 40.00 </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Queso de bola</li>
                  <li>Crema de avellanas</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">Campechana</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 40.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Queso de bola</li>
                  <li>Ate de guayaba</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">Encanto de bombon</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 55.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Bombon</li>
                  <li>Queso Bola</li>
                  <li>Philadelfia</li>
                  <li>Crema de avellana</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">Don king Kong</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>Queso Philadelfia</li>
                  <li>Crema avellanas</li>
                  <li>Plantanos</li>
                </ul>
              </div>
            </div>
          </div>  
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">la gloria</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Philadelfia</li>
                  <li>Cajeta</li>
                  <li>Cacahuate</li>
                </ul>
              </div>
            </div>
          </div>  
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">sweet queen</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 50.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Philadelfia</li>
                  <li>nutela</li>
                  <li>nuez</li>
                </ul>
              </div>
            </div>
          </div>  
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">la suprema</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 55.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Bola</li>
                  <li>manchego</li>
                  <li>queso Philadelfia</li>
                  <li>jamon</li>
                  <li>chipotle</li>
                </ul>
              </div>
            </div>
          </div>  
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">sweet bomb</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Philadelfia</li>
                  <li>crema de avellanas</li>
                  <li>lechera</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">3 quesos</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Philadelfia</li>
                  <li>queso bola</li>
                  <li>manchego</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">hawaiana</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>manchego</li>
                  <li>jamon</li>
                  <li>mermerlada de piña</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">sweet love</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 40.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Bola</li>
                  <li>lechera</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">marquesadilla</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Bola</li>
                  <li>queso Philadelfia</li>
                  <li>jamon</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">la fifi</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso Bola</li>
                  <li>mermelada de fresa</li>
                  <li>queso Philadelfia</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">la afrodisiaca</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 55.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>kiwi</li>
                  <li>crema de avellanas</li>
                  <li>queso Philadelfia</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">gringa</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 40.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>manchego</li>
                  <li>jamon</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">la suculenta</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso bola</li>
                  <li>crema de Cacahuate</li>
                  <li>queso Philadelfia</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">la chaira</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 40.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>queso bola</li>
                  <li>crema de Cacahuate</li>
                </ul>
              </div>
            </div>
          </div> 
          <div class="col">
            <div class="card mb-4 rounded-3 shadow-sm">
              <div class="card-header py-3">
                <h4 class="my-0 fw-normal text-uppercase">banana split</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">$ 45.00</h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>platano</li>
                  <li>crema de avellanas</li>
                  <li>Cacahuate</li>
                </ul>
              </div>
            </div>
          </div>
            </div>
  )
}
