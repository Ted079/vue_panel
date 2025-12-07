<template>
  <header class="flex justify-between border-b">
    <div class="flex gap-4 items-center">
      <img src="/logo.png" alt="logo" class="w-10" />
      <div>
        <h2 class="text-xl font-bold uppercase">Vuee</h2>
        <p class="text-slate-500">Device store</p>
      </div>
    </div>

    <ul class="flex items-center gap-5">
      <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
        <img src="/cart.svg" alt="cart" />
        <b>120$</b>
      </li>
      <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
        <img src="/heart.svg" alt="heard" />
        <b>Favorites</b>
      </li>
      <li class="flex items-center gap-3 text-gray-500 cursor-pointer hover:text-black">
        <img src="/profile.svg" alt="heard" />
        <b>profile</b>
      </li>
    </ul>
  </header>
</template>