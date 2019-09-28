import moment from '~/plugins/moment'

export const state = () => ({
  posts:[]
})

export const getters = {
  posts: (state) => state.posts
}

export const mutations = {
  addPost(state, {post}){
    state.posts.push(post)
  },
  updatePost(state, {post}){
    state.posts = state.posts.map((p) => (p.id === post.id ? post : p))
  },
  clearPosts(state){
    state.posts = []
  }
}

export const actions = {
  async publishPost({commit}, {payload}){
    const user = await this.$axios.$get(`/users/${payload.user.id}.json`)
    const post_id = (await this.$axios.$post('/posts.json', payload)).name
    
  }
}