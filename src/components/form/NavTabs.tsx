import { FC, SyntheticEvent } from 'react'
import { Tabs, Tab } from '@mui/material'
import { navigationTabs } from '../../utils/constants'

interface INavTabsProps {
  value: string
  handleChange: (event: SyntheticEvent, newValue: string) => void
}

const NavTabs: FC<INavTabsProps> = ({ value, handleChange }) => {
  return (
    <div className="flex items-center justify-center">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        className="rounded-lg"
      >
        {navigationTabs.map((navigation) => (
          <Tab
            key={navigation.value}
            label={navigation.label}
            value={navigation.value}
            className="text-sm font-medium"
          />
        ))}
      </Tabs>
    </div>
  )
}

export default NavTabs
