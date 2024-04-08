<template>
    <div class="w-full px-8">
        <h5 class="text-lg my-6 font-semibold">Revenue</h5>
        <div class="w-full grid grid-cols-1 gap-3">
            <div class="bg-white w-full h-max shadow-md border rounded-3xl flex  flex-col items-center justify-between gap-2 p-6">
                <div class="bg-green-100 text-green-500 text-lg p-4 w-16 h-16 rounded-full grid place-content-center">
                    <i class="fa-solid fa-dollar-sign"></i>
                </div>
                <h6 class="text-xl text-slate-500 capitalize">total penghasilan</h6>
                <span class="text-lg text-green-500">Rp.112.000.000,00</span>
            </div>
        </div>
        <div class="bg-white w-full h-max mt-8 border shadow-md rounded-xl px-4 pt-2 pb-8">
            <form action="" class="w-full flex flex-row my-4">
                <input type="text" class="w-full outline-none" placeholder="Find Transaction ID">
                <button class="w-max h-max px-4 py-2 text-white bg-green-500 rounded-lg">Find</button>
            </form>
            <h6 class="text-slate-500">Transaction Date Filter</h6>
            <form action="" class="flex flex-col gap-3 mt-3">
                <div class="flex flex-col gap-1">
                    <label for="from" class="text-slate-500 font-semibold capitalize">from</label>
                    <input type="date" id="from" class="w-full text-slate-400 border px-3 py-2 rounded-lg shadow-md">
                </div>
                <div class="flex flex-col gap-1">
                    <label for="from" class="text-slate-500 font-semibold capitalize">to</label>
                    <input type="date" id="from" class="w-full text-slate-400 border px-3 py-2 rounded-lg shadow-md">
                </div>
            </form>
        </div>
        <div class="my-8 grid grid-cols-2 gap-3">
            <router-link :to="'/'" class="bg-white rounded-xl border shadow-md w-full h-max px-8 py-10 flex justify-center flex-col items-center">
                <div class="bg-green-100 w-12 h-12 grid place-content-center text-green-500 text-2xl rounded-full p-8">
                    <i class="fa-solid fa-file-circle-plus"></i>
                </div>
                <h6 class="text-slate-500 text-lg mt-2 text-center">Add</h6>
            </router-link>
            <form action="">
                <button class="bg-white rounded-xl border shadow-md w-full h-max px-8 py-10 flex justify-center flex-col items-center">
                    <div class="bg-red-100 w-12 h-12 grid place-content-center text-red-500 text-2xl rounded-full p-8">
                        <i class="fa-solid fa-file-pdf"></i>
                    </div>
                    <h6 class="text-slate-500 text-lg mt-2">Print PDF</h6>
                </button>
            </form>
        </div>
        <div class="w-full grid grid-cols-1 my-8">
            <div class="bg-blue-500 w-full h-max rounded-xl p-4 text-white capitalize">
                <div class="w-full flex flex-row justify-between items-center">
                    <h6 class="text-xl font-semibold">Transaction 01</h6>
                    <button class="text-xl"><i class="fa-solid fa-ellipsis"></i></button>
                </div>
                <ul>
                    <li>cashier: Mr.Lorem</li>
                    <li>customer: Ms.Ipsum</li>
                    <li>product: 
                        <ol class="list-decimal px-4">
                            <li>potted plant</li>
                            <li>coca cola</li>
                        </ol>
                    </li>
                    <li>
                        total: Rp.33.000,00
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>