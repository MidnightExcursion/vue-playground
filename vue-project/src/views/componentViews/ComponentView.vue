<template>
    <div class="testing-interface">
      <GameSettings />
    </div>
  </template>

<script>
import GameSettings from '@/components/interface/GameSettings.vue'

export default {
    name: "TestingView",
    components: {
        GameSettings
    }
}
</script>
  
  <style>
  @media (min-width: 1024px) {
    .testing-interface {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
  