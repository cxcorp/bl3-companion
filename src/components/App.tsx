import React, { useCallback, useState, useEffect, useMemo, FC } from 'react'
import cx from 'classnames'
import Fuse from 'fuse.js'
import { debounce } from 'lodash-es'

import weapons, { tiers, Weapon } from '../weapons'
import { SearchBar, WeaponsList } from './'
import styles from './App.module.css'

const fuse = new Fuse(weapons, {
  includeScore: true,
  shouldSort: true,
  includeMatches: true,
  keys: ['name'],
})

const weaponsSortedByTier = [...weapons].sort((a, b) => {
  const tierSort = tiers.indexOf(a.tier) - tiers.indexOf(b.tier)
  return tierSort === 0 ? a.name.localeCompare(b.name) : tierSort
})

const RankLegend: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={cx(styles.RankLegend, className)}>
      <ol className={styles.RankLegendList}>
        {[
          ['S', 'Guns that can beat anything in the game effortlessly.'],
          [
            'A',
            'Guns that can clear anything in the game with little difficulty.',
          ],
          [
            'B',
            'Guns that can do good damage, but you need to invest in them to make them work.',
          ],
          [
            'C',
            'Guns that can do decent damage, but you need to put a lot of work in to make them viable in most.',
          ],
          [
            'D',
            'Guns that can barely clear M4 content, even with the strongest of builds and equipment.',
          ],
          [
            'E',
            "Guns that can't clear M4 content and need buffs in order to be usable.",
          ],
        ].map(([tier, description]) => (
          <li key={tier} className={styles.RankLegendItem}>
            <span
              className={cx(
                styles.RankLegendTier,
                styles[`RankLegendTier--${tier}`]
              )}
            >
              {tier}
            </span>
            <span className={styles.RankLegendText}>{description}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

const Heading = ({ className }: { className?: string }) => {
  return (
    <header className={cx(className, styles.Heading)}>
      <h1 className={styles.HeadingTitle}>Legendary Search - BL3 Companion</h1>
      <p className={styles.HeadingSubtitle}>
        Data based on{' '}
        <a
          style={{ color: 'inherit' }}
          target="_blank"
          href="https://i.redd.it/bk6qcq69b1s41.jpg"
          rel="nofollow noopener noreferrer"
        >
          this
        </a>{' '}
        table.
      </p>
      <hr />
      <RankLegend className={styles.HeadingLegend} />
    </header>
  )
}

function getRandom<T>(arr: T[]): T | undefined {
  const idx = Math.floor(Math.random() * arr.length)
  return arr[idx]
}

const App = () => {
  const [searchString, setSearchString] = useState<string>('')
  const [results, setResults] = useState<Fuse.FuseResult<Weapon>[] | null>(null)

  const updateResults = useCallback(
    debounce((search: string) => {
      if (!search) {
        setResults(null)
        return
      }
      setResults(fuse.search(search))
    }, 1),
    []
  )
  useEffect(() => {
    if (searchString.length === 1) {
      return
    }
    updateResults(searchString)
  }, [searchString, updateResults])

  // randomize placeholder when search changes
  const placeholder = useMemo(
    () => `Search for legendaries! Try "${getRandom(weapons)?.name}"`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [searchString]
  )

  return (
    <div className={styles.App}>
      <Heading className={cx(styles.AppContainer, styles.AppHeading)} />
      <main className={styles.AppContainer}>
        <SearchBar
          className={styles.SearchBar}
          value={searchString}
          onChange={setSearchString}
          placeholder={placeholder}
        />
        <WeaponsList weapons={weaponsSortedByTier} searchResults={results} />
      </main>
    </div>
  )
}

export default App
