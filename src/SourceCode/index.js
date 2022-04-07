const sourceCodeA = `import $ from 'jquery'

const PlayerService = {
  getPlayerTeamId: (playerId) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/player/' + playerId + '/team',
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          reject(error)
        }
      })
    })
  },
  getPlayers: (teamId) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: '/team/' + teamId + '/player',
        success: function (data) {
          resolve(data)
        },
        error: function (error) {
          reject(error)
        }
      })
    })
  }
}

const PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: async function () {
    try {
      const playerTeam = await PlayerService.getPlayerTeamId(this.playerId)
      const playerList = await PlayerService.getPlayers(playerTeam.id)
      // Render playerList
    } catch (error) {
      throw error
    }
  }
}
`

const sourceCodeB = `const newItems = [
  {
    network: 'facebook',
    text: 'post number 1'
  },
  {
    network: 'twitter',
    text: 'some twitter text'
  },
  {
    network: 'gplus',
    text: 'some gplus stuff'
  },
  {
    network: 'facebook',
    text: 'post number 2'
  }
]

function foo(arrayOfItems, aNetwork) {
  const transformNetwork = {
    facebook: 'Facebook',
    gplus: 'Google +',
    twitter: 'Twitter',
    ig: 'Instagram'
  }

  return arrayOfItems
    .filter((item) => item.network === aNetwork)
    .map((item) => ({
      displayName: transformNetwork[item.network], // ?? "undefined",
      text: item.text
    }))
}

console.log(foo(newItems, 'facebook'))
console.log(foo(newItems, 'gplus'))
`

const sourceCodeC = `import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'
const size = 3

const Checkbox = ({ index, value, setValue }) => {
  return (
    <div>
      <label htmlFor={'checkbox'+index}>{'checkbox ' + index}</label>
      <input
        value={value}
        onChange={setValue}
        name={\`checkbox\${index}\`}
        type='checkbox'
      />
    </div>
  )
}

const BigForm = () => {
  const [checkboxes, setCheckboxes] = useState(Array(size).fill(0))

  const handleChange = (item, index) => {
    setCheckboxes((prev) => {
      return Object.values({
        ...Object.assign({}, prev),
        [index]: Number(!item)
      })
    })
  }

  return (
    <div className='form'>
      <span>checkboxes boxes: [{checkboxes.map((item) => !!item).join(',')}]</span>
      <div className='checkbox-wrapper'>
        {checkboxes.map((item, index) => {
          return (
            <Checkbox
              key={index}
              index={index}
              value={item}
              setValue={() => handleChange(item, index)}
            />
          )
        })}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BigForm />
  </React.StrictMode>
)
`

const sourceCodeQA = `var PlayerService = {
  getPlayerTeamId: function (playerId, callback) {
    $.ajax({
      url: '/player/' + playerId + '/team',
      success: function (team) {
        callback(team.id)
      }
    })
  },
  getPlayers: function (teamId, callback) {
    $.ajax({
      url: '/team/' + teamId + '/player',
      success: callback
    })
  }
}

var PlayerDetailsController = {
  playerId: 8,
  showTeammatesClick: function () {
    PlayerService.getPlayerTeamId(this.playerId, function (teamId) {
      PlayerService.getPlayers(teamId, function (playerList) {
        // Render playerList
      })
    })
  }
}
`

export { sourceCodeQA, sourceCodeA, sourceCodeB, sourceCodeC }
