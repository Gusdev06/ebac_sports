import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const FavoritoSlice = createSlice({
  name: 'favorito',
  initialState,

  reducers: {
    adicionarAoFavorito: (state, action: PayloadAction<Produto>) => {
      const fav = action.payload

      if (state.itens.find((f) => f.id === fav.id)) {
        const favSemProduto = state.itens.filter((f) => f.id !== fav.id)
        state.itens = favSemProduto
      } else {
        state.itens.push(fav)
      }
    }
  }
})

export const { adicionarAoFavorito } = FavoritoSlice.actions
export default FavoritoSlice.reducer
