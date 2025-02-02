import React from "react";
import { 
  Drawer, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  useTheme,
  Box,
  Divider,
  Toolbar
} from "@mui/material";
import { Home, Settings, Person } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

const drawerWidth = 200;

const Sidebar = () => {
    const theme = useTheme();
    const location = useLocation(); 

    const menuItems = [
        { text: "Home", path: "/", icon: <Home /> },
        { text: "Profile", path: "/profile", icon: <Person /> },
        { text: "Settings", path: "/settings", icon: <Settings /> }
    ];

    const drawer = (
        <Box sx={{ height: '100%', overflow: 'auto' }}>
            {/* Logo and Menu Section */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '12px 16px',
                    justifyContent: 'space-between',
                    borderBottom: '2px solid rgba(0, 0, 0, 0.12)'
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img 
                        src="https://th.bing.com/th/id/OIP.4BVsODH1FltC2BMCBIHRHgAAAA?rs=1&pid=ImgDetMain" 
                        alt="Logo"
                        style={{ height: '30px', width: '150px', objectFit: 'contain' }} // Updated logo size
                    />
                </Box>
            </Box>

            {/* Menu Items */}
            <List sx={{ mt: 2, px: 2 }}>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        component={Link}
                        to={item.path}
                        key={item.text}
                        sx={{
                            borderRadius: '8px',
                            mb: 0.5,
                            py: 0.75, // Reduced height of list items
                            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                color: 'grey.700',
                            },
                            '&:hover': {
                                backgroundColor: 'rgba(167, 162, 162, 0.08)',
                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                    color: 'grey.900',
                                }
                            },
                            '&.active': {
                                backgroundColor: 'rgba(0, 0, 0, 0.12)', // Grey background for active item
                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                    color: 'black', // Black text for active item
                                }
                            },
                            ...(location.pathname === item.path && {
                                backgroundColor: 'rgba(0, 0, 0, 0.12)', // Active state background
                                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                                    color: 'black', // Active state text color
                                }
                            })
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: '40px' }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText 
                            primary={item.text}
                            sx={{ 
                                '& .MuiTypography-root': { 
                                    fontWeight: 500,
                                    fontSize: '0.875rem' // Slightly smaller text
                                }
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{ display: 'flex' }}>
            {/* Desktop Drawer */}
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { 
                        width: drawerWidth,
                        bgcolor: 'background.paper',
                        boxShadow: 3,
                        borderRight: '2px solid rgba(0, 0, 0, 0.12)',
                        overflowX: 'hidden',
                        transition: theme.transitions.create('width', {
                            easing: theme.transitions.easing.sharp,
                            duration: theme.transitions.duration.enteringScreen,
                        }),
                    },
                }}
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

export default Sidebar;