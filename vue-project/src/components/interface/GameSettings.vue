<template>
  <div class="game-settings">
    <div>
      <button class = "options-button" @click="toggleTimeOptions">
        {{ selectedTime || 'Duration' }}
      </button>
      <div v-if="showTimeOptions" class="options">
        <button v-for="option in timeOptions" :key="option" class = "topic-button" @click="selectTime(option)">
          {{ option }}
        </button>
      </div>
    </div>
    <div>
      <button class = "options-button" @click="toggleTypeOptions">
        {{ selectedType || 'Topic' }}
      </button>
      <div v-if="showTypeOptions" class="options">
        <button v-for="option in typeOptions" :key="option" class = "topic-button" @click="selectType(option)">
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

.options-button {
    /* STRUCTURAL */
    justify-self: center;
    min-width: 255px;
    height: 60px;
    margin: 1px;
    padding: 2px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;

    /* COLORS */
    background-color: white;
    color: black;
    border-color: black;
    
    /* TEXT */
    letter-spacing: 1.2px;
    font-size: 1.2em;
    font-style: italic;
}

.options-button:hover {
    /* COLORS */
    background-color: grey;
}

.topic-button {
  /* STRUCTURAL */
  justify-self: center;
    min-width: 255px;
    height: 60px;
    margin: 1px;
    padding: 2px;
    border-width: 1px;
    border-style: solid;
    border-radius: 3px;

    /* COLORS */
    background-color: white;
    color: black;
    border-color: black;
    
    /* TEXT */
    letter-spacing: 1.2px;
    font-size: 1.2em;
    font-style: italic;
}

.topic-button:hover {
  background-color: var(--unaligned-practice-settings-button-hover);
}

@media screen and (max-width: 700px) {
    .topic-options-button {
        /* STRUCTURAL */
        min-width: 150px;
        height: 30px;
        
        /* TEXT */
        font-size: 16px;
    }

    .duration-options-button {
        /* STRUCTURAL */
        min-width: 150px;
        height: 30px;
        
        /* TEXT */
        font-size: 16px;
    }

    .submit-session-options-button {
        /* STRUCTURAL */
        min-width: 150px;
        height: 30px;
        
        /* TEXT */
        font-size: 16px;
    }
}
</style>
