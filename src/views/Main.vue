<template>
<v-card :class="{'px-4': $vuetify.breakpoint.smAndUp}">
  <v-card-title>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3>
        <v-select
          :items="platforms"
          label="Platform"
          flat
          v-model="platform"
          @change="getData"
        ></v-select>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex xs12 sm6 md3>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          hide-details
        ></v-text-field>
      </v-flex>
    </v-layout>
  </v-card-title>
  <v-data-table
    :items="data"
    :headers="headers"
    :rows-per-page-items="[-1]"
    :search="search"
    :loading="!this.data[0]"
    hide-actions
  >
    <template slot="headerCell" slot-scope="props">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <span v-on="on">
            {{ props.header.text }}
          </span>
        </template>
        <span>
          {{ props.header.description }}
        </span>
      </v-tooltip>
    </template>
    <template v-slot:items="props">
      <td>{{ props.item.compatibility }}</td>
      <td>{{ props.item.type }}</td>
      <td class="text-xs-right">{{ props.item.avg | round}}</td>
      <td class="text-xs-right">{{ props.item.max | round}}</td>
      <td class="text-xs-right">{{ props.item.min | round}}</td>
      <td class="text-xs-right">{{ props.item.pop }}</td>
    </template>
  </v-data-table>
</v-card>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
      platforms: [
        { value: 'PC', text: 'PC' },
        { value: 'PS4', text: 'PlayStation 4' },
        { value: 'XB1', text: 'Xbox One' },
        { value: 'SWI', text: 'Nintendo Switch' }
      ],
      platform: 'PC',
      search: '',
      headers: [
        { text: 'Compatibility', value: 'compatibility', description: 'Which Weapon is the Riven for﻿' },
        { text: 'Type', value: 'type', description: 'Wha﻿t type of Riven is﻿ it' },
        { text: 'Avera﻿ge﻿﻿ price', align: 'right', value: 'avg', description: 'Average value of trades with this Riven Type﻿' },
        { text: 'Max price', align: 'right', value: 'max', description: 'Highest amount of Platinum per trade of this Riven Ty﻿pe' },
        { text: 'Min Price', align: 'right', value: 'min', description: 'Low﻿est amount of Platinum per trade of this Riven Type' },
        { text: 'Popularity', align: 'right', value: 'pop', description: 'Popularity of this Riven Type being traded within all traded Rivens' }
      ],
      data: []
    }
  },

  methods: {
    getData () {
      this.data = []
      this.$router.push({ name: 'Main', params: { platform: this.platform } })
      this.$http.get(`https://n9e5v4d8.ssl.hwcdn.net/repos/weeklyRivens${this.platform}.json`).then((response) => {
        this.data = response.data.map(item => {
          item.name = `${item.compatibility ? item.compatibility : ''} ${item.itemType}`
          item.type = item.itemType.replace(/ .*/, '')
          return item
        })
      })
    }
  },
  created () {
    console.log('reated')
    this.getData()
  },
  filters: {
    round (value) {
      return Math.round(value)
    }
  }
}
</script>
