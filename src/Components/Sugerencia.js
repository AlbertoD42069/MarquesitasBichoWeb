import React from 'react'

const Sugerencia = (nameSuggestion, suggestedPrice, ingredientsSuggestion) => {
  return (
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal text-uppercase">{nameSuggestion}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title border-bottom mb-2 pb-3">{suggestedPrice}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>{ingredientsSuggestion}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sugerencia
