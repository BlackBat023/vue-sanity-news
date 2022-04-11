<template>
    <main class="post-page">
        <section v-if="post" class="container mx-auto-p-4">
            <!-- Image -->
            <img :src="CreateURL(post.image,1280,300)" class="w-full mb-8">

            <!-- Back Button -->
            <button
                @click="$router.back()"
                class="flex items-center text-lg text-green-500 hover:text-green-600 duration-300 mb-4"
            >
            <span class="material-icons text-lg mr-1">keyboard_double_arrow_left</span> Back
            </button>

            <!-- title -->
            <h1 class="text-3xl md:text-5xl mb-8">{{ post.title }}</h1>

            <!-- Excerpt -->
            <p class="text-gray-500 itallic mb-8 bg-gray-300 rounded-sm">{{ post.excerpt }}</p>

            <!-- Content -->
            <p v-html="TextToHTML(post.content)" class="text-lg mb-8"></p>

            <!-- Author Details-->
            <div class="flex items-center mb-4">
                <img 
                    :src="CreateURL(post.author.avatar, 300, 300)" 
                    class="inline-block rounded-full w-12 h-12 mr-4"
                >
                <h1 class="text-gray-400 text-lg">
                    {{ post.author.full_name }}
                </h1>
            </div>
        </section>

        <section v-else>
            <p class="text-white itallic text-2xl">
                Loading...
            </p>
        </section>
    </main>
</template>

<script>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
import sanity from '../../client'
import { CreateURL, TextToHTML } from "../../utils"

export default {
    setup () {
        const route = useRoute()
        const id = ref(route.params.id)
        const post = ref(null)

        onMounted(() => {
            const query = '*[_type == "post" && _id == $id][0] {..., author->}'
            const params = { id: id.value }

            sanity.fetch(query, params).then(data => {
                console.log(data)
                post.value = data
            })
        })

        return {
            post,
            CreateURL,
            TextToHTML
        }

    }

}
</script>