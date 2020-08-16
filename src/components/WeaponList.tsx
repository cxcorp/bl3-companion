import React, { FC } from 'react'
import Fuse from 'fuse.js'
import cx from 'classnames'

import { Weapon } from '../weapons'
import HighlightedText from './HighlightedText'
import styles from './WeaponList.module.css'

const externalIcon = (
  /* From FontAwesome, licensed under CC BY 4.0. See https://fontawesome.com/license/free for details. */
  <svg
    aria-hidden="true"
    focusable="false"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className={styles.ExternalIcon}
  >
    <path
      fill="currentColor"
      d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"
    />
  </svg>
)

const WeaponsListItem: FC<{
  weapon: Weapon
  searchMatches?: readonly Fuse.FuseResultMatch[]
}> = ({ weapon, searchMatches }) => {
  const linkWrapper = (text: React.ReactChild) =>
    weapon.url ? (
      <a
        className={styles.WeaponListItemLink}
        href={weapon.url}
        target="_blank"
        title={`Borderlands Wiki: ${weapon.name}`}
        rel="nofollow noopener noreferrer"
      >
        {text}
      </a>
    ) : (
      text
    )

  return (
    <li
      className={cx(
        styles.WeaponListItem,
        styles[`WeaponListItem--${weapon.tier}`]
      )}
    >
      <div className={styles.WeaponListItemTier}>{weapon.tier}</div>
      <div className={styles.WeaponListItemText}>
        {linkWrapper(
          searchMatches ? (
            <HighlightedText
              text={weapon.name}
              regions={searchMatches[0].indices}
              highlightClassName={styles.Highlight}
              highlightComponent="em"
            />
          ) : (
            weapon.name
          )
        )}
      </div>
      {weapon.url && (
        <>
          <div className={styles.Line} />
          <div className={styles.WeaponListItemWiki}>
            {linkWrapper(<>[WIKI {externalIcon}]</>)}
          </div>
        </>
      )}
    </li>
  )
}

export const WeaponsList: FC<{
  weapons: Weapon[]
  searchResults: Fuse.FuseResult<Weapon>[] | null
}> = ({ weapons, searchResults }) => {
  return (
    <ul className={cx(styles.WeaponsList)}>
      {searchResults
        ? searchResults.map(({ matches, item }) => {
            return (
              <WeaponsListItem
                key={[item.tier, item.name].join('-')}
                weapon={item}
                searchMatches={matches}
              />
            )
          })
        : weapons.map((weapon) => {
            return (
              <WeaponsListItem
                key={[weapon.tier, weapon.name].join('-')}
                weapon={weapon}
              />
            )
          })}
    </ul>
  )
}

export default WeaponsList
