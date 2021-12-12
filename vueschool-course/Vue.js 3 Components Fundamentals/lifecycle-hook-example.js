let BlogPostComponent = {
    props: ['id'],
    data() {
        return {
            blogPost: null
        }
    },
    async created() {
        const id =this.id
     const respons = await axios.get(`api/posts/${id}`),
     this.blogPost = response.data
    }
}