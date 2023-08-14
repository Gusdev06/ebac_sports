import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    adicionarAoCarrinho: (state, action: PayloadAction<Produto>) => {
      const roupa = action.payload

      if (state.itens.find((r) => r.id === roupa.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(roupa)
      }
    }
  }
})

export const { adicionarAoCarrinho } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
