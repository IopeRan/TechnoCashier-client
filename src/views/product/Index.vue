<template>
    <div class="w-full px-8">
        <h5 class="text-lg font-semibold my-6">Product</h5>
        <div class="flex flex-col gap-2">
            <div class="bg-white w-full h-max px-6 py-3 shadow-md border rounded-xl">
                <form action="" class="flex flex-row gap-3">
                    <input type="text" placeholder="Find the Product" class="w-full outline-none">
                    <button class="bg-green-500 px-4 py-2 text-xl text-white rounded-lg capitalize">find</button>
                </form>
            </div>
        </div>
        <div class="w-full my-6 grid grid-cols-2 gap-3">
            <div class="bg-white w-full h-max py-3 rounded-xl overflow-hidden shadow-md border" v-for="product in products" :key="product.index">
                <div class="grid place-content-center">
                    <img :src="product.image" :alt="product.product" class="w-20 h-24 object-cover">
                </div>
                <div class="w-full flex flex-col px-3 py-2">
                    <ul class="text-slate-600 capitalize">
                        <li>
                            {{ product.product }}
                        </li>
                        <li>
                            {{ product.price }}
                        </li>
                        <li>
                            {{ product.stock }}
                        </li>
                    </ul>
                    <form action="" class="w-full">
                        <button class="w-full bg-green-500 capitalize mt-3 text-white py-2 rounded-lg hover:bg-green-400 hover:duration-150">add to cart</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

const products = [
    {
        image: 'product/potted-plant.webp',
        product: 'potted plant',
        price: 25000,
        stock: 11
    },
    {
        image: 'product/coca-cola.png',
        product: 'coca cola',
        price: 8000,
        stock: 12
    }
]

</script>