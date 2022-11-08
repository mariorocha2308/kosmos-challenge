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
    const field = get().inputs.find(input => input._uid === id)
    field.value = payload
  }
}))

export { useStore }