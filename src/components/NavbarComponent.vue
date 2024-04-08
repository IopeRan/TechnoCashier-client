<template>
    <nav class="w-full h-14 p-8 flex flex-row items-center justify-between">
        <div>
            <router-link :to="{ name: 'dashboard.index' }" class="text-xl font-bold">{{ name }}</router-link>
        </div>
        <div class="flex flex-row items-center gap-6">
            <router-link :to="'/'" class="text-2xl text-slate-900 hover:text-slate-500 hover:duration-150">
                <i class="fa-solid fa-cart-shopping"></i>
            </router-link>
            <router-link :to="'/'">
                <img :src="profile.profile" alt="pfp" class="w-12 h-12 rounded-full object-cover hover:rotate-[360deg] hover:duration-200">
            </router-link>
        </div>
    </nav>
</template>

<script setup>
// import { route }

const name = 'TechnoCashier'

const profile = {
    profile: 'pfp.webp'
}
</script>