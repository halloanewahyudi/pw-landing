<template>
    <div>

        <div class="flex gap-4 items-center justify-center">
            <div v-for="(item, index) in data" :key="index">
                <button @click="selectItem(index)"> {{ item.title.rendered }} </button>
            </div>
        </div>

        <transition>
            <div class="service-content" :class="active">
                <div class="flex flex-col items-center group">
                    <h1 class="big-title text-neutral-200 lg:text-[140px] mb-0 relative group-hover:scale-95 duration-300 delay-150 origin-center">
                        {{showTitle }}
                    </h1>
                </div>
                <div class="relative flex flex-col gap-5 text-center">
                    <div class="mt-0  max-w-xl mx-auto">   
                        {{ showExcerpt }}
                    </div>
                    <router-link to="/"
                        class="bg-red text-light w-24 h-24 rounded-full flex justify-center items-center p-4 text-sm font-semibold mx-auto hover:bg-orange hover:scale-90 duration-300">
                        Read more
                    </router-link>
                </div>
            </div>
        </transition>
    </div>
</template>
<script  setup>
const baseUrl = useRuntimeConfig().public.baseUrl;
const { data, error } = useFetch(`${baseUrl}/wp/v2/service?order=asc&_embed`);

const selected = ref(null)
const serviceItem = ref([])
const active = ref()

const title =  ref()
const excerpt =  ref()

const selectItem = (index) => {
    selected.value = index
        title.value = data.value[index].title.rendered
       excerpt.value = data.value[index].excerpt.rendered
}

const showExcerpt = computed(() => {
    const excerptHtml = selected.value == null 
        ? data.value[0].excerpt.rendered 
        : data.value[selected.value].excerpt.rendered;

    // Menghilangkan semua tag HTML menggunakan regex
    return excerptHtml.replace(/<[^>]*>/g, '');
});

const showTitle = computed(()=>{
    if(selected.value == null){
        return data.value[0].title.rendered 
    }
    else{
        return data.value[selected.value].title.rendered
    }
})

watchEffect(()=>{
    if(selected.value == null){
        active.value = 'first'
    }
    else{
        active.value = 'on active '
    }
})

</script>