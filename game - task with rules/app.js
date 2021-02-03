const app = new Vue({
    data() {
      return {
        gameOver: false,
        winner: '',
        monsterHealth: 100,
        yourHealth: 100,
        monsterDamage: '',
        yourDamage: '',
        yourSpecialDamage: '',
        yourHeal: '',
        battleLog: [],
        isButtonDisabled: false
      }
    },
    watch: {
      monsterHealth(value, oldValue) {
        if(value <= 0) {
          if(this.yourHealth <= 0) {
            this.winner = 'draw'
          }
           this.gameOver = true
           this.winner = 'you'
        } 
      },
      yourHealth(value) {
        if(value <= 0) {
          this.gameOver = true
          this.winner = 'monster'
        } 
      },
      battleLog(newValue, oldValue){
        if(this.battleLog.length % 3 == 0) {
          this.isButtonDisabled = false
        } else {
          this.isButtonDisabled = true
        }
      }
    },
    methods: {
      attack() {
        let yourDamage = this.randomInteger(5, 12)
        this.yourDamage = yourDamage
        this.monsterHealth = this.monsterHealth - yourDamage
        this.monsterAttack()
        this.sendBattleLogMessage('Player', 'attacks and deals', yourDamage)
      },
      specialAttack() {
        let yourDamage = this.randomInteger(10, 25)
        this.yourSpecialDamage = yourDamage
        this.monsterHealth = this.monsterHealth - yourDamage
        this.monsterAttack()
        this.sendBattleLogMessage('Player', 'SPECIAL attacks and deals', yourDamage)
      },
      heal() {
        let yourHeal = this.randomInteger(8, 20)
        this.yourHeal = yourHeal
        if(this.yourHealth < 100) {
          this.yourHealth = this.yourHealth + yourHeal
          if(this.yourHealth > 100) {
            this.yourHealth = 100
          }
        }
        this.monsterAttack()
        this.sendBattleLogMessage('Player', 'heals himself for', yourHeal)
      },
      surrender() {
        this.gameOver = true,
        this.winner = 'monster'
      },
      monsterAttack(){
        let monsterDamage = this.randomInteger(5, 15)
        this.monsterDamage = monsterDamage
        this.yourHealth = this.yourHealth - monsterDamage
        this.sendBattleLogMessage('Monster', 'attacks and deals', monsterDamage)
      },
      randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      },
      sendBattleLogMessage(who, what, value) {
        this.battleLog.unshift({
          actionBy: who,
          actionType: what,
          actionValue: value
        })
      },
      startNewGame() {
        this.gameOver = false
        this.battleLog = []
        this.monsterHealth = 100
        this.yourHealth = 100
      }
    }
  });
  
  app.$mount('#game');