<!-- src/components/Navbar.vue -->
<template>
  <div class="pb-5">
    <div class="antialiased dark:bg-[#2B6CB0]">
      <div class="w-full text-[#F1F2F6] dark:text-gray-200 bg-[#2B6CB0] shadow-md">
        <div x-data="{ open: true }" class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div class="flex flex-row items-center justify-between p-4">
            <a href="#" class="text-2xl font-bold tracking-widest text-[#F1F2F6] uppercase rounded-lg dark:text-[#F1F2F6] focus:outline-none focus:shadow-outline">
              Afford.able
            </a>
            <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = !open">
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <nav :class="{'flex': open, 'hidden': !open}" class="flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg transition-colors duration-300 ease-in-out dark:bg-transparent dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:text-[#F1F2F6] dark:hover:text-[#F1F2F6] dark:text-gray-200 md:mt-0 md:ml-4 hover:text-white hover:bg-[#5C6AFF] focus:text-white focus:bg-[#5C6AFF] focus:outline-none focus:shadow-outline"
               href="#">Prices</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg transition-colors duration-300 ease-in-out dark:bg-transparent dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:text-[#F1F2F6] dark:hover:text-[#F1F2F6] dark:text-gray-200 md:mt-0 md:ml-4 hover:text-white hover:bg-[#5C6AFF] focus:text-white focus:bg-[#5C6AFF] focus:outline-none focus:shadow-outline"
               href="#">Products</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg transition-colors duration-300 ease-in-out dark:bg-transparent dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:text-[#F1F2F6] dark:hover:text-[#F1F2F6] dark:text-gray-200 md:mt-0 md:ml-4 hover:text-white hover:bg-[#5C6AFF] focus:text-white focus:bg-[#5C6AFF] focus:outline-none focus:shadow-outline"
               href="#">Compare</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg transition-colors duration-300 ease-in-out dark:bg-transparent dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:text-[#F1F2F6] dark:hover:text-[#F1F2F6] dark:text-gray-200 md:mt-0 md:ml-4 hover:text-white hover:bg-[#5C6AFF] focus:text-white focus:bg-[#5C6AFF] focus:outline-none focus:shadow-outline"
               href="#">Contact</a>
            <a class="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg transition-colors duration-300 ease-in-out dark:bg-transparent dark:hover:bg-gray-700 dark:focus:bg-gray-700 dark:focus:text-[#F1F2F6] dark:hover:text-[#F1F2F6] dark:text-gray-200 md:mt-0 md:ml-4 hover:text-white hover:bg-[#5C6AFF] focus:text-white focus:bg-[#5C6AFF] focus:outline-none focus:shadow-outline"
               href="#">More</a>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
