function getRandomValue(min, max) {
  return (attackValue = Math.floor(Math.random() * (max - min)) + min);
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: null,
      winner: null,
      logMessages: [],
    };
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        //A draw
        this.winner = "It's a draw";
      } else if (value <= 0) {
        this.winner = "You lost!";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "It's a draw";
      } else if (value <= 0) {
        this.winner = "You won!";
      }
    },
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return { width: "0%" };
      }
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 4 !== 0;
    },
  },
  methods: {
    attackMonster() {
      if (this.currentRound === 4) {
        this.currentRound = null;
      } else if (this.currentRound !== null) {
        this.currentRound++;
      }
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "attacks", attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
      this.addLogMessage("monster", "attacks", attackValue);
    },
    specialAttackMonster() {
      this.currentRound = 1;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage("player", "special-attacks", attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      if (this.currentRound === 4) {
        this.currentRound = null;
      } else if (this.currentRound !== null) {
        this.currentRound++;
      }

      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }

      this.addLogMessage("player", "heal", attackValue);
      this.attackPlayer();
    },
    restartGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = null;
      this.winner = null;
      this.logMessages = [];
    },
    surrender() {
      this.winner = "You lost!";
    },
    addLogMessage(who, what, value) {
      this.logMessages = [
        {
          actionBy: who,
          actionType: what,
          actionValue: value,
        },
        ...this.logMessages,
      ];
    },
  },
});

app.mount("#game");
