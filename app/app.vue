<template>
  <UApp>
    <UMain>
      <UContainer class="min-h-[calc(100vh-108px)] grid">
        <NuxtPage />
      </UContainer>
    </UMain>

    <UFooter>
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Mathys Woningbouw
      </p>
    </UFooter>
  </UApp>
</template>