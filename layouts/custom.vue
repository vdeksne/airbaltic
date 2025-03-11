<template>
  <nav>
    <ul>
      <li>
        <NuxtLink to="/home/home">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/home/contact">Contact us</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/home/claim">Submit a claim</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/home/">Damaged baggage</NuxtLink>
      </li>
    </ul>
  </nav>
  <!-- <NuxtPage /> -->
  <slot></slot>
</template>
