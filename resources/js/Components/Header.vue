<script setup>
import { onMounted, ref } from 'vue';

const currentDateTime = ref('');

defineProps({
    pos: { type: String, default: '' },
});

const updateDateTime = () => {
    currentDateTime.value = new Date().toLocaleString('en-US', {
        timeZone: 'Asia/Manila',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
};

// Initialize and keep updating the time every second
onMounted(() => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
</script>

<template>
    <header :class="`${pos} bg-blue-500 p-3 text-black`">
        <div>
            <div
                class="mx-auto flex flex-col items-center justify-between space-y-4 px-4 lg:flex-row lg:space-y-0"
            >
                <!-- Logo and Text -->
                <div class="flex items-center space-x-4">
                    <img
                        src="/images/dostlogo.png"
                        alt="DOST Logo"
                        class="h-24 w-24 rounded lg:h-32 lg:w-32"
                    />
                    <div class="text-center lg:text-left">
                        <h1 class="text-xs font-bold uppercase lg:text-sm">
                            Republic of the Philippines
                        </h1>
                        <h2 class="text-base font-bold lg:text-lg">
                            Department of Science and Technology
                        </h2>
                        <h3
                            class="text-lg font-semibold text-yellow-300 lg:text-xl"
                        >
                            PSTO - Surigao del Norte
                        </h3>
                    </div>
                </div>
                <!-- Date and Time -->
                <div class="flex flex-col">
                    <div class="text-center text-sm lg:text-right">
                        <p>Philippine Standard Time:</p>
                        <p>{{ currentDateTime }}</p>
                    </div>
                    <!-- Logout Button -->
                    <div class="place-items-end pt-2">
                        <div class="flex justify-end pt-2">
                            <button
                                @click="logout"
                                class="flex items-center space-x-2 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-700 md:text-lg"
                            >
                                <p>Logout</p>
                                <!-- Hide the text on small screens -->
                                <!-- <span class="hidden sm:block">Logout</span> -->
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H3"></path>
                                </svg> -->
                                <RiLogoutBoxRLine />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
