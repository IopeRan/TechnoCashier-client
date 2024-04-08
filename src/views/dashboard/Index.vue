<template>
<div class="w-full px-8">
    <h5 class="text-lg font-semibold my-6">Dashboard</h5>
    <div class="bg-white w-full h-max rounded-3xl px-6 pt-2 pb-6 shadow-md border">
        <div class="w-full flex flex-col">
        <h5 class="text-slate-500 font-semibold text-xl capitalize">our menu</h5>
            <p class="text-slate-400">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, rem.</p>
        </div>
        <div class="w-full grid grid-cols-2 gap-3 mt-6">
            <router-link 
            v-for="menu in menus" 
            :key="menu.index" 
            :to="menu.path" 
            class="bg-white shadow-md border-2 w-full h-44 grid place-content-center gap-2 rounded-xl hover:border-green-100 hover:duration-150">
                <div :class="menu.iconBg" class="w-20 h-20 p-3 grid place-content-center rounded-full text-4xl">
                    <div :class="menu.iconColor">
                        <i :class="menu.icon"></i>
                    </div>
                </div>
                <span class="text-center capitalize  text-slate-500 text-lg">{{ menu.title }}</span>
            </router-link>
        </div>
    </div>
</div>
</template>

<script setup>

const menus = [
    {
        icon: 'fa-solid fa-box',
        iconColor: 'text-green-500',
        iconBg: 'bg-green-100',
        title: 'product',
        path: 'product'
    },
    {
        icon: 'fa-solid fa-chart-simple',
        iconColor: 'text-yellow-500',
        iconBg: 'bg-yellow-100',
        title: 'revenue',
        path: 'revenue'
    },
    {
        icon: 'fa-solid fa-clock',
        iconColor: 'text-red-500',
        iconBg: 'bg-red-100',
        title: 'schedule',
        path: 'schedule'
    },
    {
        icon: 'fa-solid fa-location-dot',
        iconColor: 'text-blue-500',
        iconBg: 'bg-blue-100',
        title: 'location',
        path: 'location'
    }
]


</script>