<template>
    <div class="headbar">
        <div class="flex justify-between items-center">
            <div class="flex items-center py-3">
                <router-link to="#"><img src="@/assets/img/logo.png" alt="" class="ml-8"></router-link>
                <router-link to="#" class="text-lg font-bold mx-8">О портале</router-link>
                <router-link to="#" class="text-lg font-bold mx-8">Прайс-лист</router-link>
                <router-link to="#" class="text-lg font-bold mx-8">Контакты</router-link>
                <router-link to="#" class="text-lg font-bold mx-8">Ещё</router-link>
            </div>
            <div class="block">
                <i class="block text-3xl mx-auto fa-regular fa-circle-user ml-10"></i>
                <router-link to="#" class="block text-lg text-center font-bold mx-8">Войти</router-link>
            </div>
        </div>
        <hr class="border-top border-1 border-ash bg-ash">
    </div>
</template>