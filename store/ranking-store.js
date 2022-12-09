import { HYEventStore } from 'hy-event-store'

import { getRankings } from '../service/api_music'

const rankingStore = new HYEventStore({
  state: {
    hotRanking: {},

  },
  actions: {
    getRankingDataAction(ctx) {
      for (let i = 0; i < 4; i++) {
        getRankings(i).then(res => {
          switch (i) {
            case 0: 
              console.log(res)
              break;
            case 1: 
              console.log(res)
              break;
            case 2: 
              console.log(res)
              break;
            case 3: 
              console.log(res)
              break;
          }
        })
      }
    }
  }
})

export {
  rankingStore
}