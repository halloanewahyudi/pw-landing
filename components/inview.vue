
<template>
    <div  v-motion 
                :initial="{opacity:0,y:100}" 
                :visible="{
                    opacity:1, 
                    y: 0}"
                :leave="{opacity:0, y:-100}"
                :duration="1200"
                :delay="100"
    class="inview">
        <slot></slot>
    </div>
</template>
