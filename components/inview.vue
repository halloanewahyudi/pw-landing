
<template>
    <div  v-motion 
                :initial="{opacity:0,y:100}" 
                :visible="{
                    opacity:1, 
                    y: 0,
                    transition:{
                    duration:1200,
                    delay:index*100
                }}"
    class="inview">
        <slot></slot>
    </div>
</template>
