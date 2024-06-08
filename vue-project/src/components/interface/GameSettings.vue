<template>
  <div class="game-settings">
    <div>
      <button @click="toggleTimeOptions">
        {{ selectedTime || 'Time' }}
      </button>
      <div v-if="showTimeOptions" class="options">
        <button v-for="option in timeOptions" :key="option" @click="selectTime(option)">
          {{ option }}
        </button>
      </div>
    </div>
    <div>
      <button @click="toggleTypeOptions">
        {{ selectedType || 'Type' }}
      </button>
      <div v-if="showTypeOptions" class="options">
        <button v-for="option in typeOptions" :key="option" @click="selectType(option)">
          {{ option }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showTimeOptions: false,
      showTypeOptions: false,
      selectedTime: '',
      selectedType: '',
      timeOptions: ['1 minute', '3 minutes', '5 minutes', '10 minutes'],
      typeOptions: ['Standard', 'Blitz', 'Bullet', 'Rapid']
    }
  },
  methods: {
    toggleTimeOptions() {
      this.showTimeOptions = !this.showTimeOptions
      this.showTypeOptions = false // Close type options if open
    },
    toggleTypeOptions() {
      this.showTypeOptions = !this.showTypeOptions
      this.showTimeOptions = false // Close time options if open
    },
    selectTime(option) {
      this.selectedTime = option
      this.showTimeOptions = false // Close options after selection
    },
    selectType(option) {
      this.selectedType = option
      this.showTypeOptions = false // Close options after selection
    }
  }
}
</script>

<style scoped>
.game-settings {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.options {
  margin-top: 5px;
}
button {
  margin: 5px;
}
</style>
