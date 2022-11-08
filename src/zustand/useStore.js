import create from 'zustand'

const useStore = create((set, get) => ({
  inputs: [
    {
      component: 'text',
      label: 'Email',
      type: 'text',
      _uid: 'qwt012'
    }
  ],
  insertItem: (payload) => set((state) => ({ inputs: [...state.inputs, payload]})),
  removeItem: () => set((state) => (state.inputs.pop())),
  writeJson: (id, payload) => {
    console.log(payload);
    set((state) => {
      return state.inputs.find(input => {
        if (input._uid === id) {
          if (payload === '') {
            input.value = ''
            return {...input}
          }
          return input.value = payload
        }
      })
    })
  }
}))

export { useStore }