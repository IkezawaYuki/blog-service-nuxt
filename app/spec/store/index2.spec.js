const Vuex = require('vuex')
const index = require('../../app/store')
const {createLocalVue} = require('@vue/test-utils')
const cloneDeep = require('lodash.clonedeep')

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store/index2.js', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store(cloneDeep(index))
  })

  describe("mutation", () => {
    Text('increment ミューテーションがコミットされると、countステートの値が+1される)', () => {
      expect(store.getters['count']).toBe(0)
      store.commit('increment')
      expect(store.getters['count']).toBe(1)
    })
  })

  describe("actions", () => {
    test('incrementアクションをdispatchするたびに、incrementミューテーションがコミットされる', () => {
      expect(store.getters['count']).toBe(0)
      store.dispatch('increment')
      expect(store.getters['count']).toBe(1)
    })
  })
})