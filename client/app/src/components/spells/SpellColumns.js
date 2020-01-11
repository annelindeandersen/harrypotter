import React from 'react';
import matchSorter from 'match-sorter';
  
  const spellsColumns = [
    {
      Header: 'Spell',
      accessor: 'spell',
      filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['spell'], threshold: matchSorter.rankings.CONTAINS }),
      filterAll: true,
    },
    {
      Header: 'Type',
      accessor: 'type',
      filterMethod: (filter, row) => {
        if (filter.value === 'all') {
          return true
        }
        if (filter.value === 'Charm') {
          return row[filter.id] === 'Charm'
        }
        if (filter.value === 'Curse') {
          return row[filter.id] === 'Curse'
        }
        if (filter.value === 'Enchantment') {
          return row[filter.id] === 'Enchantment'
        }
        if (filter.value === 'Hex') {
          return row[filter.id] === 'Hex'
        }
        if (filter.value === 'Jinx') {
          return row[filter.id] === 'Jinx'
        }
        if (filter.value === 'Spell') {
          return row[filter.id] === 'Spell'
        }
      },
      Filter: ({ filter, onChange }) => (
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: '100%' }}
          value={filter ? filter.value : 'all'}
        >
          <option value="all">Show All</option>
          <option value="Charm">Charm</option>
          <option value="Curse">Curse</option>
          <option value="Enchantment">Enchantment</option>
          <option value="Hex">Hex</option>
          <option value="Jinx">Jinx</option>
          <option value="Spell">Spell</option>
        </select>
      ),
    },
    {
      Header: 'Effect',
      accessor: 'effect',
      filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['effect'], threshold: matchSorter.rankings.CONTAINS }),
      filterAll: true,
    },
  ]

  export { spellsColumns };