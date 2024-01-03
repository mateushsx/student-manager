import { useNavigate } from 'react-router-dom'
import { Dashboard, Checklist, Add, Class } from '@mui/icons-material'
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import './styles.css'

const drawerOptions = [
  {
    title: 'Dashboard',
    route: '/dashboard',
    Icon: Dashboard
  },
  {
    title: 'Cadastrar',
    route: '/createStudent',
    Icon: Add
  },
  {
    title: 'Aulas',
    route: '/classroom',
    Icon: Class
  },
  {
    title: 'Frequência',
    route: '/frequency',
    Icon: Checklist
  }
]

export function AppDrawer(): JSX.Element {
  const navigate = useNavigate()

  return (
    <Drawer open={true} variant="permanent">
      <List>
        {drawerOptions.map(({ Icon, route, title }) => (
          <ListItem disablePadding key={route} onClick={() => navigate(route)}>
            <ListItemButton>
              <ListItemIcon>
                <Icon color="info" />
              </ListItemIcon>

              <ListItemText>{title}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}
